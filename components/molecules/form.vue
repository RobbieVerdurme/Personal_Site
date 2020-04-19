<template>
  <form class="contact-form" action="https://formspree.io/xoqnokzd" method="POST">
    <div class="md-layout">
      <div class="md-layout-item md-size-50">
        <md-field>
          <label>{{ $t('contact.nameForm') }}</label>
          <md-input v-model="name" type="text" name="name" />
        </md-field>
      </div>
      <div class="md-layout-item md-size-50">
        <md-field>
          <label>{{ $t('contact.emailForm') }}</label>
          <md-input v-model="email" type="email" name="email" />
        </md-field>
      </div>
    </div>
    <md-field maxlength="5">
      <label>{{ $t('contact.messageForm') }}</label>
      <md-textarea v-model="message" name="message" />
    </md-field>
    <br>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 mx-auto text-center">
        <md-button class="md-success" type="submit">
          {{ $t('contact.sendFrom') }}
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
