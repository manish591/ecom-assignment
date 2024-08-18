import { type Handle } from "@sveltejs/kit";
import { BASE_URL } from "$lib/constants";

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = event.cookies.getAll().map(({ name, value }) => `${name}=${value}`).join(",");

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      credentials: "include",
      headers: {
        "cookie": cookies,
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      event.locals.isLoggedIn = true;
    }
  } catch (err) {
    console.log(err);
    event.locals.isLoggedIn = false;
  }

  return resolve(event);
}