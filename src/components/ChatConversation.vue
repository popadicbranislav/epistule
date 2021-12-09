<template>
  <div id="chat-conversation">
    <!-- <div>
      {{ count }}
      <button @click="count++">+</button>
      <button @click="count--">-</button>
    </div> -->
    <div class="scrollable-content">
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
      <div class="left">incoming msg</div>
      <div class="right">outgoing msg</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "../store/chat";
import { watch } from "vue";

const chat = useStore();

const { count } = storeToRefs(chat);

// watch(count, (newCount) => {
//   console.log(newCount);
// });
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

  border: none;
  padding: 1rem 0.75rem;
}

.left,
.right {
  max-width: 80%;
  padding: 0.5rem;
  border-radius: 1rem;
}

.left {
  align-self: flex-start;
}

.right {
  align-self: flex-end;
}
</style>
