<template>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Descriotion:</strong> {{ post.body }}</div>
    </div>
    <MyButton class="post__btns">
      Delete
    </MyButton>
  </div>
</template>

<script>
  import MyButton from '@/components/UI/MyButton.vue'
  export default {
    components: {
      MyButton
    },
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid rgb(236, 122, 60);
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>