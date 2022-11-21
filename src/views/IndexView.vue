<template>
  <div style="color: white">
    {{ posts }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Post, PostsResponse } from '@/types/Post'
import PostApi from '@/api/PostApi'

const posts = ref([] as Post[])

PostApi.getAll()
  .then((response: PostsResponse) => { posts.value = response.data })
  .catch((e: Error) => { console.error(e) })
</script>
