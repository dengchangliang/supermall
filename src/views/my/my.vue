<template>
  <div>
    <p> vue-quill-editor编辑器{{msg1}} </p>
    <p>{{msg2}}</p>
    <quillEditor  v-model="msg1" ></quillEditor>
    <!-- <quillEditor v-model="msg2" :options="editorOption"></quillEditor> -->


  </div>

</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  // import 'assets/image-paste.min.js'
  import {
    quillEditor
  } from 'vue-quill-editor'

  // import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    components: {
      // VueUeditorWrap,
      quillEditor
      // Upload
    },
    data() {
      return {
        msg1: "哈哈哈哈啊我是编辑器",
        msg2: "哈dsadasdasdas",
        // editorOption: {
        //   modules: {
        //     imagePaste: {}
        //   }
        // }
      }
    },
    computed: {
      // editor() {
      //   return this.$refs.myQuillEditor.quill
      // }
    },
    created() {

    }



  }
</script>

<style scoped>
  .ql-edito {
    height: 400px !important;
  }
</style>
