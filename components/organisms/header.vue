<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <!--Left site menu-->
      <div class="md-toolbar-section-start">
        <nuxt-link :to="{name:'index'}">
          <h3 class="md-title">
            Robbie Verdurme
          </h3>
        </nuxt-link>
      </div>
      <!--/Left site menu-->

      <!--Right side menu-->
      <div class="md-toolbar-section-end">
        <!--Button mobile menu-->
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </md-button>
        <!--Button mobile menu-->

        <!--Menu-->
        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu :selection-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <!--Home-->
              <md-list-item :to="{name:'index'}">
                <i class="material-icons">home</i>
                <p>Home</p>
              </md-list-item>
              <!--/Home-->

              <!--Profile-->
              <md-list-item :to="{name:'profile'}">
                <i class="material-icons">account_circle</i>
                <p>Profiel</p>
              </md-list-item>
              <!--/Profile-->

              <!--Contact-->
              <md-list-item :to="{name:'contact'}">
                <i class="material-icons">email</i>
                <p>Contact</p>
              </md-list-item>
              <!--/Contact-->

              <!--Dropdown taal-->
              <li class="md-list-item">
                <div
                  class="item md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <dropdown direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">translate</i>
                        <p>Taal</p>
                      </md-button>
                      <!--List language-->
                      <ul class="dropdown-menu dropdown-with-icons">
                        <!--/Nederlands-->
                        <li>
                          <nuxt-link to="/landing">
                            <p>Nederlands</p>
                          </nuxt-link>
                        </li>
                        <!--/Nederlands-->

                        <!--/Engels-->
                        <li>
                          <nuxt-link to="/login">
                            <p>Engels</p>
                          </nuxt-link>
                        </li>
                        <!--/Engels-->

                        <!--Frans-->
                        <li>
                          <nuxt-link to="/profile">
                            <p>Frans</p>
                          </nuxt-link>
                        </li>
                        <!--/Frans-->
                      </ul>
                      <!--/List language-->
                    </dropdown>
                  </div>
                </div>
              </li>
              <!--/Dropdown taal-->
            </md-list>
          </div>
        </div>
        <!--Menu-->
      </div>
      <!--Right side menu-->
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout
function resizeThrottler (actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()
      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}

export default {
  components: {
    MobileMenu: () => import('~/components/molecules/mobileMenu'),
    Dropdown: () => import('~/components/molecules/dropdown')
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator (value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      extraNavClasses: '',
      toggledClass: false
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    bodyClick () {
      if (process.browser) {
        const bodyClick = document.getElementById('bodyClick')
        if (bodyClick === null) {
          const body = document.querySelector('body')
          const elem = document.createElement('div')
          elem.setAttribute('id', 'bodyClick')
          body.appendChild(elem)

          const bodyClick = document.getElementById('bodyClick')
          bodyClick.addEventListener('click', this.toggleNavbarMobile)
        } else {
          bodyClick.remove()
        }
      }
    },
    toggleNavbarMobile () {
      this.$store.commit('toggleNavbar')
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll () {
      const scrollValue = document.body.scrollTop || document.documentElement.scrollTop
      const navbarColor = document.getElementById('toolbar')
      this.currentScrollValue = scrollValue

      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`
        navbarColor.classList.remove('md-transparent')
      } else if (this.extraNavClasses) {
        this.extraNavClasses = ''
        navbarColor.classList.add('md-transparent')
      }
    },
    scrollListener () {
      resizeThrottler(this.handleScroll)
    }
  }
}
</script>
