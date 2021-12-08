<template>
  <Chat></Chat>
</template>

<script setup lang="ts">
import Chat from "./components/ChatWrapper.vue";
</script>

<style>
html {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-family: inherit;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;

  height: 40rem;
  width: 30rem;
  margin: 5rem auto;
}

#app * {
  border: 1px solid #bbb;
}
</style>
