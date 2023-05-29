<template>
  <div class="index">
    <router-view></router-view>
    <van-tabbar v-model="active" route active-color="red">
      <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="cate" icon="search" to="/cate">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="friends-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="my" icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});
    return { ...toRefs(data) };
  },
};
</script>

<style lang='scss'>
</style>
