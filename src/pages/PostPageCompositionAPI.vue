<template>
  <div>
    {{ likes }}
    <my-button @click="addLike">+</my-button>
    <h1>Posts page</h1>
    <!-- <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Search"
    >

    </my-input>
    <div class="app__btns">  
      <my-button
        @click="showDialog"
      >
        Create post
      </my-button>

      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm
        @create="createPost"
      >
      </PostForm>
    </my-dialog>

    

    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    >
    </PostList>

    <div v-else>
      <strong> Loading...</strong>
    </div>

    <div v-intersection="loadMorePosts" class="observer"></div> -->


  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios'
import { ref } from 'vue';

export default {
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'By names'},
        {value: 'body', name: 'By description'},
        {value: 'id', name: 'By id'},
      ],
    }
  },

  setup(props) {
    const likes = ref(3)
    console.log(likes)

    const addLike = () => {
      likes.value += 1;
    }

    return {
      likes,
      addLike
    }
  }
 
}
</script>

<style>

.app__btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
  gap: 12px;
}

.page{ 
  border: 1px solid grey;
  padding: 5px 10px;
  cursor: pointer;
}

.current-page {
  border: 2px solid rgb(236, 122, 60);
}

.observer {
  height: 30px;
  background: rgb(236, 122, 60);
}
</style>
