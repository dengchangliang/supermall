<template>
  <div class="editor" >
    <div ref="toolbar" class="toolbar"></div>
    <div ref="editor" class="text"  style=""></div>
  </div>
</template>
<script>
  import E from "wangeditor";
  export default {
    name: "Editor",
    data() {
      return {
        msg: "哈迪斯看到了哈首都航空的",
        editor: null,
        editorContent: ''
      };
    },
    // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
    props: {
      childval: {
        type: String,
        default: ""
      },
    },
    methods: {
      posts() {
        this.$emit("func1", "msg")
      }
    },
    computed:{
      newChild(){
        return this.childval;
      }
    },
    watch:{   //通过监听属性变化，来执行富文本的重新赋值方法
      newChild(newV,oldV){
        console.log(newV);
         this.editor.txt.html(newV)
      }
    },
    mounted() {
      this.createDitor();
      // showdata()
    },
    methods:{
      createDitor(){
        // this.editor = new E(this.$refs.editorElem);
         this.editor = new E(this.$refs.toolbar, this.$refs.editor);
        this.editor.customConfig.uploadImgShowBase64 = true; // base 64 存储图片
        // 编辑器的事件，每次改变会获取其html内容
        this.editor.customConfig.onchange = html => {
          this.editorContent = html;
          // console.log(html)  //这是富文本内容
          // this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
          this.$emit("func1", this.editorContent)
        };
       // 配置菜单
       // this.editor.customConfig.menus = [
       //   "head", // 标题
       //   "bold", // 粗体
       //   "fontSize", // 字号
       //   "fontName", // 字体
       //   "italic", // 斜体
       //   "underline", // 下划线
       //   "strikeThrough", // 删除线
       //   "foreColor", // 文字颜色
       //   "backColor", // 背景颜色
       //   "link", // 插入链接
       //   "list", // 列表
       //   "justify", // 对齐方式
       //   "quote", // 引用
       //   "emoticon", // 表情
       //   "image", // 插入图片
       //   "table", // 表格
       //   "video", // 插入视频
       //   "code", // 插入代码
       //   "undo", // 撤销
       //   "redo", // 重复
       //   "fullscreen" // 全屏
       // ];
        this.editor.create(); // 创建富文本实例
        this.showdata()
      },
      showdata(){
        console.log("渲染富文本")
        console.log(this.childval)
        this.editor.txt.html(this.childval);
      }

    }
  }
</script>
<style scoped>
  .editor {
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 0;
  }

  .toolbar {
    border: 1px solid #ccc;
  }

  .text {
    border: 1px solid #ccc;
    min-height: 500px;
  }
</style>
