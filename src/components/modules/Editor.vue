<template>
  <div>
    <v-ace-editor
    v-model:value="editorData"
    lang="json"
    theme="ambiance"
    @change="onChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import store from "@/state/index";
import { VAceEditor } from 'vue3-ace-editor';
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/ext-beautify";
let editorData = ref("");
let state = store.state;
let methods = store.methods;
const onChange = function(){
console.log(editorData.value);
}
</script>
<style lang="scss" scoped>
div {
  overflow: auto;
  border: 0;
  height: 100%;
  width: 100%;

}
</style>