<template>
  <div class="cate">
    <van-nav-bar
      title="分类"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <nav>
      <div class="box">
        <div
          v-for="(item, index) in navData"
          :key="item.id"
          @click="navlist(index, item.id)"
          :class="{ active: flag == index }"
        >
          {{ item.name }}
        </div>
      </div>
    </nav>
    <main>
      <aside v-for="item in list" :key="item.id" @click="detail(item.id)">
        <img :src="item.list_pic_url" alt="" />
        <div>
          <h5>{{ item.name }}</h5>
          <p>{{ item.goods_brief }}</p>
          <h4>￥{{ item.retail_price }}</h4>
        </div>
      </aside>
    </main>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { Catenav, CateList } from "../untils/api";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({ id: 1005000 });
    const flag = ref(0);
    const onClickLeft = () => history.back();
    const navData = ref([]);
    const list = ref([]);
    Catenav().then((res) => {
      console.log(res);
      navData.value = res.data.navData;
    });
    const navlist = (index, id) => {
      flag.value = index;
      console.log(id);
      data.id = id;
      console.log(data.id);
      CateList({ categoryId: data.id }).then((res) => {
        console.log(res);
        list.value = res.data.data;
      });
    };
    CateList({ categoryId: data.id }).then((res) => {
      console.log(res);
      list.value = res.data.data;
    });
    const detail = (id) => {
      router.push({path:'/detail',query:{id}})
    };
    return {
      ...toRefs(data),
      onClickLeft,
      navData,
      flag,
      navlist,
      list,
      detail,
    };
  },
};
</script>

<style lang='scss'>
.cate {
  width: 100%;
  nav {
    width: 100%;
    height: 30px;
    display: flex;
    overflow-x: scroll;
    .box {
      display: flex;
      div {
        width: 80px;
        text-align: center;
      }
    }
  }
  .active {
    border-bottom: 2px solid red;
  }
  main {
    aside {
      display: flex;
      align-items: center;
      img {
        width: 120px;
      }
    }
  }
}
</style>
