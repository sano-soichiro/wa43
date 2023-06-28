<script setup lang="ts">
import { ref, computed } from "vue";

const cocktailArrayListInit = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const cocktailArrayList = ref(cocktailArrayListInit);

const whiteLadyInit: Cocktail = {
  id: 2345,
  name: "ホワイトレディ",
  price: 1200,
  recipe: "ジン30ml+コワントロー15ml+レモン果汁+15ml"
};
const whiteLady = ref(whiteLadyInit);

const cocktailNameListInit = new Map<number, string>();
cocktailNameListInit.set(2345, "ホワイトレディ");
cocktailNameListInit.set(4412, "ブルーハワイ");
cocktailNameListInit.set(6792, "ニューヨーク");
const cocktailNameList = ref(cocktailNameListInit);

const cocktailDataArrayInit: Cocktail[] = [
  { id: 2345, name: "ホワイトレディ", price: 1200 },
  { id: 4412, name: "ブルーハワイ", price: 1500 },
  { id: 6792, name: "ニューヨーク", price: 1100 },
  { id: 8429, name: "マティーニ", price: 1500 }
];
const cocktailDataArray = ref(cocktailDataArrayInit);

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, { id: 2345, name: "ホワイトレディ", price: 1200 });
cocktailDataListInit.set(4412, { id: 4412, name: "ブルーハワイ", price: 1500 });
cocktailDataListInit.set(6792, { id: 6792, name: "ニューヨーク", price: 1100 });
cocktailDataListInit.set(8429, { id: 8429, name: "マティーニ", price: 1500 });
const cocktailDataList = ref(cocktailDataListInit);

const cocktail1500Array = computed(
  (): Cocktail[] => {
    const newList = cocktailDataArray.value.filter(
      (cocktailItem: Cocktail): boolean => {
        return cocktailItem.price == 1500;
      }
    );
    return newList;
  }
);

const cocktail1500List = computed(
  (): Map<number, Cocktail> => {
    const newList = new Map<number, Cocktail>();
    cocktailDataList.value.forEach(
      (value: Cocktail, key: number): void => {
        if(value.price == 1500) {
          newList.set(key, value);
        }
      }
    );
    return newList;
  }
);

const changeCocktailArrayList = (): void => {
  cocktailArrayList.value = [ "バラライカ", "XYZ", "マンハッタン" ];
};
const addCocktailArrayList= (): void => {
  cocktailArrayList.value.push("ブルームーン");
};
const deleteFromCocktailArrayList = (): void => {
  cocktailArrayList.value.pop();
};

const changeWhiteLadyPrice = (): void => {
  whiteLady.value.price = 1500;
};

const changeCocktailNameList = (): void => {
  cocktailNameList.value.clear();
  cocktailNameList.value.set(3416, "バラライカ");
  cocktailNameList.value.set(5517, "XYZ");
  cocktailNameList.value.set(7415, "マンハッタン");
};
const addCocktailNameList= (): void => {
  cocktailNameList.value.set(8894, "ブルームーン");
};
const deleteFromCocktailNameList = (): void => {
  cocktailNameList.value.delete(5517);
};


const changeWhiteLadyPriceInArray = (): void => {
  const whiteLady = cocktailDataArray.value[0];
  whiteLady.price = 1500;
}

const changeWhiteLadyPriceInList = (): void => {
  const whiteLady = cocktailDataList.value.get(2345) as Cocktail;
  whiteLady.price = 1500;
};

interface Cocktail {
  id: number;
  name: string;
  price: number;
  recipe?: string;
}
</script>

<template>
  <section>
    <h1>cocktailArrayListを操作</h1>
    <ul>
      <li v-for="(cocktailName, index) in cocktailArrayList" v-bind:key="cocktailName">{{ cocktailName }}(インデックス{{ index }})</li>
    </ul>
    <p>
      CocktailListを
      <button v-on:click="changeCocktailArrayList">変更</button>
    </p>
    <p>
      CocktailListの末尾に「ブルームーン」を
      <button v-on:click="addCocktailArrayList">追加</button>
    </p>
    <p>
      CocktailListから末尾の要素を
      <button v-on:click="deleteFromCocktailArrayList">削除</button>
    </p>
  </section>
  <section>
    <h1>WhiteLadyのデータ操作</h1>
    <dl>
      <template v-for="(value, key) in whiteLady" v-bind:key="key">
        <dt>{{ key }}</dt>
        <dd>{{ value }}</dd>
      </template>
    </dl>
    <p>
      WhiteLadyの価格を1500円に
      <button v-on:click="changeWhiteLadyPrice">変更</button>
    </p>
  </section>
  <section>
    <h1>cocktailNameListのデータ操作</h1>
    <ul>
      <li v-for="[id, cocktailName] in cocktailNameList" v-bind:key="id">IDが{{ id }}のカクテルは{{ cocktailName }}</li>
    </ul>
    <p>
      cocktailNameListを
      <button v-on:click="changeCocktailNameList">変更</button>
    </p>
    <p>
      cocktailNameListに「ブルームーン」を
      <button v-on:click="addCocktailNameList">追加</button>
    </p>
    <p>
      cocktailNameListから5517のXYZを
      <button v-on:click="deleteFromCocktailNameList">削除</button>
    </p>
  </section>
  <section>
    <h1>CocktailDataArrayの絞り込み</h1>
    <p>価格が1500円のカクテル</p>
    <ul>
      <li v-for="cocktailItem in cocktail1500Array" v-bind:key="cocktailItem.id">{{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円</li>
    </ul>
    <p>
      CocktailDataArray内のホワイトレディの価格を1500円に
      <button v-on:click="changeWhiteLadyPriceInArray">変更</button>
    </p>
  </section>
  <section>
    <h1>cocktailDataListの絞り込み</h1>
    <p>価格が1500円のカクテル</p>
    <ul>
      <li v-for="[id, cocktailItem] in cocktail1500List" v-bind:key="id">{{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円</li>
    </ul>
    <p>
      cocktailDataList内のホワイトレディの価格を1500円に
      <button v-on:click="changeWhiteLadyPriceInList">変更</button>
    </p>
  </section>
</template>