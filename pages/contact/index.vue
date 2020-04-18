<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="main main-raised">
        <div class="section profile-content">
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                <h2 class="text-center title" style="color:#3c4858">
                  Contact formulier
                </h2>
                <h4 class="text-center description">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one and contact us about any
                  further collaboration. We will responde get back to you in a
                  couple of hours.
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
import Parallax from '~/components/organisms/parallax'

export default {
  components: {
    contactForm: () => import('~/components/organisms/form'),
    Parallax
  },
  data () {
    return {
      header: '/img/background.jpg',
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
