<template>
  <div class="content">
    <h2>{{ stuff.goodName }}</h2>
    <div class="box" v-for="value in stuff.stuff" :key="value.id">
      <span class="tit">{{ value.name }}x{{ value.num }}</span>
      <span class="ipt"
        ><input
          id="id"
          type="text"
          maxlength="8"
          autocomplete="off"
          v-model="price[value.name]"
          placeholder="输入单价"
      /></span>
      <span class="hj"
        >合计：<span class="price" ref="numItem" v-if="price[value.name]">{{
          /^[0-9]*$/g.test(price[value.name])
            ? price[value.name] * value.num
            : (price[value.name] = "")
        }}</span></span
      >
    </div>
    <span v-if="stuff.type == '半成品'"
      >制作数量：<input type="range" v-model="num" min="1" max="20" />{{
        num
      }}</span
    >
    <div class="jieguo">{{ jieguo1 }}</div>
    <div class="jieguo">{{ jieguo2 }}</div>
    <button @click="calc">计算</button>
  </div>
</template>

<script>
import { loginAxios } from "@/axios/network";
export default {
  data() {
    return {
      numItem: "",
      heji: "",
      price: [],
      jieguo1: "",
      jieguo2: "",
      stuff: "",
      sum: "",
      num: 1,
    };
  },
  components: {},

  methods: {
    // 计算结果
    calc() {
      var arr = this.$refs.numItem;
      var sum = 0;
      for (var i in arr) {
        sum += Number(arr[i].innerText * this.num);
      }
      var t1 = "共需：";
      var t2 = "金条";
      var t3 = "15%税后：";
      var shSum = Math.round(sum - sum * 0.15);
      if (sum == "0") {
        this.jieguo1 = "请输入价格";
      } else {
        this.jieguo1 = t1 + sum + t2;
        this.jieguo2 = t3 + shSum + t2;
      }
    },
  },

  mounted() {
    // 接收$route传过来的数据并发送查询请求
    var goodsName = this.$route.query.goodsName;
    loginAxios(goodsName).then((res) => {
      this.stuff = res.data.data[0];
    });
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  .tit {
    width: 150px;
    display: flex;
    justify-content: flex-end;
  }
  .ipt {
    width: 150px;
    input {
      width: 100px;
    }
  }
  .hj {
    width: 150px;
    display: flex;
    .price {
      margin-top: 3px;
    }
  }
}
.jieguo {
  padding-bottom: 20px;
}
</style>
