<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const propTitle = ref("テンプレート変数のProps利用");
const propContent = ref("テンプレート変数をProprsとして利用するには、v-bindを使う。");
const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, {id: 1, title: "今日の天気", content: "今日は一日中、晴でしょう。"});
weatherListInit.set(2, {id: 2, title: "明日の天気", content: "明日は一日中、雨でしょう。"});
weatherListInit.set(3, {id: 3, title: "明後日の天気", content: "明後日は一日中、雪でしょう。"});
const weatherList = ref(weatherListInit);

interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <h1>Props</h1>
  <section>
    <h2>属性に直接記述</h2>
    <OneSection title="Propsの利用" content="子コンポーネントにデータを渡すにはPropsを利用する。"/>
  </section>
  <section>
    <h2>テンプレート変数を利用</h2>
    <OneSection v-bind:title="propTitle" v-bind:content="propContent"/>
  </section>
  <section>
    <h2>ループでコンポーネントを生成</h2>
    <OneSection v-for="[id, weather] in weatherList" v-bind:key="id" v-bind:title="weather.title" v-bind:content="weather.content"/>
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>