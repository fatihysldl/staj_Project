<template>
  <div>
    <h1>Blog Postları</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="deletePost(post.id)">Sil</button>
        <button @click="editPost(post.id)">Düzenle</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const response = await axios.get('http://localhost:8000/api/posts');
      this.posts = response.data;
    },
    async deletePost(id) {
      await axios.delete(`http://localhost:8000/api/posts/${id}`);
      this.fetchPosts();
    },
    editPost(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
};
</script>
