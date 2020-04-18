<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <div class="copyright">
        &copy; {{ year }}, made with vue-material by
        <a href="https://github.com/RobbieVerdurme" target="_blank">Robbie Verdurme</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    backgroundColor: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style></style>
