<template>
  <md-list
    v-if="selectionStart"
    class="nav-mobile-menu nav-mobile-section-start"
  >
    <slot />
  </md-list>
</template>

<script>
export default {
  props: {
    selectionStart: {
      type: Boolean,
      default: false
    }
  }
}
</script>
