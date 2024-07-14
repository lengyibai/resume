<script setup lang="ts">
import { onMounted, ref } from "vue";

import $animate from "@/utils";

interface Props {
  title: string;
}
defineProps<Props>();

const topTitle = ref();

onMounted(() => {
  $animate(topTitle.value, "hide");
});
</script>

<template>
  <div ref="topTitle">
    <div class="top-title hide">
      {{ title }}
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
