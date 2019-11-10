<template>
  <div class="publication-view mt-10 ml-5">
    <h3>Nuestras publicaciones</h3>
    <PostCard v-for="post in posts" v-bind:key="post.id"
      :id="post.id"
      :title="post.titulo"
      :description="post.descripcion"
      :author="post.autor"
      :date="post.created_at"
    >
    </PostCard>
  </div>
</template>

<script>
import PostCard from '../components/Publication/PostCard'
import axios from 'axios'

import { backendURL } from '@/data.js'

export default {
  components: {
    PostCard
  },
  data: function () {
    return {
      posts: []
    }
  },
  mounted: function () {
    axios
      .get(backendURL + '/publicaciones')
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>

<style scoped>
</style>
