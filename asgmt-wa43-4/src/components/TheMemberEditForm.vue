<script setup lang="ts">
import { ref, computed, inject, reactive } from "vue";
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

const list: Member = reactive(
  { id: localList.id, name: localList.name,mail: localList.mail,tel: localList.tel,note: localList.note}
);

const saveList = (): void => {
    personList.set(props.id, list);
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
        <input type="text" v-model="list.name" required>
      </li>
      <li>
        <h3>メールアドレス</h3>
        <input type="text" v-model="list.mail" required>
      </li>
      <li>
        <h3>電話番号</h3>
        <input type="text" v-model="list.tel" required>
      </li>
      <li>
        <h3>備考</h3>
        <textarea v-model="list.note"></textarea>
      </li>
    </ul>
    <button type="submit">変更</button>
  </form>
</template>

