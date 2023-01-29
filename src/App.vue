<template>
  <div class="app">
    <PostForm
      @create="createPost"
    >
    </PostForm>

    <PostList
      :posts="posts"
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
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
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
