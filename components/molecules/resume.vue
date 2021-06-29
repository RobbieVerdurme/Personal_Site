<template>
  <div>
    <div class="center">
      <md-progress-spinner v-if="loading" md-mode="indeterminate" />
    </div>
    <iframe src="https://drive.google.com/file/d/1VMKJFcEmAuy0DrVG4sGrPbeS-cXPtcBz/preview" frameborder="0" :onLoad="loading=false">
      <span>{{ $t('error.errorPreview') }}</span>
    </iframe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true
    }
  }
}
</script>
<style  scoped>
iframe {
  height: 40em !important;
  width: 100%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 5%;
}
</style>
