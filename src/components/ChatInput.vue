<template>
  <form id="chat-form" @submit.prevent="onSubmitChatInput">
    <input
      class="chat-input"
      type="text"
      placeholder="Enter message"
      v-model="state.chat_input"
    />

    <button class="chat-submit-btn" type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"
        />
      </svg>
    </button>
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

.chat-input {
  flex: 1;
  font-size: 2rem;

  padding: 0.5rem;

  border: none;
  outline: none;
}

.chat-submit-btn {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;

  /* height: 100%; */

  /* font-size: 1.5rem; */

  color: #aaa;
  cursor: pointer;
}

.chat-submit-btn:hover {
  color: #888;
}
</style>
