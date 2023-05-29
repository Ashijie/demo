<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" alt="" class="img" />
      </van-swipe-item>
    </van-swipe>
    <nav>
      <aside v-for="item in channel" :key="item.id">
        <img :src="item.icon_url" alt="" />
        <p>{{ item.name }}</p>
      </aside>
    </nav>
    <h4>品牌制造商直供</h4>
    <main>
      <div
        v-for="item in brandList"
        :key="item.id"
        :style="{ backgroundImage: 'url('+item.new_pic_url +')',
        backgroundRepeat : 'no-repeat',
        backgroundSize:'cover'
         }"
      >{{item.name}}</div>
    </main>
    <div class="hotGoods">
      <div v-for="item in hotGoods" :key="item.id">
        <img :src="item.list_pic_url" alt="">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { HomeData } from "../untils/api";
import { ref, reactive, toRefs } from "vue";
export default {
  name: "HomeView",
  comments: {},
  setup() {
    const hotGoods =ref([]);
    const brandList = ref([]);
    const channel = ref([]);
    const banner = ref([]);
    HomeData().then((res) => {
      console.log(res);
      banner.value = res.data.banner;
      channel.value = res.data.channel;
      brandList.value = res.data.brandList;
      hotGoods.value = res.data.hotGoods
    });
    return {
      banner,
      channel,
      brandList,
      hotGoods
    };
  },
};
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  .img {
    width: 100%;
  }
  nav {
    width: 100%;
    height: 80px;
    display: flex;
    text-align: center;
    margin: 10px 0px;
    aside {
      width: 100px;
      height: 100%;
    }
  }
  h4 {
    margin-left: 20px;
  }
  main {
    flex-wrap: wrap;
    display: flex;
    margin: 10px 0;
    width: 100%;
    height: 200px;
    // border: 1px solid black;
    justify-content: space-between;
    div{
      width: 185px;
      height: 85px;

    }
  }
  .hotGoods{
    flex-wrap: wrap;
    width: 100%;
    min-height: 300px;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
    div{
      margin-top: 5px;
      width: 185px;
      // background-color: pink;
      height: 200px;
      img{
        width: 185px;
        height: 130px;
      }
    }
  }
}
</style>
