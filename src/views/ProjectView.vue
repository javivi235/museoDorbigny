<template>
  <div class="publication-view mt-10 ml-5">
    <ProjectCard class="mb-10" v-for="project in projects" v-bind:key="project.id"
      :id="'project-card-' + project.id"
      :projectID="project.id"
      :title="project.titulo"
      :description="project.descripcion"
      :image="project.portada"
    >
    </ProjectCard>
  </div>
</template>

<script>
import ProjectCard from '../components/Project/ProjectCard'
import axios from 'axios'

import { backendURL } from '@/data.js'

export default {
  components: {
    ProjectCard
  },
  data: function () {
    return {
      projects: []
    }
  },
  mounted: function () {
    axios
      .get(backendURL + '/proyectos')
      .then(response => {
        this.projects = response.data
      })
  }
}
</script>
