<template>
  <form id="chat-form" @submit.prevent="onSubmitChatInput">
    <input
      id="chat-input"
      type="text"
      placeholder="Enter message"
      v-model="state.chat_input"
    />

    <button type="submit">send</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { RasaService } from "../common/rasa.service";
import { useChatStore } from "../store/chat";
import { v4 as uuid } from "uuid";

const chat_store = useChatStore();

const sender_id = "jfioreajvoiareujv98eauv09u390nau";

const state = reactive({
  chat_input: "",
});

/** Event handler for a submit event on the chat input form */
function onSubmitChatInput() {
  const outgoing_message = state.chat_input;
  // Clear the chat input
  state.chat_input = "";

  if (outgoing_message === "") return;

  chat_store.addMessage({
    id: uuid(),
    username: sender_id,
    message: {
      type: "text",
      text: outgoing_message,
    },
    time: new Date().getTime(),
  });

  RasaService.post({
    message: outgoing_message,
    sender: sender_id,
  }).then((res) => {
    chat_store.addMessage({
      id: uuid(),
      username: "bot",
      message: {
        type: "text",
        text: res.data[0].text,
      },
      time: new Date().getTime(),
    });
  });
}
</script>

<style scoped>
#chat-form {
  display: flex;

  align-items: center;
  justify-content: stretch;

  box-shadow: 0 -0.2rem 0.8rem #0004;
}

#chat-input {
  flex: 1;
  font-size: 2rem;

  padding: 0.5rem;

  border: none;
  outline: none;
}
</style>
