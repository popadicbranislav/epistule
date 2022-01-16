<script setup lang="ts">
import { reactive } from "vue";

const emit = defineEmits<{ (e: "submit", message: string): void }>();

const state = reactive({
  chat_input: "",
});

/** Event handler for a submit event on the chat input form */
function onSubmitChatInput() {
  const outgoing_message = state.chat_input;
  // Clear the input
  state.chat_input = "";

  if (outgoing_message === "") return;

  emit("submit", outgoing_message);
}
</script>

<template>
  <form class="chat-form" @submit.prevent="onSubmitChatInput">
    <input
      class="chat-form__input"
      type="text"
      placeholder="Enter message"
      v-model="state.chat_input"
      autofocus
    />

    <button class="chat-form__submit" type="submit">
      <i class="fas fa-envelope"></i>
    </button>
  </form>
</template>

<style lang="scss" scoped>
.chat-form {
  --size: 50px;
  display: flex;
  font-size: 2rem;
  position: fixed;
  inset: auto 0.5rem 0.5rem;

  border: 1px solid var(--clr-primary);
  border-radius: 100vh;
  overflow: hidden;

  &:focus-within {
    box-shadow: 0 0 0 2px var(--clr-primary);
  }

  &__input {
    // background: pink;
    border: 0;

    padding: 0 0.5em;
    flex-grow: 1;

    &:focus {
      outline: 0;
    }
  }

  &__submit {
    background: 0;
    color: var(--clr-primary);

    border: 0;
    border-radius: 100vh;

    width: var(--size);
    height: var(--size);
    padding: 0 0.2em;

    cursor: pointer;

    opacity: 0.7;

    &:focus,
    &:hover {
      outline: 0;
      opacity: 1;
    }
  }
}
</style>
