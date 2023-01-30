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
      v-if="!isPostsLoading"
    >
    </PostList>

    <div v-else>
      <strong> Loading...</strong>
    </div>

  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios'

export default {
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        /* { id: 1, title: 'JavaScript', body: 'Post desription' },
        { id: 2, title: 'JavaScript', body: 'Post desription' },
        { id: 3, title: 'JavaScript', body: 'Post desription' }, */
      ],
      dialogVisible: false,
      isPostsLoading: false,
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
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;

      } catch (e) {
        alert("Error")
      } finally {
          this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
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
