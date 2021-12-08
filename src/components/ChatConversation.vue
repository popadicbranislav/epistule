<template>
  <div id="chat-conversation">
    <div class="left">incoming msg</div>
    <div class="right">outgoing msg</div>
    <div class="left">incoming msg</div>
    <div class="right">outgoing msg</div>
    <div class="left">incoming msg</div>
    <div class="right">outgoing msg</div>
    <div class="left">incoming msg</div>
    <div class="right">outgoing msg</div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
#chat-conversation {
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: flex-end;

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
