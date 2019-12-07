<template>
  <div class="punlish-not">
    <quill-editor 
    v-model="content" 
    ref="myQuillEditor" 
    :options="editorOption" 
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
    >
    </quill-editor>
    <div class="note-wrap">
      <div class="note-title">
        <h2>输入标题</h2>
        <van-field v-model="title" placeholder="请输入笔记标题" />
      </div>
      <div class="note-title">
        <h2>上传图片</h2>
        <!-- :after-read 文件读取完后的回调函数 将图片转为base64格式-->
        <van-uploader :after-read="onRead" accept="image/*.*">
          <van-icon name="photograph"></van-icon>
          <span style="font-size:15px;color:red;margin-left:15px;">*图片规格750*150*</span>
        </van-uploader>
        <img :src="preImg" class="preImg" v-if="preImg">
      </div>
      <div class="note-title">
        <h2>请选择分类</h2>
        <span class="note-type" @click="selectType">选择分类&gt;{{selectCon}}</span>
        <van-action-sheet 
        v-model="show" 
        :actions="actions" 
        @select="onSelect" 
        cancel-text="取消"
        @cancel="onCancel"
        />
      </div>
      <div class="publish-btn" @click="publish">发布笔记</div>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "publishNote",
  data() {
    return {
      content: "",
    //   控制富文本编辑器要开启哪些功能
      editorOption: {
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "image",
              "clean",
              { color: [] },
              { background: [] },
              { font: [] },
              { size: ["small", false, "large", "huge"] },
              { header: [1, 2, 3, 4, 5, 6, false] },
              { indent: "-1" },
              { indent: "+1" }
            ], // toggled buttons
            ["blockquote"]
          ]
        }
      },
      title:'',
      preImg:'',
      selectCon:'',
      show:false,
      actions: [
        {
          name: "选项"
        },
        {
          subname: "美食"
        },
        {
          subname: "旅行"
        },
        {
          subname: "汽车"
        },
        {
          subname: "时尚"
        },
        {
          subname: "科技"
        }
      ]
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {},
    onRead(file) {
    //   console.log(file)
    this.preImg = file.content
    },
    onSelect(item){
      console.log(item)
      this.selectCon = item.subname
      this.show = false
    },
    selectType(){
      this.show = true
    },
    onCancel(){
    },
    publish () {
      let note_content = this.note_content
      let head_img = this.preImg
      let note_type = this.selectCon
      let title = this.title
      let useId = JSON.parse(sessionStorage.getItem('userInfo')).id
      let nickname = JSON.parse(sessionStorage.getItem('userInfo')).nickname
      this.$http({
        method:'POST',
        url:'http://localhost:3000/users/insetNote',
        data:{
          note_content: note_content,
          head_img: head_img,
          note_type: note_type,
          title:title,
          useId:useId,
          nickname:nickname
        }
      }).then((res)=>{
          console.log(res)
          if(res.data.code === '200') {
            this.$toast('发布成功')
            var st = setTimeout(() => {
              this.$router.push({path:'/noteClass'}) 
            }, 500)
          }
      })
    }

  },
  computed: {
    fn() {
      console.log(content);
    }
  }
}
</script>

<style lang="less" scoped>
.van-uploader{
  padding:10px 15px;
  display: flex;
  align-items: center;
}
.ql-container {
  height: 6.666667rem;
  overflow-y: scroll;
}
.note-wrap {
  margin-top: 20px;
  h2 {
    font-weight: 400;
    font-size: 0.373333rem;
    color: rgba(69, 90, 100, 0.6);
    padding: 10px;
    background: #f5f5f5;
  }
  .preImg{
    width: 100px;
    height: 100px;
    margin-left: 15px;
  }
  .note-type {
    width: 100%;
    display: inline-block;
    font-size: 0.373333rem;
    color: #333;
    line-height: 24px;
    padding: 10px 15px;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #ccc;
      width: 200%;
      height: 1px;
      transform: scale(0.5);
      transform-origin: left bottom;
    }
  }
  .publish-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 44px;
    margin: 40px auto;
    font-size: 0.453333rem;
    border-radius: 6px;
    background-color: rgba(139, 195, 74, 1);
    color: #fff;
  }
}
</style>
