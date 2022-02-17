<template>
  <div>
    <!-- <li v-for="item in arrn" :key="item">"goodName": "{{}}","stuff": {{this.arr}},"type": "武器"</li> -->
    <li v-for="item in arrstuff" :key="item">
      "goodName": "{{ arrname.item }}","stuff":{{ item }},"type": "武器"
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrname: [
      ],
      arrstuff: [
        [
          { name: '布', num: '9' },
          { name: '塑料', num: '9' },
          { name: '兽皮', num: '10' }
        ],
        [
          { mane: '布', num: '10' },
          { mane: '塑料', num: '10' },
          { mane: '螺丝', num: '10' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '硬铝合金', num: '10' },
          { mane: '麻绳', num: '10' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '铁铸件', num: '12' },
          { mane: '塑料', num: '12' },
          { mane: '兽筋', num: '13' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '铁铸件', num: '12' },
          { mane: '布', num: '12' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '塑料', num: '12' },
          { mane: '六角钉', num: '12' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '涤纶布', num: '10' },
          { mane: '皮革', num: '10' },
          { mane: '硬铝合金', num: '10' },
          { mane: '兽毛', num: '13' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '涤纶布', num: '10' },
          { mane: '兽筋', num: '13' },
          { mane: '塑料', num: '12' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '呢绒布', num: '10' },
          { mane: '缝纫线', num: '10' },
          { mane: '涤纶布', num: '13' },
          { mane: '薄膜面料', num: '5' },
          { mane: '防弹陶瓷', num: '5' }
        ],
        [
          { mane: '皮革', num: '13' },
          { mane: '缝纫线', num: '10' },
          { mane: '尼龙布', num: '13' },
          { mane: '薄膜面料', num: '5' },
          { mane: '防弹陶瓷', num: '5' }
        ],
        [
          { mane: '纤维布', num: '10' },
          { mane: '石纹蜂窝板', num: '10' },
          { mane: '塑料', num: '18' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '纤维布', num: '10' },
          { mane: '玻璃钢', num: '10' },
          { mane: '缝纫线', num: '11' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '锦纶布', num: '10' },
          { mane: '武器零件', num: '11' },
          { mane: '纤维布', num: '11' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '锦纶布', num: '10' },
          { mane: '武器零件', num: '11' },
          { mane: '纤维布', num: '11' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '混纺材料', num: '10' },
          { mane: '蚕丝', num: '17' },
          { mane: '专用零件', num: '8' },
          { mane: '薄膜面料', num: '7' },
          { mane: '防弹陶瓷', num: '7' }
        ],
        [
          { mane: '纳米纤维', num: '12' },
          { mane: '平纹布', num: '20' },
          { mane: '弹性橡胶', num: '14' },
          { mane: '防弹陶瓷', num: '12' },
          { mane: '薄膜面料', num: '12' }
        ],
        [
          { mane: '静电纺丝', num: '9' },
          { mane: '涂层布', num: '8' },
          { mane: '钢塑复合管', num: '9' },
          { mane: '防弹陶瓷', num: '10' },
          { mane: '薄膜面料', num: '10' }
        ],
        [
          { mane: '仿生甲片', num: '9' },
          { mane: '珊瑚绒', num: '8' },
          { mane: '金属线材', num: '9' },
          { mane: '防弹陶瓷', num: '10' },
          { mane: '薄膜面料', num: '10' }
        ],
        [
          { mane: '莱卡纤维', num: '9' },
          { mane: '蕉麻布', num: '8' },
          { mane: '高锰合金管', num: '9' },
          { mane: '防弹陶瓷', num: '10' },
          { mane: '薄膜面料', num: '10' }
        ],
        [
          { mane: '涤纶布', num: '10' },
          { mane: '兽筋', num: '13' },
          { mane: '粘性蛛网', num: '5' },
          { mane: '薄膜面料', num: '6' }
        ],
        [
          { mane: '皮革', num: '13' },
          { mane: '缝纫线', num: '10' },
          { mane: '奇异金属', num: '6' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '5' }
        ],
        [
          { mane: '纤维布', num: '10' },
          { mane: '玻璃钢', num: '10' },
          { mane: '休眠虫卵', num: '7' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '锦纶布', num: '10' },
          { mane: '钛合金', num: '11' },
          { mane: '污染羽毛', num: '8' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '混纺材料', num: '10' },
          { mane: '石英砂', num: '17' },
          { mane: '专用零件', num: '8' },
          { mane: '薄膜面料', num: '7' },
          { mane: '防弹陶瓷', num: '7' }
        ],
        [
          { mane: '静电纺丝', num: '6' },
          { mane: '刚性陶瓷', num: '7' },
          { mane: '软质兽皮', num: '8' },
          { mane: '战术护木', num: '7' },
          { mane: '薄膜面料', num: '7' }
        ],
        [
          { mane: '仿生甲片', num: '6' },
          { mane: '钢塑复合管', num: '6' },
          { mane: '剧毒蜂刺', num: '8' },
          { mane: '战术护木', num: '7' },
          { mane: '薄膜面料', num: '7' }
        ],
        [
          { mane: '莱卡纤维', num: '6' },
          { mane: '金属线材', num: '6' },
          { mane: '柔性丝茧', num: '8' },
          { mane: '战术护木', num: '7' },
          { mane: '薄膜面料', num: '7' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '铁铸件', num: '12' },
          { mane: '布', num: '12' },
          { mane: '爪子', num: '24' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '硬铝合金', num: '10' },
          { mane: '塑料', num: '12' },
          { mane: '高分子涂层', num: '4' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '布', num: '12' },
          { mane: '塑料', num: '12' },
          { mane: '麻绳', num: '10' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '布', num: '12' },
          { mane: '兽筋', num: '13' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '布', num: '12' },
          { mane: '麻绳', num: '10' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '涤纶布', num: '10' },
          { mane: '布', num: '12' },
          { mane: '六角钉', num: '12' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '呢绒布', num: '10' },
          { mane: '皮革', num: '13' },
          { mane: '珍珠', num: '18' },
          { mane: '薄膜面料', num: '5' },
          { mane: '防弹陶瓷', num: '5' }
        ],
        [
          { mane: '尼龙布', num: '10' },
          { mane: '铁铸件', num: '12' },
          { mane: '布', num: '12' },
          { mane: '爪子', num: '24' },
          { mane: '薄膜面料', num: '4' }
        ],
        [
          { mane: '玻璃钢', num: '10' },
          { mane: '钛合金', num: '10' },
          { mane: '皮革', num: '14' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '锦纶布', num: '10' },
          { mane: '法兰绒', num: '10' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '高温合金', num: '10' },
          { mane: '汞齐', num: '10' },
          { mane: '薄膜面料', num: '6' },
          { mane: '防弹陶瓷', num: '6' }
        ],
        [
          { mane: '混纺材料', num: '10' },
          { mane: '锦纶布', num: '10' },
          { mane: '专用零件', num: '8' },
          { mane: '薄膜面料', num: '7' },
          { mane: '防弹陶瓷', num: '7' }
        ],
        [
          { mane: '碳素精钢', num: '5' },
          { mane: '平纹布', num: '6' },
          { mane: '软质兽皮', num: '7' },
          { mane: '战术护木', num: '6' },
          { mane: '高分子涂层', num: '6' }
        ],
        [
          { mane: '尼龙布', num: '12' },
          { mane: '铁铸件', num: '15' },
          { mane: '布', num: '15' },
          { mane: '爪子', num: '30' },
          { mane: '薄膜面料', num: '5' }
        ],
        [
          { mane: '耐候钢', num: '5' },
          { mane: '涂层布', num: '5' },
          { mane: '剧毒蜂刺', num: '7' },
          { mane: '战术护木', num: '6' },
          { mane: '高分子涂层', num: '6' }
        ],
        [
          { mane: '球扁钢', num: '5' },
          { mane: '珊瑚绒', num: '5' },
          { mane: '柔性丝茧', num: '7' },
          { mane: '战术护木', num: '6' },
          { mane: '高分子涂层', num: '6' }
        ],
        [
          { mane: '布', num: '12' },
          { mane: '塑料', num: '12' },
          { mane: '麻绳', num: '10' },
          { mane: '兽筋', num: '13' }
        ],
        [
          { mane: '尼龙布', num: '12' },
          { mane: '布', num: '15' },
          { mane: '塑料', num: '15' },
          { mane: '麻绳', num: '12' },
          { mane: '薄膜面料', num: '5' }
        ],
        [
          { mane: '涤纶布', num: '12' },
          { mane: '皮革', num: '12' },
          { mane: '兽毛', num: '16' },
          { mane: '塑料', num: '15' },
          { mane: '薄膜面料', num: '5' }
        ]
      ],
      type: '护甲'
    }
  },
  mounted () {}
}
</script>

<style>
li {
  list-style-type: none;
}
</style>
