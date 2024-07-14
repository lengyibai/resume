<script setup lang="ts">
import { onMounted, ref } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.Project[];
}
defineProps<Props>();

const projs = ref([]);

onMounted(() => {
  projs.value.forEach((item) => {
    $animate(item, "hide");
  });
});
</script>

<template>
  <div class="projects">
    <div v-for="(item, index) in data" :key="index" ref="projs">
      <div class="proj hide">
        <div class="name bold">{{ item.name }}</div>
        <div class="content">
          <div><span class="bold">技术栈：</span>{{ item.stack }}</div>
          <div>
            <span class="bold">项目职责：</span>
            <p v-for="(duty, index) in item.duty" :key="index">{{ index + 1 }}、{{ duty }}</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
