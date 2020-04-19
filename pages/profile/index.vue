<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle" />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  >
                </div>
                <div class="name">
                  <h3 class="title">
                    Robbie Verdurme
                  </h3>
                  <h6>Developer</h6>
                  <md-button
                    href="https://www.facebook.com/robbie.verdurme"
                    class="md-just-icon md-simple md-facebook"
                  >
                    <i class="fab fa-facebook-square" />
                    <md-tooltip md-direction="bottom">
                      Follow me on Facebook
                    </md-tooltip>
                  </md-button>
                  <md-button
                    href="https://github.com/RobbieVerdurme"
                    class="md-just-icon md-simple md-github"
                  >
                    <i class="fab fa-github" />
                    <md-tooltip md-direction="bottom">
                      Follow me on Github
                    </md-tooltip>
                  </md-button>
                  <md-button
                    href="https://www.linkedin.com/in/robbie-verdurme/"
                    class="md-just-icon md-simple md-linkedin"
                  >
                    <i class="fab fa-linkedin" />
                    <md-tooltip md-direction="bottom">
                      Follow me on Linked-in
                    </md-tooltip>
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Mijn naam is&nbsp;<strong>Robbie Verdurme</strong>. Ik ben geboren op 20 Januari 1998 te Gent. In het dagelijkse leven kunt u me vooral terugvinden op de schoolbanken. Ik studeer Toegepaste Informatica aan de HoGent, zit momenteel in het 3de jaar en heb de richting ‘mobile’ gekozen. Dit had mijn voorkeur omdat dit me meer aanspreekt. Je kan ook meer van jezelf in de code kan leggen.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Mijn leven', 'Projecten']"
              :tab-icon="['face', 'library_books']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <!--Projects-->
              <template slot="tab-pane-1">
                <profileInfo />
              </template>
              <template slot="tab-pane-2">
                <projects />
              </template>
            </tabs>
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
    Tabs: () => import('~/components/molecules/tabs'),
    profileInfo: () => import('~/components/molecules/profileinfo'),
    projects: () => import('~/components/organisms/projects')
  },
  data () {
    return {
      header: '/img/background.jpg',
      img: '/img/faces/ProfilePic.jpg'
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
