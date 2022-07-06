<template>
  <Menu />
  <div id="workspace">
    <Explorer />
    <Editor />
  </div>
</template>

<script lang="ts" setup>
import Menu from "@/components/modules/Menu.vue";
import Explorer from "@/components/modules/Explorer.vue";
import Editor from "@/components/modules/Editor.vue";

</script>

<style lang="scss">
html {
  body {
    color: #fafafa;
    background-color: #262335;
    #workspace {
      display: flex;
      height: calc(100vh - 30px);
    }
  }
}
</style>
