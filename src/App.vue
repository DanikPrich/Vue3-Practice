<template>
  <div class="app">
    <h1>Posts page</h1>
    <my-input
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

    <div ref="observer" class="observer"></div>

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
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'By names'},
        {value: 'body', name: 'By description'},
        {value: 'id', name: 'By id'},
      ],
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;

      } catch (e) {
        alert("Error")
      } finally {
          this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];

      } catch (e) {
        alert("Error")
      } 
    },

    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   this.fetchPosts();
    // }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return this.selectedSort == "id" 
          ? post1[this.selectedSort] - post2[this.selectedSort] 
          : post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    /* selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return newValue == "id" 
          ? post1[newValue] - post2[newValue] 
          : post1[newValue]?.localeCompare(post2[newValue]);
      })
    } */ 
  },
 
  mounted() {
    this.fetchPosts();

    const options = {
      rootMargin: '0px',
      thresold: 1.0
    }

    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
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
