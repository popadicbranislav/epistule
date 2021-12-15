<template>
  <div id="chat-conversation">
    <div class="scrollable-content">
      <template v-for="msg in messages" :key="msg.id">
        <div
          v-if="msg.message.type === 'text'"
          class="text"
          :class="[msg.username === 'bot' ? 'bot' : 'user']"
        >
          {{ msg.message.text }}
        </div>

        <div v-else-if="msg.message.type === 'buttons'" class="button-group">
          <div
            class="button"
            v-for="btn in msg.message.buttons"
            @click="onButtonResponseClick(btn)"
          >
            {{ btn.title }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatStore } from "../store/chat";
import { RasaService } from "../common/rasa.service";
import type { Button } from "../store/chat";
import { SENDER_ID_KEY_NAME } from "../common/config";

const chat_store = useChatStore();

const { messages } = storeToRefs(chat_store);

function onButtonResponseClick(btn: Button) {
  const sender_id = window.localStorage.getItem(SENDER_ID_KEY_NAME);

  if (sender_id == undefined) {
    console.error("Failed to send message on button click. No Sender ID");
    return;
  }

  // TODO: send message on button needs to add messages to store
  // RasaService.post({
  //   message: btn.payload,
  //   sender: sender_id,
  // });
}
</script>

<style scoped>
#chat-conversation {
  flex: 1;

  display: flex;
  overflow-y: auto;
}

#chat-conversation .scrollable-content {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  overflow-y: auto;

  border: none;
}

.bot.text,
.user.text {
  font-size: 1.4rem;

  max-width: 80%;
  padding: 0.7rem 1.4rem;
}

.bot.text {
  align-self: flex-start;
  background-color: coral;
}

.user.text {
  align-self: flex-end;
  background-color: turquoise;
}

.button-group {
  display: flex;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.button-group .button {
  font-size: 1.4rem;

  max-width: 10rem;
  padding: 0.5rem;

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  border: 1px solid coral;
  color: coral;

  cursor: pointer;
}

.button-group .button:hover {
  box-shadow: 0 0.2rem 0.3rem #3335;
}

.button-group .button:active {
  background: coral;
  color: white;
}
</style>
