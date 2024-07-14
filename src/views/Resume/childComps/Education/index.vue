<script setup lang="ts">
import { onMounted, ref } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.Education;
}
defineProps<Props>();

const edu = ref();

onMounted(() => {
  $animate(edu.value, "hide");
});
</script>

<template>
  <div ref="edu">
    <div class="education hide">
      <div class="edu">
        <span class="school">{{ data.school }}</span>
        <span> - </span>
        <span>{{ data.major }}</span>
      </div>
      <span>{{ data.time }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
