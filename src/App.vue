<template>
  <Menu />
  <div id="workspace">
    <Explorer />
    <Editor />
  </div>
Marcus Acantha
Malina Hendrick
Abd al-Rashid Maximiliana
Nikoletta Tuulikki
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
