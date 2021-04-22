<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle" />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <h3 class="title">
                  {{ project.name }}
                </h3>
              </div>
            </div>
          </div>

          <!-- Project info -->
          <div class="description text-center">
            <p>{{ project.description }}</p>
          </div>
          <!-- /Project info -->

          <!--TABS-->
          <div class="tabs">
            <tabs
              :tab-name="[$t('projectdetail.info'), $t('projectdetail.photos')]"
              :tab-icon="['info', 'image']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <!--Project detail-->
              <template slot="tab-pane-1">
                <md-table>
                  <md-table-row>
                    <md-table-cell>{{ $t('projectdetail.Creators') }}</md-table-cell>
                    <md-table-cell>{{ project.creators }}</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>{{ $t('projectdetail.Inventors') }}</md-table-cell>
                    <md-table-cell>{{ project.inventors }} </md-table-cell>
                  </md-table-row>
                  <md-table-row v-if="project.githubLink">
                    <md-table-cell>Github Project Link</md-table-cell>
                    <md-table-cell>
                      <ul>
                        <li v-for="gitlink in project.githubLink" :key="gitlink">
                          <a :href="gitlink">{{ gitlink }}</a>
                        </li>
                      </ul>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>{{ $t('projectdetail.programmingLanguage') }}</md-table-cell>
                    <md-table-cell>{{ project.ProgrammingLanguage }}</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>IDE</md-table-cell>
                    <md-table-cell>{{ project.IDE }}</md-table-cell>
                  </md-table-row>
                </md-table>
              </template>
              <!--/Project detail-->

              <!--photo's-->
              <template slot="tab-pane-2">
                <img v-for="img in project.img" :key="img" :src="img" class="project-img" :alt="project.name">
              </template>
              <!--/photo's-->
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
    Parallax: () => import('~/components/molecules/parallax'),
    tabs: () => import('~/components/molecules/tabs')
  },
  data () {
    return {
      name: this.$route.params.name,
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
    },
    /**
     * get project
     */
    project () {
      return this.$t('profile.projects').find(p => p.name === this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  padding: 0;
}

.tabs::v-deep {
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

.project-img {
  max-height: 50vh;
  width: auto;
  padding: 1em;
}

ul {
  margin: 0px;
  padding: 0;
  list-style: none;
  text-align: left !important;
}
</style>
