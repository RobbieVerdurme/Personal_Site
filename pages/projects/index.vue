<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle" />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="name">
                  <h3 class="title">
                    {{ $t('profile.projectsTab') }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <projects :items="filterdItems" />
            <pagination :items="projects" :current-page="currentPage" @updateFilterdItems="updateFilterdItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Parallax: () => import('~/components/molecules/parallax'),
    pagination: () => import('~/components/molecules/pagination'),
    projects: () => import('~/components/organisms/projects')
  },
  data () {
    return {
      currentPage: null,
      projects: this.$t('profile.projects'),
      filterdItems: [],
      header: 'img/background.jpg'
    }
  },
  computed: {
    /**
     * paralax image
     */
    headerStyle () {
      return {
        backgroundImage: `url(${this.header})`
      }
    }
  },
  watch: {
    $route () {
      this.currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1
    }
  },
  created () {
    this.currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1
  },
  methods: {
    updateFilterdItems (value) {
      this.filterdItems = value
    }
  }
}
</script>
