<template>
  <div class="content">
    <ul>
      <li class="arr" @click="dianji($event)" v-for="item in arrs" :key="item">
       {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { loginAxios } from '@/axios/network'
export default {
  data () {
    return {
      arrs: [
        '生铁',
        '六角钉',
        '黑火药',
        '粗布条',
        '铁铸件',
        '螺钉',
        '布',
        '塑料',
        '硬铝合金',
        '无烟火药',
        '尼龙布',
        '钢',
        '钢管',
        '涤纶布',
        '皮革',
        '弹簧',
        '工程塑料',
        '呢绒布',
        '缝纫线',
        '武器零件',
        '钛合金',
        '纤维布',
        '玻璃钢',
        '汞齐',
        '低温钢',
        '法兰绒',
        '无机硅胶',
        '高温合金',
        '锦纶布',
        '中碳钢',
        '混纺材料',
        '混凝土',
        '软磁合金',
        '专用铸铁',
        '平纹布',
        '纳米纤维',
        '刚性陶瓷',
        '电阻合金',
        '碳素精钢',
        '涂层布',
        '静电纺丝',
        '钢塑复合管',
        '非晶合金',
        '耐候钢',
        '珊瑚绒',
        '仿生甲片',
        '金属线材',
        '锰硅合金',
        '球扁钢',
        '蕉麻布',
        '高锰合金管',
        '莱卡纤维'
      ]
    }
  },

  methods: {

    dianji (event) {
      var e = event.currentTarget
      loginAxios(e.innerHTML).then((res) => {
      })

      this.$router.push({ path: '/Xiangqing', query: { goodsName: e.innerHTML } })
    }
  }

}
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
  li {
    cursor: pointer;
    margin: 30px;
    float: left;
  }
  li:hover {color:#e45151;}
}
</style>
