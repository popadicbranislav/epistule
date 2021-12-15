import { defineStore } from "pinia";

export type Message = {
  id: string;
  username: string;
  message: {
    type: "text";
    text: string;
  };
  time: number;
};

export type Button = {
  title: string;
  payload: string;
};

export type ButtonGroup = {
  id: string;
  username: string;
  message: {
    type: "buttons";
    buttons: Button[];
  };
  time: number;
};

type ChatStore = {
  messages: Array<Message | ButtonGroup>;
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

    addButtons(buttons: ButtonGroup) {
      this.messages.push(buttons);
    },
  },
});
