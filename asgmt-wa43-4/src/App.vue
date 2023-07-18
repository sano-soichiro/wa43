<script setup lang="ts">
import { reactive, ref, provide } from "vue";
import type { Member } from "./interfaces";
import TheBaseSection from './components/TheBaseSection.vue';

const personListInit = new Map<number, Member>();
personListInit.set(0, {id: 4451, name: "しんちゃん", mail: "shin@hoge.com", tel: "09012345678", note: "へんなやつ"});
personListInit.set(1, {id: 4463, name: "たけちゃん", mail: "take@hoge.com", tel: "08098765432"});
personListInit.set(2, {id: 4474, name: "けんちゃん", mail: "ken@hoge.com", tel: "07045678912"});
personListInit.set(3, {id: 4482, name: "だいちゃん", mail: "dai@hoge.com", tel: "09078459632"});
const personList = reactive(personListInit);
provide("personList", personList);
</script>

<template>
  <TheBaseSection />
</template>

