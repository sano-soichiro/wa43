<script setup lang="ts">
import {ref} from "vue";

const name = ref("名無し");
</script>

<template>
  <section class="box">
    <p>{{ name }}さんですね!</p>
    <input type="text" v-model="name">
  </section>
</template>


<style scoped>
.box {
  border: orange 1px solid;
  margin: 10px;
}
</style>
