<template>
  <div id="chat-header">
    <span>
      sender_id:
      <span class="id" :title="sender_id">
        {{ sender_id }}
      </span>
    </span>

    <button @click="reset">RESET</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SENDER_ID_KEY_NAME } from "../common/config";
import { v4 as uuid } from "uuid";

let sender_id = ref(
  window.localStorage.getItem(SENDER_ID_KEY_NAME) || undefined
);

console.debug("sender_id", sender_id.value);

function reset() {
  sender_id.value = uuid();
  window.localStorage.setItem(SENDER_ID_KEY_NAME, sender_id.value);
}
</script>

<style scoped>
#chat-header {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  box-shadow: 0 0.2rem 0.8rem #0004;
}

span {
  font-size: 1.5rem;

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

span.id {
  background-color: #ededed;
  padding: 0 0.5rem;
}
</style>
