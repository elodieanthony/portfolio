<template>
  <div class="container">
    <section class="about">
      <div class="content">
        <div class="about__intro">
          <div class="about__picture picture-container">
            <img src="../assets/about.jpg" alt="about" />
          </div>
          <div class="about__text">
            <p>
              Passionnée par les technologies du web depuis toujours, j'ai
              décidé de me former au développement web en 2016, après avoir
              acquis de l'expérience dans la recherche utilisateur au sein du
              studio de jeu vidéo Ubisoft Paris. Par la suite, j'ai travaillé
              dans une agence web spécialisée dans la création de bannières
              publicitaires, puis en tant qu'intégratrice freelance sur divers
              projets. Plus récemment, j'ai rejoint l'équipe de l'entreprise
              Selectra en tant que développeuse Frontend, où j'ai contribué
              pendant plusieurs années.
            </p>
          </div>
        </div>
        <div class="about__work">
          <h2>MES COMPÉTENCES</h2>
          <TableElement :tableItems="table_items"></TableElement>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import TableElement from '../components/Table.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AboutPage',
  components: {
    TableElement,
    Footer,
  },
  data() {
    return {
      table_items: [
        {
          title: 'Intégration web',
          text: 'Je réalise principalement des intégrations responsive en HTML/CSS/JS, mais je me suis également récemment formée au frameworks React et Vuejs.',
          skills: [
            'HTML5',
            'SASS',
            'ES6',
            'REACT(redux, react router, hooks)',
            'Vuejs 3',
            'mobile first',
          ],
        },
        {
          title: 'Intéractivité et animations',
          text: "J'ai à coeur de réaliser des sites interactives et dynamique à l'aide de divers outils: ",
          skills: ['GreenSock', 'animation css', 'animations svg'],
        },
        {
          title: 'Environnement de travail',
          text: "Un environnement de travail efficace est l'une des clés pour un projet performant et maintenable. ",
          skills: [
            'Architecture BEM',
            'Git/Github',
            'Automatisation des taches (Gulp/Webpack)',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__intro {
    @media (min-width: '1024px') {
      display: flex;
      align-item: center;
    }
  }
  &__picture {
    @media (min-width: '1024px') {
      flex: 0 0 40%;
      margin: 0;
    }
  }
  &__text {
    @media (min-width: '1024px') {
      align-self: flex-end;
      margin-left: 3rem;
      p {
        margin: 0;
      }
    }
  }

  &__work {
    @media (min-width: '1024px') {
      display: flex;
      align-items: center;
      margin-top: 5rem;
      h2 {
        flex: 0 0 40%;
        margin: 0;
        // text-align: center;
      }
      ul {
        flex: 0 0 55%;
        margin: 0 0 0 3rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  .content {
    margin: 5rem 0 0;
  }
}
.footer {
  margin-top: 3rem;
}
</style>
