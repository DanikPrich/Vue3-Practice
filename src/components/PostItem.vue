<template>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Descriotion:</strong> {{ post.body }}</div>
    </div>
    <my-button 
      @click="$emit('remove', post)"
    >
      Delete
    </my-button>
  </div>
</template>

<script>
  export default {
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