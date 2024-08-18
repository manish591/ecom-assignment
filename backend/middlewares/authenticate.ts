import { Request, Response, NextFunction } from "express";
import { errorResponse, Status } from "../utils/api-response";
import { cookieName } from "../controllers/auth";
import db from "../prisma/src/db";

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const sessionId = req.cookies[cookieName];

    if (!sessionId) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "unauthorized"
      }));
    }

    const sessionAndUserData = await db.session.findUnique({
      where: {
        token: sessionId
      },
      include: {
        user: true
      }
    });

    if (!sessionAndUserData) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "unauthorized"
      }));
    }

    if (!sessionAndUserData.user) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "unauthorized"
      }));
    }

    const { user, ...sessionDoc } = sessionAndUserData;

    if (Date.now() > sessionDoc.expires_at.getTime()) {
      return res.status(401).json(errorResponse({
        status: Status.ERROR,
        code: 401,
        message: "session expired"
      }));
    }

    res.locals.user = user;
    res.locals.session = sessionDoc

    next();
  } catch (err) {
    res.status(401).json(errorResponse({
      status: Status.ERROR,
      code: 401,
      message: "unauthorized"
    }));
  }
}