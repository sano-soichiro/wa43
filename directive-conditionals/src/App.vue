<script setup lang="ts">
import { ref, computed } from "vue";

const randomInit = Math.round(Math.random() * 100);
const randomNumber = ref(randomInit);
const showOrNot = computed(
  (): boolean => {
    let showOrNot = false;
    if(randomNumber.value >= 50) {
      showOrNot = true;
    }
    return showOrNot;
  }
);
const generateRand = () => {
  randomNumber.value = Math.round(Math.random() * 100);
}
</script>

<template>
  <p>
    乱数を<button v-on:click="generateRand">再発生</button>
  </p>
  <p>
    点数は{{ randomNumber }}点で
    <span v-if="randomNumber >= 80">優です。</span>
    <span v-else-if="randomNumber >= 70">良です。</span>
    <span v-else-if="randomNumber >= 60">可です。</span>
    <span v-else>不可です。</span>
  </p>
  <div v-if="showOrNot">
    <img src="./assets/logo.svg" alt="Vue logo" width="150">
    <p>ロゴを表示</p>
  </div>
  <p>
    点数は{{ randomNumber }}点
    <template v-if="randomNumber >= 80">
      で優です。
      <span class="colorRed">素晴らしい!</span>
    </template>
  </p>
  <p v-show="showOrNot">
    条件に合致したので表示
  </p>
</template>

<style>
.colorRed {
  color: red;
}
</style>