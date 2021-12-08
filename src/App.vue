<template>
  <div>
    app
    <Chat></Chat>
  </div>
</template>

<script setup lang="ts">
import Chat from "./components/ChatWrapper.vue";
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}

* {
  border: 1px solid #bbb;
}
</style>
