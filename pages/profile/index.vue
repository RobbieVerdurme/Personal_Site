<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle" />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <!--IMAGE-->
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  >
                </div>
                <!--IMAGE-->
                <!--Profile name + links-->
                <div class="name">
                  <!--Name + job-->
                  <h3 class="title">
                    Robbie Verdurme
                  </h3>
                  <h6>Developer</h6>
                  <!--/Name + job-->

                  <!--Facebook-->
                  <md-button
                    href="https://www.facebook.com/robbie.verdurme"
                    class="md-just-icon md-simple md-facebook"
                  >
                    <i class="fab fa-facebook-square" />
                    <md-tooltip md-direction="bottom">
                      {{ $t('profile.facebook') }}
                    </md-tooltip>
                  </md-button>
                  <!--/Facebook-->

                  <!--Github-->
                  <md-button
                    href="https://github.com/RobbieVerdurme"
                    class="md-just-icon md-simple md-github"
                  >
                    <i class="fab fa-github" />
                    <md-tooltip md-direction="bottom">
                      {{ $t('profile.github') }}
                    </md-tooltip>
                  </md-button>
                  <!--/Github-->

                  <!--Linked in-->
                  <md-button
                    href="https://www.linkedin.com/in/robbie-verdurme/"
                    class="md-just-icon md-simple md-linkedin"
                  >
                    <i class="fab fa-linkedin" />
                    <md-tooltip md-direction="bottom">
                      {{ $t('profile.linkedin') }}
                    </md-tooltip>
                  </md-button>
                  <!--/Linked in-->
                </div>
                <!--/Profile name + links-->
              </div>
            </div>
          </div>
          <!--Profile info-->
          <div class="description text-center">
            <p>
              {{ $t('profile.intro') }}
            </p>
          </div>
          <!--/Profile info-->

          <!--TABS-->
          <div class="profile-tabs">
            <tabs
              :tab-name="[$t('profile.lifeTab'), $t('profile.projectsTab'), $t('profile.resumeTab')]"
              :tab-icon="['face', 'library_books', 'picture_as_pdf']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <!--Life-->
              <template slot="tab-pane-1">
                <profileInfo />
              </template>
              <!--/Life-->

              <!--Projects-->
              <template slot="tab-pane-2">
                <projects :items="projects" />
                <md-button :to="{name:'projects'}" class="md-success">
                  {{ $t('profile.allProjects') }}
                </md-button>
              </template>
              <!--/Projects-->

              <!--Resume-->
              <template slot="tab-pane-3">
                <resume />
              </template>
              <!--/Resume-->
            </tabs>
          </div>
          <!--/TABS-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    parallax: () => import('~/components/molecules/parallax'),
    tabs: () => import('~/components/molecules/tabs'),
    profileInfo: () => import('~/components/molecules/profileinfo'),
    projects: () => import('~/components/organisms/projects'),
    resume: () => import('~/components/molecules/resume.vue')
  },
  data () {
    return {
      // images
      header: process.env.imgPrefix + 'img/background.jpg',
      img: process.env.imgPrefix + 'img/faces/ProfilePic.jpg',

      // project data
      projects: this.$t('profile.projects').slice(0, 2)
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
    /**
     * update projects with correct lang
     */
    '$i18n.locale' () {
      this.projects = this.$t('profile.projects').slice(0, 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*='tab-pane-'] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
