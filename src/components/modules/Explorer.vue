<template>
  <div>Explorer
  <pre>
  {{state.editor.json}}
  </pre>
  </div>
</template>
<script lang="ts" setup>
import store from "@/state/index";
let state = store.state;
let methods = store.methods;

</script>
<style lang="scss" scoped>
div {
  resize: horizontal;
  overflow: auto;
  border: 0;
  height: 100%;
  width: 400px;
  background-color: #241b2f;
}
</style>