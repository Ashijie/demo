<template>
  <div class="detail">
    <van-nav-bar
      title="分类详情"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in gallery" :key="item.id">
        <img :src="item.img_url" alt="" class="img" />
      </van-swipe-item>
    </van-swipe>
    <main>
      <aside>
        <h3>{{ info.name }}</h3>
        <p>{{ info.goods_brief }}</p>
        <h4>￥{{ info.retail_price }}</h4>
      </aside>
      <nav>
        <p>￥{{ info.sell_volume }}</p>
      </nav>
    </main>
    <span v-html="info.goods_desc"></span>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" dot />
      <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
      <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
      <van-action-bar-button type="warning" text="加入购物车" @click="add" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script>
import { Detaillist } from "../untils/api";
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { showToast } from "vant";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});
    const onClickLeft = () => history.back();
    const add = () => {
        store.commit('add',info.value );
        router.push('/cart')
    };
    const id = route.query.id;
    const info = ref([]);
    const gallery = ref([]);
    console.log(id);
    Detaillist(id).then((res) => {
      console.log(res);
      gallery.value = res.data.gallery;
      info.value = res.data.info;
    });
    return { ...toRefs(data), onClickLeft, gallery, info, add };
  },
};
</script>

<style lang='scss'>
.detail {
  width: 100%;
  .my-swipe {
    .img {
      width: 100%;
      // height: 200px;
    }
  }
  main {
    display: flex;
    justify-content: space-between;
    aside {
      margin-left: 20px;
      h4 {
        color: red;
      }
      p {
        color: gray;
        margin: 5px 0;
      }
    }
    nav {
      margin-right: 20px;
      margin-top: 53px;
    }
  }
  img {
    width: 100%;
  }
  .van-action-bar {
    margin-bottom: 50px;
  }
}
</style>
