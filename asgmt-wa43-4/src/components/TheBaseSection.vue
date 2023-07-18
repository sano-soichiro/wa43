<script setup lang="ts">
import { ref, inject } from "vue";
import MemberListItem from "./MemberListItem.vue";
import type { Member } from "@/interfaces";
import TheMemberEditForm from "./TheMemberEditForm.vue";

const personList = inject("personList") as Map<number, Member>;
const editId = ref(1);
const isModalOpen = ref<boolean>(false);

type Emits = {
  open: [open: boolean];
};

const open = (id: number): void => {
    isModalOpen.value = true;
    editId.value = id;
};
const hidden = ():void => {
  isModalOpen.value = false;
}
</script>

<template>
  <section>
    <h1>WA43 課題4 コンポーネント間連携の確認</h1>
    <MemberListItem 
      v-for="[id, person] in personList" v-bind:key="id"
      v-bind:id="id"
      v-bind:name="person.name"
      v-bind:mail="person.mail"
      v-bind:tel="person.tel"
      v-bind:note="person.note"
      v-on:open="open"
    />
    <TheMemberEditForm
      v-bind:id="editId"
      v-bind:key="editId"
      v-show="isModalOpen"
      v-on:hidden="hidden"
    />
  </section>
</template>

