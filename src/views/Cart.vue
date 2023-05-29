<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-swipe-cell v-for="(item, index) in $store.state.list" :key="item.id">
      <van-row>
        <van-col span="2"
          ><van-checkbox
            v-model="item.status"
            class="che"
            @click="one"
          ></van-checkbox
        ></van-col>
        <van-col span="22">
          <van-card
            :num="item.num"
            :price="item.retail_price"
            :title="item.name"
            class="goods-card"
            :thumb="item.primary_pic_url"
          />
        </van-col>
      </van-row>

      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="del(index)"
        />
      </template>
    </van-swipe-cell>
    <van-submit-bar :price="$store.getters.Allnum*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="$store.state.checked" @click="all"
        >全选</van-checkbox
      >
    </van-submit-bar>
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
    const onClickLeft = () => history.back();
    const del = (index) => {
      store.commit("del", index);
    };
    const one = () => {
      store.commit("one");
    };
    const all = () => {
      store.commit("all");
    };
    return { ...toRefs(data), onClickLeft, del, one, all };
  },
};
</script>

<style lang='scss'>
.cart {
  width: 100%;
  height: 100vh;
  .che {
    margin-top: 40px;
    margin-left: 5px;
  }
  .delete-button {
    height: 190px;
  }
}
</style>
