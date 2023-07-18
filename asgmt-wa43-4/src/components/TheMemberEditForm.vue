<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { Member } from "../interfaces";

interface Props {
  id: number
}
type Emits = {
  hidden: []
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const editId = props.id;
const personList = inject("personList") as Map<number, Member>;
const localList = personList.get(editId) as Member;

const saveList = (): void => {
    const setData = personList.get(props.id) as Member;
    setData.name = localList.name;
    setData.mail = localList.mail;
    setData.tel = localList.tel;
    setData.note = localList.note;
    personList.set(props.id, setData);
    emit("hidden");
};
</script>

<template>
  <form v-on:submit.prevent="saveList" >
    <h2>必要な情報を入力してください</h2>
    <ul>
      <li>
        <h3>ID</h3>
        <p>{{ localList.id }}</p>
      </li>
      <li>
        <h3>名前</h3>
        <input type="text" v-model="localList.name" required>
      </li>
      <li>
        <h3>メールアドレス</h3>
        <input type="text" v-model="localList.mail" required>
      </li>
      <li>
        <h3>電話番号</h3>
        <input type="text" v-model="localList.tel" required>
      </li>
      <li>
        <h3>備考</h3>
        <textarea v-model="localList.note"></textarea>
      </li>
      <li>
        <button type="submit">変更</button>
      </li>
    </ul>
  </form>
</template>

