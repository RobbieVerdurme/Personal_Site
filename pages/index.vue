<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">
              {{ $t('home.title') }}
            </h1>
            <h4>
              {{ $t('home.introduction') }}
            </h4>
            <br>
            <md-button :to="{name:'profile'}" class="md-success md-lg">
              {{ $t('links.profile') }} <i class="material-icons">arrow_forward</i>
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Parallax from '~/components/molecules/parallax'

export default {
  components: {
    Parallax
  },
  data () {
    return {
      header: process.env.imgPrefix + 'img/background.jpg'
    }
  },
  computed: {
    headerStyle () {
      return {
        backgroundImage: `url(${this.header})`
      }
    }
  }
}
</script>
