<script setup lang="ts">
import { ref } from "vue";

const cocktailNameArrayListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const cocktailNameArrayList = ref(cocktailNameArrayListInit);

const cocktailNameIndexedListInit: { [key: number]: string; } = {
  2345: "ホワイトレディ",
  4412: "ブルーハワイ",
  6792: "ニューヨーク"
};
const cocktailNameIndexedList = ref(cocktailNameIndexedListInit);

const cocktailNameMapListInit = new Map<number, string>();
cocktailNameMapListInit.set(2345, "ホワイトレディ");
cocktailNameMapListInit.set(4412, "ブルーハワイ");
cocktailNameMapListInit.set(6792, "ニューヨーク");
const cocktailNameMapList = ref(cocktailNameMapListInit);

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, { id: 2345, name: "ホワイトレディ", price: 1200 });
cocktailDataListInit.set(4412, { id: 4412, name: "ブルーハワイ", price: 1500 });
cocktailDataListInit.set(6792, { id: 6792, name: "ニューヨーク", price: 1100 });
cocktailDataListInit.set(8429, { id: 8429, name: "マティーニ", price: 1500 });
const cocktailDataList = ref(cocktailDataListInit);

const whiteLadyInit: Cocktail = {
  id: 2345,
  name: "ホワイトレディ",
  price: 1200,
  recipe: "ジン30ml+コワントロー15ml+レモン果汁+15ml"
};
const whiteLady = ref(whiteLadyInit);

interface Cocktail {
  id: number;
  name: string;
  price: number;
  recipe?: string;
}
</script>

<template>
  <ul>
    <li v-for="cocktailName in cocktailNameArrayList" v-bind:key="cocktailName">{{ cocktailName }}</li>
  </ul>
  <ul>
    <li v-for="(cocktailName, index) in cocktailNameArrayList" v-bind:key="cocktailName">{{ cocktailName }}(インデックス{{ index }})</li>
  </ul>
  <ul>
    <li v-for="(cocktailName, id) in cocktailNameIndexedList" v-bind:key="id">IDが{{ id }}のカクテルは{{ cocktailName }}</li>
  </ul>
  <ul>
    <li v-for="(cocktailName, id, index) in cocktailNameIndexedList" v-bind:key="id">{{ index + 1 }}: IDが{{ id }}のカクテルは{{ cocktailName }}</li>
  </ul>
  <ul>
    <li v-for="[id, cocktailName] in cocktailNameMapList" v-bind:key="id">IDが{{ id }}のカクテルは{{ cocktailName }}</li>
  </ul>
  <ul>
    <li v-for="[id, cocktailItem] in cocktailDataList" v-bind:key="id">{{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円</li>
  </ul>
  <dl>
    <template v-for="(value, key) in whiteLady" v-bind:key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
  <ul>
    <li v-for="r in 5" v-bind:key="r">半径{{ r }}の円の円周: {{ 2 * r * 3.14 }}</li>
  </ul>
</template>