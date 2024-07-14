<script setup lang="ts">
import { onMounted, ref } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.Work[];
}
defineProps<Props>();

const boxs = ref([]);

onMounted(() => {
  boxs.value.forEach((item) => {
    $animate(item, "hide");
  });
});
</script>

<template>
  <div class="works">
    <div v-for="(item, index) in data" :key="index" ref="boxs">
      <div class="work hide" :style="'--b:' + index">
        <div class="name">{{ item.name }}：</div>
        <div>{{ item.desc }}</div>
        <div>
          <div v-for="(link, index) in item.links" :key="index">
            <div>• {{ link.label }}</div>
            <a :href="link.value" target="_blank">{{ link.value }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
