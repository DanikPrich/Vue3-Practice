<template>
  <div>
    <h1>Posts page</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Search"
    >

    </my-input>
    <div class="app__btns">  
      <my-button
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
      >
      </PostForm>
    </my-dialog>

    

    <PostList
      :posts="sortedAndSearchedPosts"
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
import { ref } from 'vue';
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

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
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
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
