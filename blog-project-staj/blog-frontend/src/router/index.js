import { createRouter, createWebHistory } from 'vue-router';
import BlogPostList from '../components/BlogPostList.vue';
import BlogPostForm from '../components/BlogPostForm.vue';

const routes = [
  { path: '/', component: BlogPostList },
  { path: '/edit/:id', component: BlogPostForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

