<template>
  <div class="addArticle">
    <a-card title="文章标题" :bordered="false">
      <a-input class="head" v-model:value="formState.title" placeholder="" />
    </a-card>
    <a-form layout="horizontal" class="from" :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
      <a-form-item label="类型：">
        <a-select :size="size" v-model:value="formState.type" style="width: 200px">
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
      <v-md-editor v-model="formState.body" height="500px" :disabled-menus="[]"  @upload-image="handleUploadImage"></v-md-editor>
    </a-card>
    <a-button danger type="primary" shape="round" block @click="clickHandle">{{btn}}</a-button>
  </div>
</template>

<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
export default defineComponent({
  name: 'articleBase',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    mode: {
      type: String,
      default: 'add'
    }
  },
  setup(props) {
    const formState = ref({
      title: '',
      body: '',
      type: [],
      tags: []
    })
    // 获取路由对象
    const router = useRouter()
    console.log(router)
    const tags = ref([])
    const types = ref([])
    const btn = ref('')
    // 获取http对象
    const http = inject('$http')
    onBeforeMount(async () => {
      const tagres = await http.tag.getTag({status: true})
      const typeres = await http.type.getType({status: true})
      types.value = typeres.data.data
      tags.value = tagres.data.data
      formState.value = props.data || formState.value
      btn.value = props.mode === 'add' ? '发布':'修改'
    })
    const clickHandle = async () => {
      if (!formState.value.title || !formState.value.body) {
        return
      }
      let res = ''
      const val = formState.value
      if (props.mode === 'edit') {
        res = await http.article.updateArticle(val)
      } else {
        res = await http.article.addArticle(val)
      }
      console.log(res.data)
      message.success('保存成功')
      router.push({ name: 'articleList'})
    }
    const handleUploadImage = async (event, insertImage, files) => {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files)
      const formdata = new FormData()
      formdata.append('img', files[0])
      const res = await http.upload.addImg(formdata)
      insertImage({
        url:
          'http://localhost:3001/images/' + res.data.url,
        // desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
    }
    return {
      formState,
      tags,
      types,
      btn,
      clickHandle,
      handleUploadImage
    }
  },
  components: {
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
