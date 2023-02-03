<template>
  <div>

    <h1 style="margin-top: 15px">Posts page</h1>
    <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Search">

    </my-input>
    <div class="app__btns">
      <my-button @click="showDialog">
        Create post
      </my-button>

      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost">
      </PostForm>
    </my-dialog>



    <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading">
    </PostList>

    <div v-else>
      <strong> Loading...</strong>
    </div>

    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->

  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios'

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),

    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

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



    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   this.fetchPosts();
    // }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },

  mounted() {
    this.fetchPosts();
  },
}
</script>

<style>
.app__btns {
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

.page {
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
