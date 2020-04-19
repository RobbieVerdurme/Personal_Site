<template>
  <div>
    <projectInfo v-for="project in projects" :key="project.name" :project="project" />
  </div>
</template>

<script>
export default {
  components: {
    projectInfo: () => import('~/components/molecules/projectinfo')
  },
  data () {
    return {
      projects: this.$store.getters.getProjects
    }
  }
}
</script>
