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
              <br><br>Mijn eerste tot zesde leerjaar basisonderwijs heb ik gevolgt in Sint-lieven Kolegem. Deze school heeft ook veel zorgzame leerkrachten. Zij proberen er alles aan te doen om je er welkom te voelen. Dit was ook voor mij het geval. Toen ik er voor het eerst kwam, was ik nogal onzeker en was alles nog wat nieuw. Maar dankzij de hulp van het lieftallig leerkrachtenkorps voelde ik me bijna direct thuis in de groep.
              <br><br>Voor het middelbare onderwijs heb ik besloten te veranderen van school en heb zes jaar les gevolgd op de Visitatie te Mariakerke. Ondanks het feit dat deze school een redelijk slechte reputatie heeft onder de leerlingen, zijn de leerkrachten nog altijd de sterkte punten van deze school. Hier heb ik een eerste studiekeuze moeten maken. Met de nodige begeleiding heb ik uiteindelijk voor de keuze IT gekozen. Deze richting ligt mij het meest en ik wou hierin ook verder in de hogeschool.
              <br><br>De keuze om verder te studeren was zo goed als onmiddellijk gemaakt. Voor de job die ik later wil uitvoeren (IT-er van een bedrijf) is nu eenmaal een bachelor diploma noodzakelijk. Ook de keuze van hogeschool was al zo goed als gemaakt. De keuze ging tussen Hogent (mijn huidige hogeschool) en Odisee. Mijn voorkeur ging uiteindelijk uit naar Hogent.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from '~/components/organisms/parallax'

export default {
  components: {
    Parallax
  },
  data () {
    return {
      header: '/img/background.jpg',
      img: '/img/faces/ProfilePic.jpg'
    }
  },
  computed: {
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
