<template>
  <div id="chat-wrapper">
    <ChatHeader></ChatHeader>
    <ChatConversation></ChatConversation>
    <ChatInput></ChatInput>
  </div>
</template>

<script setup lang="ts">
import ChatHeader from "./ChatHeader.vue";
import ChatConversation from "./ChatConversation.vue";
import ChatInput from "./ChatInput.vue";
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
