<template>

  <div >
    <p>wangeditor编辑器。已完成基本数据绑定</p>
    <p>信息1：{{aaa}}</p>
    <input type="text"  v-model="aaa">
    <p>信息2：{{bbb}}</p>
      <input type="text" v-model="bbb">
      <p>wang编辑器</p>

      <input type="button" value="改变富文本值" @click="chengeEditor">
    <wangeditor   ref="childdiv" @func1="showmsg"  :childval="aaa">
    </wangeditor>

    <wangeditor  ref="childdiv2" @func1="showmsg2"   :childval="bbb">
    </wangeditor>


  </div>
</template>
<script>
  import wangeditor from '@/components/wangeditor.vue'
  export default {
    data() {
      return {
        aaa: 'a',
        bbb: 'b'
      }
    },
    components: {
      wangeditor
    },
    methods: {
      showmsg(msg) {
        console.log(msg);
        this.aaa=msg;
      },
      showmsg2(msg) {
        console.log(msg);
         this.bbb=msg;
      },
      chengeEditor(){
        // this.$refs.childdiv.showdata();   //执行子组件里的富文本赋值方法  （在子组件里用watch方法监听变化）
        //  this.$refs.childdiv2.showdata();
      }
    }
  }
</script>
