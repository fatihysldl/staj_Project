<template>
  <div>
    <h1>{{ postId ? 'Post Düzenle' : 'Yeni Post' }}</h1>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="Başlık" />
      <textarea v-model="content" placeholder="İçerik"></textarea>
      <button type="submit">Kaydet</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  data() {
    return {
      postId: null,
      title: '',
      content: '',
    };
  },
  mounted() {
    const route = useRoute();
    if (route.params.id) {
      this.postId = route.params.id;
      this.fetchPost();
    }
  },
  methods: {
    async fetchPost() {
      const response = await axios.get(`http://localhost:8000/api/posts/${this.postId}`);
      this.title = response.data.title;
      this.content = response.data.content;
    },
    async submitPost() {
      if (this.postId) {
        await axios.put(`http://localhost:8000/api/posts/${this.postId}`, {
          title: this.title,
          content: this.content,
        });
      } else {
        await axios.post('http://localhost:8000/api/posts', {
          title: this.title,
          content: this.content,
        });
      }
      this.$router.push('/');
    },
  },
};
</script>
