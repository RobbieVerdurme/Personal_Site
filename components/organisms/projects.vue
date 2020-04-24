<template>
  <div>
    <projectInfo v-for="project in items" :key="project.name" :project="project" />
  </div>
</template>

<script>
export default {
  components: {
    projectInfo: () => import('~/components/molecules/projectinfo')
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
