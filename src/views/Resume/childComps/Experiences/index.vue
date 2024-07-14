<script setup lang="ts">
import { ref, onMounted } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.Experience[];
}
defineProps<Props>();

const exp = ref([]);

onMounted(() => {
  exp.value.forEach((item) => {
    $animate(item, "hide");
  });
});
</script>

<template>
  <div class="experiences">
    <div v-for="(item, index) in data" :key="index" ref="exp">
      <div class="exp hide">
        <div class="title">
          <div class="label">{{ item.company }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
        <div class="content">
          <div v-for="(content, index) in item.content" :key="index" class="desc">
            {{ index + 1 }}、{{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
