<template>
  <md-card>
    <md-card-content class="md-layout">
      <div class="md-layout-item md-size-60 ml-auto">
        <h4 class="card-title">
          {{ project.name }}
        </h4>
        <p>{{ project.description }}</p>
      </div>
      <div class="md-layout-item md-size-40 ml-auto">
        <img :src="project.img" class="project-img" :alt="project.name">
        <img v-if="project.img2" :src="project.img2" class="project-img" :alt="project.name">
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-img {
  max-height: 20vh;
  width:auto;
  display: inline-block block;
  margin-left: auto;
  margin-right: auto;
}
</style>
