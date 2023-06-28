<script setup lang="ts">
import {reactive, provide} from "vue";
import TheBaseSection from "@/components/TheBaseSection.vue";
import type {Member} from "@/interfaces";

const memberListInit = new Map<number, Member>();
memberListInit.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "ちょ～イケメン。"});
memberListInit.set(47783, {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53});
const memberList = reactive(memberListInit);
provide("memberList", memberList);
</script>

<template>
  <TheBaseSection/>
</template>