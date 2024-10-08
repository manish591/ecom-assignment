import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    isLoggedIn: locals.isLoggedIn ? true : false
  }
}