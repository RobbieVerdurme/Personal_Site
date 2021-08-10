<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="main main-raised">
        <div class="section profile-content">
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                <h2 class="text-center title" style="color:#3c4858">
                  {{ $t('contact.title') }}
                </h2>
                <h4 class="text-center description">
                  {{ $t('contact.description') }}
                </h4>
                <contactForm />
              </div>
            </div>
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
    contactForm: () => import('~/components/molecules/form'),
    Parallax
  },
  data () {
    return {
      header: process.env.imgPrefix + 'img/background.jpg',
      name: null,
      email: null,
      message: null
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
<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>
