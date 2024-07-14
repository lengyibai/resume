<script setup lang="ts">
import { ref, onMounted } from "vue";

import $animate from "@/utils";

interface Props {
  data: Resume.User;
}
defineProps<Props>();

const userName = ref();
const info1 = ref();
const info2 = ref();
const info3 = ref();
const head = ref();

onMounted(() => {
  $animate(userName.value, "hide");
  $animate(info1.value, "hide");
  $animate(info2.value, "hide");
  $animate(info3.value, "hide");
  $animate(head.value, "hide");
});
</script>

<template>
  <div class="header">
    <div class="header-left">
      <div ref="userName">
        <div class="name hide">{{ data.name }}</div>
      </div>
      <div class="info">
        <!-- 第一行 -->
        <div ref="info1">
          <div class="one margin hide" style="--i: 3">
            <!-- 电话 -->
            <span> <i class="iconfont icon-dianhua" />{{ data.phone }} </span>

            <!-- 邮箱 -->
            <span> <i class="iconfont icon-youxiang" />{{ data.email }} </span>
          </div>
        </div>

        <!-- 第二行 -->
        <div ref="info2">
          <div class="two margin hide" style="--i: 2">
            <!-- 个人主页 -->
            <span>
              <i class="iconfont icon-github" />
              <a :href="data.link" target="_blank">{{ data.link }}</a>
            </span>
          </div>
        </div>

        <!-- 第三行 -->
        <div ref="info3">
          <div class="three hide" style="--i: 1">
            <!-- 身份 -->
            <!-- <span> <i class="iconfont icon-shenfen" />{{ data.position }} </span> -->

            <!-- 定位 -->
            <!-- <span> <i class="iconfont icon-dingwei" />{{ data.location }} </span> -->

            <!-- 薪资 -->
            <!-- <span> <i class="iconfont icon-xinzi" />{{ data.salary }} </span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div ref="head">
        <img class="hide" :src="data.head" alt="头像" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
