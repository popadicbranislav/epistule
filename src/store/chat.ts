import { defineStore } from "pinia";

export const useStore = defineStore("chat", {
  state: () => {
    return {
      count: 1,
    };
  },
});
