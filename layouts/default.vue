<template>
  <div :class="extraClasses">
    <div :class="{'nav-open': navbar}">
      <vHeader :color-on-scroll="scrollColorNavbar" />
      <div>
        <nuxt />
      </div>
      <vFooter v-if="this.$route.name !== 'index' && this.$route.name !== 'contact'" :background-color="backgroundColorFooter" />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    vHeader: () => import('~/components/organisms/header'),
    vFooter: () => import('~/components/organisms/footer')
  },
  computed: {
    extraClasses () {
      switch (this.$route.name) {
        case 'index':
        case 'contact':
          return 'landing-page'
        case 'profile':
        case 'projects':
          return 'profile-page'
        default:
          return ''
      }
    },
    navbar () {
      return this.$store.getters.getNavbar
    },
    scrollColorNavbar () {
      if (this.$route.name === 'profile') {
        return 200
      }

      return 400
    },
    backgroundColorFooter () {
      return 'black'
    }
  }
}
</script>
