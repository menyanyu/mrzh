<template>
  <div class="content">
    <div>
      <h3>近战</h3>
      <ul>
        <li  @click="dianji($event)" v-for="item in jz" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>弓箭</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in gj" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>散弹枪</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in sdq" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>冲锋枪</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in cfq" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>突击步枪</h3>
      <ul>
        <li
          class="arr"
          @click="dianji($event)"
          v-for="item in tjbq"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>狙击枪</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in jjq" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>榴弹炮</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in ldp" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>喷火枪</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in phq" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>手枪</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in sq" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>盾牌</h3>
      <ul>
        <li class="arr" @click="dianji($event)" v-for="item in dp" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h3>电磁机枪</h3>
      <ul>
        <li
          class="arr"
          @click="dianji($event)"
          v-for="item in dcjq"
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
      jz: [
        '拳刺',
        '铁丝球棍',
        '反曲刀',
        '长刀',
        '电击棍',
        '锯齿刀',
        '斩马刀',
        '切割之刃',
        '双刃战斧',
        '奇袭之刃',
        '合金锯刃'
      ],

      gj: ['专家型复合弓', '竞技用反曲弓', '碳素蜘蛛弓'],

      sdq: [
        '雷托散弹枪',
        '590M散弹枪',
        'KSG散弹枪',
        '红点散弹枪',
        '转轮散弹枪'
      ],
      cfq: [
        'UZI冲锋枪',
        'MUP9冲锋枪',
        '汤姆逊冲锋枪',
        'MP5冲锋枪',
        '短管榴弹冲锋枪'
      ],

      tjbq: [
        'AK47突击步枪',
        '塔沃尔突击步枪',
        'M416突击步枪',
        '95式突击步枪',
        'A2榴弹突击枪',
        'G36C突击步枪',
        'AN94突击步枪',
        '电弧突击步枪',
        'FAMAS突击步枪',
        '仿生蛛酶步枪',
        'AUG突击步枪'
      ],

      jjq: [
        '莫辛纳甘狙击枪',
        'M24狙击步枪',
        'AS50狙击步枪',
        'DSR狙击枪',
        'AWM狙击步枪',
        'SVD狙击枪',
        'R93狙击步枪',
        '巴雷特狙击枪',
        'TAC-50狙击枪'
      ],

      ldp: [
        '土制火炮',
        '赤狐榴弹炮',
        '强袭榴弹炮',
        '制导式火箭筒',
        'QLB06榴弹炮',
        'XM25榴弹炮',
        '仿生深潜重炮'
      ],
      phq: ['火焰喷射器'],
      sq: ['左轮手枪', 'Z5左轮手枪'],
      dp: ['全刚盾牌', '合金盾牌'],
      dcjq: ['EM-1电磁机枪', 'EM-2电磁机枪', 'EM-3电磁机枪', 'EM-4电磁机枪']
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
.content{

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
}

</style>
