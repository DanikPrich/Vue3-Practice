<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Post creation</h4>
      <input 
        v-bind:value="title" 
        @input="title = $event.target.value"
        class="input" 
        type="text" 
        placeholder="Description"
        >
      <input 
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input" 
        type="text" 
        placeholder="Title"
        >
      <button 
        class="btn" 
        @click="createPost"
      >
        Create
      </button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Descriotion:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Post desription'},
        { id: 2, title: 'JavaScript', body: 'Post desription'},
        { id: 3, title: 'JavaScript', body: 'Post desription'},
      ],
      title : '',
      body: ''
    }
  }, 
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }, 
    inputTitle(event) {
      this.title = event.target.value;
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
  .post {
    padding: 15px;
    border: 2px solid rgb(236, 122, 60);
    margin-top: 15px;
  }
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
  .btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 7px 15px;
    background: none;
    border: 1px solid rgb(236, 122, 60);
    color: rgb(236, 122, 60);
  }
</style>
