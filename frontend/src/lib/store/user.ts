import { writable } from "svelte/store";

function createLoginStatus() {
  const { subscribe, set } = writable(false);

  return {
    subscribe,
    updateLoginStatus: (currentStatus: boolean) => set(currentStatus)
  }
}

export const userLoginStatus = createLoginStatus();