<script setup lang="ts">
  import { ref } from "vue";

  const now = new Date();
  const nowStr = now.toLocaleTimeString();
  const timeStr = ref(nowStr);

  function changeTime(): void {
    const newTime = new Date();
    const newTimeStr = newTime.toLocaleTimeString();
    timeStr.value = newTimeStr;
  }
  setInterval(changeTime, 1000);
</script>

<template>
  <p>現在時刻：{{ timeStr }}</p>
</template>