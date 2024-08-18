import { Request, Response } from "express";
import { hash, verify } from "@node-rs/argon2";

import db from "../prisma/src/db";
import { errorResponse, Status, successResponse } from "../utils/api-response";
import { generateRandonString } from "../utils/crypto";

export const cookieName = `${process.env.NODE_ENV}-session-token`;

function createCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    expires: expiresAt,
    path: "/"
  } as const
}

async function signup(req: Request, res: Response) {
  try {
    const { firstname, lastname, email, password } = req.body;

    const isEmailExists = await db.user.findFirst({
      where: {
        email
      }
    });

    if (isEmailExists) {
      return res.status(409).json(errorResponse({
        status: Status.ERROR,
        code: 409,
        message: "Invalid email or password!"
      }));
    }

    const hashPassword = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });

    const user = await db.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashPassword
      }
    });

    const sessionToken = generateRandonString(20);

    const session = await db.session.create({
      data: {
        token: sessionToken,
        expires_at: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
        user_id: user.id,
      }
    });

    res
      .cookie(
        cookieName,
        session.token,
        createCookieOptions(session.expires_at)
      )
      .status(201)
      .json(
        successResponse({
          code: 201,
          status: Status.SUCCESS,
          message: "Successfully created user",
          data: user
        })
      );
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An internal server error occured"
    }));
  }
}

async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const existinguser = await db.user.findFirst({
      where: {
        email
      }
    });

    if (!existinguser) {
      return res.status(409).json(errorResponse({
        status: Status.ERROR,
        code: 409,
        message: "Invalid email or password!"
      }));
    }

    const validPassword = verify(existinguser.password, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });

    if (!validPassword) {
      return res.status(400).json(errorResponse({
        status: Status.ERROR,
        code: 400,
        message: "Invalid username or password"
      }));
    }

    const sessionId = generateRandonString(20);

    const session = await db.session.create({
      data: {
        token: sessionId,
        expires_at: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
        user_id: existinguser.id,
      }
    });

    res
      .cookie(
        cookieName,
        session.token,
        createCookieOptions(session.expires_at)
      )
      .status(200)
      .json(
        successResponse({
          code: 200,
          status: Status.SUCCESS,
          message: "Successfully logged in",
          data: existinguser
        })
      );
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An internal server error occured"
    }));
  }
}

async function logout(req: Request, res: Response) {
  try {
    const sessionID = req.cookies[cookieName];

    if (!sessionID) {
      return res.status(400).json(errorResponse({
        status: Status.ERROR,
        code: 400,
        message: "Bad request"
      }));
    }

    await db.session.delete({
      where: {
        token: sessionID
      }
    });

    res.clearCookie(cookieName).status(200).json(successResponse({
      status: Status.SUCCESS,
      code: 200,
      message: "Successfully logged out"
    }));
  } catch (err) {
    res.status(500).json(errorResponse({
      status: Status.ERROR,
      code: 500,
      message: "An internal server error occured"
    }));
  }
}

export default {
  signup,
  login,
  logout
}