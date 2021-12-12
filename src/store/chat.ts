import { defineStore } from "pinia";

type Message = {
  id: string;
  username: "bot" | string;
  message: {
    type: "text" | "buttons";
    text: string;
  };
  time: number;
};

type ChatStore = {
  messages: Message[];
};

export const useChatStore = defineStore("chat", {
  state: (): ChatStore => {
    return {
      messages: [],
    };
  },

  actions: {
    addMessage(msg: Message) {
      this.messages.push(msg);
    },
  },
});
