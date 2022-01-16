<template>
  <div id="chat-wrapper">
    <ChatHeader></ChatHeader>
    <ChatConversation></ChatConversation>
    <ChatInput @submit="onMessageSubmit"></ChatInput>
  </div>
</template>

<script setup lang="ts">
import ChatHeader from "./ChatHeader.vue";
import ChatConversation from "./ChatConversation.vue";
import ChatInput from "./ChatInput.vue";
import { useChatStore } from "../store/chat";
import { v4 as uuid } from "uuid";
import { SENDER_ID_KEY_NAME } from "../common/config";
import { RasaService } from "../common/rasa.service";

const chat_store = useChatStore();

const sender_id =
  window.localStorage.getItem(SENDER_ID_KEY_NAME) ||
  (() => {
    let sender_id = uuid();
    window.localStorage.setItem(SENDER_ID_KEY_NAME, sender_id);
    return sender_id;
  })();

function onMessageSubmit(message: string) {
  console.log(message);

  chat_store.addMessage({
    id: uuid(),
    username: sender_id,
    message: {
      type: "text",
      text: message,
    },
    time: Date.now(),
  });

  RasaService.post({
    message: message,
    sender: sender_id,
  }).then((res) => {
    const data = res.data;
    if (!Array.isArray(data)) {
      return;
    }

    data.forEach((element) => {
      console.log("adding message", element);
      chat_store.addMessage({
        id: uuid(),
        username: "bot",
        message: {
          type: "text",
          text: element.text,
        },
        time: new Date().getTime(),
      });

      const buttons = element.buttons;
      if (!Array.isArray(buttons) || buttons.length == 0) {
        return;
      }

      chat_store.addButtons({
        id: uuid(),
        username: "bot",
        message: { type: "buttons", buttons: buttons },
        time: Date.now(),
      });
    });
  });
}
</script>

<style>
#chat-wrapper {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  overflow: hidden;
}
</style>
