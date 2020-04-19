<template>
  <form class="contact-form">
    <div class="md-layout">
      <div class="md-layout-item md-size-50">
        <md-field>
          <label>{{ $t('contact.nameForm') }}</label>
          <md-input v-model="name" type="text" />
        </md-field>
      </div>
      <div class="md-layout-item md-size-50">
        <md-field>
          <label>{{ $t('contact.emailForm') }}</label>
          <md-input v-model="email" type="email" />
        </md-field>
      </div>
    </div>
    <md-field maxlength="5">
      <label>{{ $t('contact.messageForm') }}</label>
      <md-textarea v-model="message" />
    </md-field>
    <br>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 mx-auto text-center">
        <md-button class="md-success">
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
