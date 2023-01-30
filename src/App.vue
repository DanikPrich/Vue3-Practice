<template>
  <div class="app">
    <h1>Posts page</h1>
    <my-button
      @click="showDialog"
      style="margin: 15px 0"
    >
      Create post
    </my-button>

    <my-dialog v-model:show="dialogVisible">
      <PostForm
        @create="createPost"
      >
      </PostForm>
    </my-dialog>

    

    <PostList
      :posts="posts"
      @remove="removePost"
    >
    </PostList>

  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
export default {
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Post desription' },
        { id: 2, title: 'JavaScript', body: 'Post desription' },
        { id: 3, title: 'JavaScript', body: 'Post desription' },
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    removePost(post) {
      /* this.posts = this.posts.filter(p => {
        return p.id !== post.id
      }) */

      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
