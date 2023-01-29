<template>
  <div>
    <h3>List of users</h3>
    <PostItem 
      v-for="post in posts"
      :post="post"
    />
  </div>
</template>

<script>
import PostItem from './PostItem.vue';

  export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid rgb(236, 122, 60);
  margin-top: 15px;
}
</style>