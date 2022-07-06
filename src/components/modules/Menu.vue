<template>
  <div>
    <ul>
        <li>File</li>
        <li>Edit</li>
        <li>Selection</li>
        <li>View</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  border: 0;
  height: 30px;
  width: 100vw;
  background-color: #241b2f;
  & > ul {
    & > li {
        display: inline;
        margin: 5px;
    }
  }
}
</style>