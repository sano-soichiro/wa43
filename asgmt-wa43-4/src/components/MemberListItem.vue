<script setup lang="ts">
import { ref, computed } from "vue";
import type { Member } from "../interfaces";

type Emits = {
    open: [id: number];
};

const props = defineProps<Member>();
const emit = defineEmits<Emits>();

const editPerson = (id: number): void => {
  emit("open", id);
}

const localNote = computed(
  (): string => {
    let localNote = "--";
    if(props.note != undefined && props.note != "") {
      localNote = props.note;
    }
    return localNote;
  }
);
</script>

<template>
  <section>
    <h2>{{ name }}</h2>
    <ul>
      <li>
        <h3>ID</h3>
        <p>{{ id }}</p>
      </li>
      <li>
        <h3>メールアドレス</h3>
        <p>{{ mail }}</p>
      </li>
      <li>
        <h3>電話番号</h3>
        <p>{{ tel }}</p>
      </li>
      <li>
        <h3>備考</h3>
        <p>{{ localNote }}</p>
      </li>
      <li>
        <button type="button" v-on:click="editPerson(id)">このメンバー情報を編集</button>
      </li>
    </ul>
  </section>
</template>

