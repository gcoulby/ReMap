<template>
  <div id="configurator" class="container">
    <!-- <h1>Welcome to Tauri!</h1> -->
    <div class="relative left-5">
      {{ useRowOffset(-1) }}
      <KeyRow v-for="(row, index) in keyConfig" :configuration="row" :index="index" :key="index"></KeyRow>
      <div class="h-80"></div>
      <p>Selected Key: {{ useSelectedKey.get() }}</p>
    </div>

    <!-- <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank"
        >Tauri</a
      >
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank"
        >rust-analyzer</a
      >
    </p> -->

    <!-- <Greet /> -->
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Greet from "./components/Greet.vue";
import KeyRow from "./components/KeyRow.vue";
import keyConfig from "./assets/keyboard-layout.json";
import { useRowOffset } from "./composables/useRowOffset";
import { useKeyDownEvent } from "./composables/useKeyDownEvent";
import { useSelectedKey } from "./composables/useSelectedKey";


useKeyDownEvent( (event: KeyboardEvent) => {
  useSelectedKey.set(event.code); 
  console.log(event); 
})

</script>
