<template>
  <div class="addArticle">
    <a-card title="文章标题" :bordered="false">
      <a-input class="head" v-model:value="formState.title" placeholder="" />
    </a-card>
    <a-form layout="horizontal" class="from" :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
      <a-form-item label="类型：">
        <a-select mode="multiple" :size="size" v-model:value="formState.type" style="width: 200px">
          <a-select-option v-for="i in types" :key="i.name">
            {{ i.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="标签：">
        <a-select mode="multiple" :size="size" v-model:value="formState.tags" style="width: 200px">
          <a-select-option v-for="i in tags" :key="i.name">
            {{ i.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <a-card class="content" title="文章内容" :bordered="false">
      <t-editor :init="init" v-model="formState.body" />
    </a-card>
    <a-button danger type="primary" shape="round" block @click="clickHandle">发布</a-button>
  </div>
</template>

<script>
import { defineComponent, reactive, inject, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import Editor from '@tinymce/tinymce-vue'

export default defineComponent({
  setup() {
    const formState = reactive({
      title: '',
      body: '',
      type:[],
      tags: []
    })
    // 获取路由对象
    const router = useRouter()
    const tags = ref([])
    const types = ref([])
    const init = {
      language_url: 'https://lab.uxfeel.com/node_modules/tinymce/langs/zh_CN.js',
      language: 'zh_CN',
      height: '40vh',
      plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
      toolbar:
        'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | link unlink image code | removeformat',
      branding: false,
      images_upload_handler: (blobInfo, success) => {
        success('data:image/jpeg;base64,' + blobInfo.base64())
      },
    }
    // 获取http对象
    const http = inject('$http')
    onBeforeMount(async () => {
      const tagres = await http.tag.getTag()
      const typeres = await http.type.getType()
      types.value = typeres.data.data
      tags.value = tagres.data.data
    })
    const clickHandle = async () => {
      if (!formState.title || !formState.body) {
        return
      }
      console.log(formState)
      const res = await http.article.addArticle(formState)
      console.log(res.data)

      router.push({ name: 'articleList'})
    }
    return {
      init,
      formState,
      tags,
      types,
      clickHandle,
    }
  },
  components: {
    't-editor': Editor,
  },
})
</script>

<style lang="scss" scoped>
.addArticle {
  height: 80%;
  .head {
    font-size: 22px;
    font-weight: 400;
  }
  .from {
    width: 50%;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>
