<script setup lang="ts">
import { onMounted, ref } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.Skills;
}
defineProps<Props>();

const skills = ref([]);

onMounted(() => {
  skills.value.forEach((item) => {
    $animate(item, "hide");
  });
});
</script>

<template>
  <div class="skills">
    <div v-for="(item, index) in data" :key="index" ref="skills">
      <div class="skill hide" :style="'--a:' + (index + 1)">{{ index + 1 }}、{{ item }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
