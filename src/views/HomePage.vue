<template>
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
    <section class="home-about home-animate">
      <div class="home-about__txt">
        <div class="part-title">
          <span class="number">(1)</span>
          <h2>MES COMPÉTENCES.</h2>
        </div>
        <div class="content">
          <p>
            Passionnée depuis toujours par les technologies du web, j'ai à coeur
            de mettre mes compétences au service de projets ergonomiques et
            performants. Chaque projet est pour moi une opportunité d'apprendre
            un peu plus et de construire des expériences web uniques.
          </p>
          <div class="home-about__picture picture-container">
            <img src="../assets/about.jpg" alt="about" />
          </div>
          <p>
            Je travail principalement en HTML5, SASS et javascript (ES6). je me
            suis également formée récemment aux frameworks React (redux, react
            router, hooks) et Vuejs.
          </p>
          <p>
            Concernant mes méthodes de travail, je privilégie le mobile first
            pour une approche responsive optimale, ainsi que l'architecture BEM.
            J'utilise également Github pour la gestion de version de mes
            projets, ainsi que Webpack et Gulp pour l'automatisation des tâches.
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
    <section class="home-project home-animate">
      <div class="part-title part-title--right">
        <h2><span class="number">(2)</span>MES PROJETS RÉCENTS .</h2>
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
    <section class="home-contact home-animate">
      <div class="part-title">
        <span class="number">(3)</span>
        <h2>ME CONTACTER .</h2>
      </div>
      <div class="content">
        <p>
          Vous voulez collaborer sur un projet? N'hesitez pas à m'envoyer un
          message à
        </p>
        <div class="email">
          <a
            href="anthonyelodie@gmail.com"
            class="hoverable"
            @mouseenter="updateCursorMessage('Copier')"
            @mouseleave="resetCursorMessage"
            @click="copyLink"
            >anthonyelodie@gmail.com</a
          >
        </div>
      </div>
    </section>
    <Footer />
    <CursorLink
      :cursorMessage="cursorMessage"
      :isCopied="isCopied"
      size="1"
    ></CursorLink>
  </section>
</template>

<script>
import TableProject from '../components/TableProject.vue';
import CursorLink from '@/components/UIElements/cursorLink.vue';
import Footer from '@/components/Footer.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomePage',
  components: {
    TableProject,
    CursorLink,
    Footer,
  },
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
    copyLink(e) {
      e.preventDefault();
      const link = e.currentTarget.getAttribute('href');
      navigator.clipboard
        .writeText(link)
        .then(() => {
          this.isCopied = true;
          setTimeout(() => {
            this.isCopied = false;
          }, 2000);
        })
        .catch(error => {
          console.error('Error copying link to clipboard:', error);
        });
    },
  },
  computed: {
    latestProjects() {
      const projects = [...this.$store.state.projects];
      return projects.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 2);
    },
  },
  mounted() {
    document.body.style.overflow = 'hidden';

    const introAnim = gsap.timeline({
      defaults: { duration: 1.2, ease: 'expo.inOut' },
    });

    introAnim
      .to('.first', { top: '-100%' })
      .to('.second', { top: '-100%' }, 0.4)
      .to('.third', { top: '-100%' }, 0.5)
      .addLabel('introPanels')
      .from(
        '.main-navigation',
        { opacity: 0, y: '20', stagger: 0.08 },
        'introPanels'
      )
      .from('.home-hero__sub', { opacity: 0, y: '20', stagger: 0.1 })
      .from('.home-page__arrow', { opacity: 0, y: '20', stagger: 0.1 })
      .from(
        '.home-hero__title',
        { opacity: 0, yPercent: 115 },
        'introPanels-=0.5'
      )
      .from(
        '.home-hero__job',
        { opacity: 0, yPercent: '150%' },
        'introPanels-=0.8'
      )
      .add(() => {
        document.body.style.overflow = 'auto';
        // document.querySelector('.container').style.overflow = 'auto';
      });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-about',
        start: 'top 80%',
        end: 'bottom 70%',
        // scrub: true,
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-project',
        start: 'bottom 100%',
        end: 'bottom 70%',
        // scrub: true,
      },
    });
    // const t3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.home-contact',
    //     start: 'bottom 70%',
    //     end: 'bottom 40%',
    //     scrub: true,
    //   },
    // });
    // gsap.to(this.$refs.dot, {
    //   opacity: 0,
    //   repeat: -1,
    //   yoyo: true,
    //   duration: .5
    // });
    t1.from('.home-about__picture', { opacity: 0, y: -50, duration: 0.2 });
    t1.from('.home-about .part-title', { opacity: 0, x: -50, duration: 0.2 });
    t1.from('.home-about p', { opacity: 0, y: -50, duration: 0.2 });
    t2.from('.home-project .part-title', { opacity: 0, x: 50, duration: 0.2 });
    t2.from('.home-project .content', { opacity: 0, x: -100, duration: 0.2 });
    // t3.from('.home-contact', { opacity: 0, y: -100, duration: 0.5 });
  },
};
</script>

<style lang="scss" scoped>
section:not(:last-child):not(:first-child) {
  margin-bottom: 6rem;
  max-width: 980px;
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
  // margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: calc(100vh - 10rem);
  height: 100vh;

  &__title {
    @media (min-width: 1024px) {
      // max-width: 50%;
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
      bottom: 1.25rem;
      right: -5px;
      width: 15px;
      height: 15px;
      background: #817f7d;
      animation: pulse 1.75s infinite;
      animation-delay: 0.5s;
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
      position: absolute;
      right: 3rem;
      bottom: 20px;
    }
  }

  // &__intro {
  //   margin-top: 3rem;
  //   font-weight: 300;
  //   @media (min-width: 768px) {
  //     display: flex;
  //     justify-content: center;
  //     margin-top: 5rem;
  //     font-size: 1.25rem;

  //     p {
  //       width: 75%;
  //     }
  //   }
  //   @media (min-width: 1024px) {
  //     justify-content: flex-end;

  //     p {
  //       width: 50%;
  //     }
  //   }
  //   @media (min-width: 1440px) {
  //     font-size: 2rem;
  //   }
  // }
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
