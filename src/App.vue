<template>
  <Chat></Chat>
</template>

<script setup lang="ts">
import Chat from "./components/ChatComponent.vue";
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

:root {
  --clr-primary: green;
  --clr-secondary: turquoise;
  --text: #262626;
  --text-light: #ededed;
}

#app {
  /* fonts */
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;

  height: 100vh;
  width: 100vw;
}
</style>
