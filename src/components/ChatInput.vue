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

const sender_id = "jfioejvreoailvje8v9u089emuv90eu8av9u";

const state = reactive({
  chat_input: "",
});

/** Event handler for a submit event on the chat input form */
function onSubmitChatInput() {
  const outgoing_message = state.chat_input;
  // Clear the chat input
  state.chat_input = "";

  if (outgoing_message === "") return;

  RasaService.post({
    message: outgoing_message,
    sender: sender_id,
  }).then((res) => {
    console.log(`message: "${outgoing_message}"\n`, "response: ", res.data);
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
