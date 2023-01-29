<template>
  <form @submit.prevent>
    <h4>Post creation</h4>
    <input 
      v-model="post.title"
      class="input" 
      type="text" 
      placeholder="Title"
      >
    <input 
      v-model="post.body"
      class="input" 
      type="text" 
      placeholder="Description"
      >
    <MyButton
      style="align-self: flex-end"
      @click="createPost"
    > 
      Create
    </MyButton>
  </form>
</template>

<script>
  import MyButton from '@/components/UI/MyButton.vue';
  export default {
    components: {
      MyButton
    }, 
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
      },
    },
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .input{
    width: 100%;
    border: 1px solid rgb(236, 122, 60);
    padding: 10px 15px;
    margin-top: 15px;
  }
</style>