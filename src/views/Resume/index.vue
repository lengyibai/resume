<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

import Header from "./childComps/Header/index.vue";
import Skill from "./childComps/Skill/index.vue";
import Works from "./childComps/Works/index.vue";
import Education from "./childComps/Education/index.vue";
import Experiences from "./childComps/Experiences/index.vue";
import Projects from "./childComps/Projects/index.vue";

import TopTitle from "@/components/TopTitle/index.vue";

const data = ref<ResumeData>();

axios.get(location.origin + `/json/resume.json?temp=${Math.random()}`).then((res) => {
  data.value = res.data;
});
</script>

<template>
  <div v-if="data" class="resume">
    <Header :data="data.user" />
    <TopTitle title="专业技能" />
    <Skill :data="data.skills" />
    <TopTitle title="个人作品" />
    <Works :data="data.works" />
    <TopTitle title="教育经历" />
    <Education :data="data.education" />
    <TopTitle title="工作经历" />
    <Experiences :data="data.experiences" />
    <TopTitle title="项目经历" />
    <Projects :data="data.projects" />
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
