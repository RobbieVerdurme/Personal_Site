<template>
  <md-card>
    <md-card-content class="md-layout">
      <div :class="project.img ? 'md-layout-item md-size-60 ml-auto' : 'md-layout-item'">
        <!-- project info -->
        <h4 class="card-title">
          {{ project.name }}
        </h4>
        <p>{{ project.description }}</p>
        <!-- /project info -->

        <!-- read more -->
        <md-button :to="{name: 'projects-name', params: {name: project.name}}" class="md-success">
          {{ $t('projectdetail.readmore') }}
        </md-button>
        <!-- /read more -->
      </div>

      <!--Images-->
      <div :class="project.img? 'md-layout-item md-size-40 ml-auto' : ''">
        <img v-for="img in project.img" :key="img" :src="img" class="project-img" :alt="project.name">
      </div>
      <!--/Images-->
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
  margin-left: 1em;
  margin-right: 1em;
}
</style>
