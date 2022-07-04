<template>
  <Explorer />
  <Editor />
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Explorer from "@/components/modules/Explorer.vue"
import Editor from "@/components/modules/Editor.vue"


</script>

<style lang="scss">
html {
  body {
    color: #fafafa;
    background-color: #000;
  }
}
</style>
