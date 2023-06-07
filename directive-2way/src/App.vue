<script setup lang="ts">
import {ref} from "vue";

const inputNameBind = ref("しんちゃん");
const inputNameOn = ref("ななし");
const inputName2Way = ref("双方向");
const inputNameModel = ref("もでる!");

const onInputName = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  inputNameOn.value = element.value;
}

const onInputName2Way = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  inputName2Way.value = element.value;
}
</script>

<template>
  <section>
    <input type="text" v-bind:value="inputNameBind">
  </section>
  <br>
  <section>
    <input type="text" v-on:input="onInputName">
    <p>{{inputNameOn}}</p>
  </section>
  <section>
    <input type="text" v-bind:value="inputName2Way" v-on:input="onInputName2Way">
    <p>{{inputName2Way}}</p>
  </section>
  <section>
    <input type="text" v-model="inputNameModel">
    <p>{{inputNameModel}}</p>
  </section>
</template>