<script setup lang="ts">
import {ref, computed} from "vue";

const message = ref("");
const result = ref("");
const inputBg = ref("white");
const messageColor = ref("red");

const check = (event: Event): void => {
  const checkName = event.target as HTMLInputElement;

  if(checkName.value.length == 0) {
    message.value = "お名前の入力は必須です。";
    inputBg.value = "pink";
    messageColor.value = "red";
  }
  else {
    message.value = "OK";
    inputBg.value = "white"
    messageColor.value = "green";
  }
}

const inputResult = (event: Event): void => {
  const inputValue = event.target as HTMLInputElement;
  if(inputValue.value.length == 0) {
    result.value = "";
  }
  else {
    result.value = `入力内容：${inputValue.value}`;
  }
}
</script>

<template>
  <section>
    <label for="name">お名前</label>
    <input id="name" type="text" v-on:blur="check" v-on:input="inputResult" v-bind:style="{backgroundColor: inputBg}">
    <p v-bind:style="{color: messageColor}">{{ message }}</p>
    <p>{{ result }}</p>
  </section>
</template>
