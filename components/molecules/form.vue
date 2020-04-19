<template>
  <form class="contact-form">
    <div class="md-layout">
      <div class="md-layout-item md-size-50">
        <md-field>
          <label>Your Name</label>
          <md-input v-model="name" type="text" />
        </md-field>
      </div>
      <div class="md-layout-item md-size-50">
        <md-field>
          <label>Your Email</label>
          <md-input v-model="email" type="email" />
        </md-field>
      </div>
    </div>
    <md-field maxlength="5">
      <label>Your Message</label>
      <md-textarea v-model="message" />
    </md-field>
    <br>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 mx-auto text-center">
        <md-button class="md-success">
          Send Message
        </md-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      message: null
    }
  }
}
</script>
