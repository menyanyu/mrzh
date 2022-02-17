<template>
  <div class="content">
    <div>
      <h3>防弹衣</h3>
      <ul>
        <li @click="dianji($event)" v-for="item in fdy" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>高级套装</h3>
      <ul>
        <li
          class="arr"
          @click="dianji($event)"
          v-for="item in gjtz"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>护盾</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in hd" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>帽子</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in mz" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>背包扩容</h3>
      <ul>
        <li
          class="arr"
          @click="dianji($event)"
          v-for="item in bbkr"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { loginAxios } from '@/axios/network'
export default {
  data () {
    return {
      fdy: [
        '探险/生存/越野专家',
        '警用卫衣/资深特工/防暴警察',
        '防弹武装/时尚皮衣/红色车手',
        '深红/蔚蓝/磺骨战甲'
      ],

      gjtz: [
        '战斗/烈火/迷彩先锋',
        '朋克夹克',
        '白衣天使',
        '防爆外套',
        '眼镜蛇',
        '黑色恶魔',
        '重型/沙漠/酷橙武装',
        '蓝色/蔚蓝/深红强袭铠',
        '暗夜/沙漠/烈焰铠甲',
        '暗夜/沙漠/烈焰谍影',
        '夜幕/丛林/天际铁甲',
        '黑耀/蓝珀/铂金战甲',
        '银驹/炎煌/金辉战甲',
        '狼袭/密林/蓝晶战甲',
        '猎鹰/天翔/赤枭战甲'
      ],

      hd: [
        '1级护盾',
        '2级护盾',
        '3级护盾',
        '4级护盾',
        '5级护盾',
        '6级护盾',
        '7级护盾',
        '8级护盾',
        '进阶护盾',
        '守望者护盾'
      ],
      mz: [
        '棒球帽',
        '御寒棉帽',
        '朋克面罩',
        '防爆面罩',
        '科技先锋',
        '特级护目镜',
        '强袭头盔',
        '战略通讯器',
        '终结战场',
        '武装通讯器',
        '天马战盔',
        '银犀战盔',
        '狼袭战盔',
        '猎鹰战盔'
      ],

      bbkr: ['2级背包扩容袋', '3级背包扩容袋', '4级背包扩容袋']
    }
  },

  methods: {
    dianji (event) {
      var e = event.currentTarget
      loginAxios(e.innerHTML).then((res) => {})
      this.$router.push({
        path: '/Xiangqing',
        query: { goodsName: e.innerHTML }
      })
    }
  }
}
</script>

<style lang="less" scoped>
ul {
    list-style-type: none;
    display: flex;
    justify-content:center ;
    flex-wrap:wrap;

    li {
      cursor: pointer;
      margin: 10px 42px 10px 0;
      float: left;
    }
    li:hover {color:#e45151;}
  }
</style>
