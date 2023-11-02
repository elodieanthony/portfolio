<template>
  <div class="container">
    <section class="home-page">
      <section class="home-hero">
        <div class="overlay first"></div>
        <div class="overlay second"></div>
        <div class="overlay third"></div>
        <div class="home-hero__title">
          <h1 class="home-hero__name">ELODIE ANTHONY</h1>
          <h1 class="home-hero__job">FRONTEND <span>DEV</span></h1>
        </div>
        <div class="home-hero__sub">
          <p>Developpeuse depuis 2016.</p>
          <p>Basée à Montpellier.</p>
        </div>
        <div class="home-page__arrow">
          <span>&darr;</span>
        </div>
      </section>
      <section class="home-about">
        <div class="home-about__txt">
          <div class="part-title">
            <span class="number">(1)</span>
            <h2>MES COMPÉTENCES.</h2>
          </div>
          <div class="content">
            <p>
              Passionnée par les technologies du web depuis toujours, j'ai à
              cœur de mettre en avant mes compétences au service de projets à la
              fois ergonomiques et performants. Chaque projet représente pour
              moi une occasion d'apprendre davantage et de créer des expériences
              web uniques.
            </p>
            <div class="home-about__picture picture-container">
              <img src="../assets/about.jpg" alt="about" />
            </div>
            <p>
              Je travaille principalement avec HTML5, SASS et JavaScript (ES6).
              Récemment, je me suis également formée aux frameworks tels que
              React (Redux, React Router, Hooks) et Vue.js.
            </p>
            <p>
              En ce qui concerne mes méthodes de travail, je privilégie
              l'approche "mobile-first" pour garantir une expérience responsive
              optimale. J'applique également l'architecture BEM. Pour la gestion
              de version de mes projets, j'utilise GitHub, en plus d'automatiser
              certaines tâches grâce à Webpack et Gulp.
            </p>
            <div class="home-page__more">
              <router-link to="/about" class="hoverable"
                >EN SAVOIR PLUS
                <span></span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="home-project">
        <div class="part-title part-title--right">
          <h2><span class="number">(2)</span>MES PROJETS RÉCENTS.</h2>
        </div>
        <div class="content">
          <p>Un aperçu de mes projets les plus récents.</p>
          <TableProject :tableItems="latestProjects"></TableProject>
          <div class="home-page__more">
            <router-link to="/projets" class="hoverable"
              >En SAVOIR PLUS
              <span></span>
            </router-link>
          </div>
        </div>
      </section>
      <section class="home-contact">
        <div class="part-title">
          <span class="number">(3)</span>
          <h2>ME CONTACTER.</h2>
        </div>
        <div class="content">
          <p>
            Vous voulez collaborer sur un projet? N'hesitez pas à m'envoyer un
            message : 
          </p>
          <div class="email">
            <a
              href="anthonyelodie@gmail.com"
              class="hoverable"
              @mouseenter="updateCursorMessage('Copier')"
              @mouseleave="resetCursorMessage"
              @click="handleClick"
              ref="email"
              >anthonyelodie@gmail.com</a
            >
          </div>
        </div>
      </section>
      <CursorLink
        :cursorMessage="cursorMessage"
        :isCopied="isCopied"
        size="1"
      ></CursorLink>
    </section>
    <Footer />
  </div>
</template>

<script>
import TableProject from '../components/TableProject.vue';
import CursorLink from '@/components/UIElements/cursorLink.vue';
import Footer from '@/components/Footer.vue';

import clipboardMixin from '@/mixins/clipboardMixin';
import { animations } from '@/mixins/animationsMixin';

export default {
  name: 'HomePage',
  components: {
    TableProject,
    CursorLink,
    Footer,
  },
  mixins: [clipboardMixin, animations],
  data() {
    return {
      cursorMessage: 'Click',
      isCopied: false,
    };
  },
  props: {
    isMobile: {
      type: Boolean,
    },
  },
  methods: {
    updateCursorMessage(message) {
      this.cursorMessage = message;
    },
    resetCursorMessage() {
      this.cursorMessage = 'Click';
    },
  },
  computed: {
    latestProjects() {
      const projects = [...this.$store.state.projects];
      return projects.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 2);
    },
  },
  created() {
    window.scrollTo(0, 0);
    // this.animations;
  },
};
</script>

<style lang="scss" scoped>
section:not(:last-child):not(:first-child) {
  margin-bottom: 6rem;
  max-width: 1200px;
  @media (min-width: 1024px) {
    margin-bottom: 10rem;
  }

  @media (min-width: 1440px) {
    margin-bottom: 25%;
  }
}
.home-name {
  display: none;
  margin: 0;
  @media (min-width: 1024px) {
    display: block;
  }
}
.part-title {
  display: flex;
  align-items: center;

  .number {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  h2 {
    position: relative;
    padding-right: 1rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    // width: 70%;
    margin-right: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    // justify-content: center;
  }
  &--left {
    @media (min-width: 1024px) {
      justify-content: flex-end;
    }
  }
  &--right {
    @media (min-width: 1024px) {
      margin-left: 2rem;
      margin-right: 0;
      text-align: right;
    }
  }
}

.content {
  @media (min-width: 1024px) {
    margin: 0;
    width: 100%;
  }
}
.home-page {
  h1 {
    // margin-bottom: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16vw;
    line-height: 1;

    @media (min-width: 768px) {
      // width: 50%;
      font-size: 13vw;
    }
    @media (min-width: 1024px) {
      // width: 100%;
    }
  }
  a {
    cursor: none;
  }
  &__arrow {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    @media (min-width: 768px) {
      left: inherit;
      right: 2rem;
    }
    @media (min-width: 1024px) {
      right: inherit;
      left: 2rem;
    }

    span {
      font-size: 3rem;
      font-weight: 400;
      @media (min-width: 1024px) {
        font-size: 5rem;
      }
    }
  }
  &__more {
    text-align: center;
    margin: 2rem 0;
    a {
      position: relative;
    }
    a span {
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background: #000;
    }
  }
}

.home-hero {
  height: 100vh;

  &__title {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    @media (min-width: 1024px) {
      position: inherit;
      align-self: center;

      h1 {
        // width: 50%;
        font-size: 7vw;
      }
    }
    @media (min-width: 1440px) {
      // max-width: 46%;
      h1 {
        // font-size: 4rem;
      }
    }
    @media (min-width: '2560px') {
      // margin-top: 20rem;
    }
  }
  &__job {
    span {
      position: relative;
    }
    span::after {
      content: '';
      position: absolute;
      bottom: 0.8rem;
      right: -18px;
      width: 15px;
      height: 15px;
      background: #817f7d;
      animation: pulse 1.75s infinite;
      animation-delay: 0.5s;

      @media (min-width: 1024px) {
        bottom: 1.25rem;
        right: -5px;
      }
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;
    }
  }

  &__sub {
    position: absolute;
    top: 75%;
    right: 1rem;
    transform: translate(0, -50%);
    // font-size: 0.8rem;
    // margin-top: 2rem;
    text-align: right;
    p {
      margin: 0;
    }
    // @media (min-width: 768px) {
    //   width: 50%;
    // }
    // @media (min-width: 1024px) {
    //   width: 100%;
    //   font-size: 1rem;
    // }
    // @media (min-width: 1440px) {
    //   font-size: 1.25rem;
    // }

    @media (min-width: 1024px) {
      top: inherit;
      right: 3rem;
      bottom: 20px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.home-about {
  &__txt {
    padding-top: 5rem;
    @media (min-width: 1024px) {
      display: flex;
    }
  }
}
.home-project {
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
  }
}
.home-contact {
  .email {
    margin: 2rem 0;
    font-size: 13vw;
    text-align: center;
  }

  @media (min-width: 768px) {
    .email {
      font-size: 10vw;
    }
  }

  @media (min-width: 1024px) {
    text-align: center;
    .part-title {
      justify-content: center;
    }
    .email {
      font-size: 3rem;
      font-weight: 500;
    }
  }
}

.overlay {
  position: absolute;
  width: 33.3%;
  height: 100%;
  top: 0;
  z-index: -1;
  background: white;
}

.first {
  // background: var(--color-bg);
  left: 0;
}
.second {
  // background: var(--color-bg);
  left: 33.3%;
}
.third {
  // background: var(--color-bg);
  left: 66.6%;
}
</style>
