<template>
  <div id="chat-conversation">
    <div class="scrollable-content">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="msg.username === 'bot' ? 'left' : 'right'"
      >
        <template v-if="msg.message.type === 'text'">
          {{ msg.message.text }}
        </template>
        <template v-else-if="msg.message.type === 'buttons'">
          <div></div>
          {{ msg.message.buttons }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatStore } from "../store/chat";
import { ButtonGroup } from "../store/chat";

const chat_store = useChatStore();

const { messages } = storeToRefs(chat_store);
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

.left,
.right {
  font-size: 1.4rem;

  max-width: 80%;
  padding: 0.7rem 1.4rem;
  border-radius: 1rem;

  color: white;
}

.left {
  align-self: flex-start;
  border-top-left-radius: 0;

  background-color: #318ffa;
}

.right {
  align-self: flex-end;
  border-top-right-radius: 0;

  background-color: #8f31fa;
}
</style>
