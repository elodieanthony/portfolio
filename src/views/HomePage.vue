<template>
  <section class="home-page">
    <section class="home-hero">
      <h1>FRONTEND DEVELOPER.</h1>
      <div class="home-hero__sub">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          laborum ipsam vero minima, aperiam, veniam dignissimos magni error,
          iste excepturi sed maiores!
        </p>
      </div>
      <div class="home-hero__intro">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          nemo delectus, dolorem ipsa eveniet tempore facilis eius sequi eum
          tempora, sapiente dicta sint, illum aliquid vitae vero officia
          perferendis necessitatibus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Enim doloribus alias odit pariatur, et sapiente
          iste, architecto, quae tenetur illum accusamus in magnam totam est
          ipsum dolor itaque quibusdam voluptatem.
        </p>
      </div>
    </section>
    <div class="home-page__arrow">
      <span>&darr;</span>
    </div>
    <section class="home-about">
      <div class="home-about__txt">
        <div class="part-title">
          <span>(1)</span>
          <h2>HOW CAN I HELP</h2>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptate quis sapiente voluptatum praesentium nostrum assumenda
            quas vero in. Hic similique tempore, quaerat quo odio nesciunt
            repudiandae numquam aperiam aspernatur.
          </p>
          <div class="home-about__picture picture-container">
            <img src="../assets/about.jpg" alt="about" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptate quis sapiente voluptatum praesentium nostrum assumenda
            quas vero in. Hic similique tempore, quaerat quo odio nesciunt
            repudiandae numquam aperiam aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptate quis sapiente voluptatum praesentium nostrum assumenda
            quas vero in. Hic similique tempore, quaerat quo odio nesciunt
            repudiandae numquam aperiam aspernatur.
          </p>
          <div class="home-page__more">
            <router-link to="/about"
              >MORE ABOUT ME
              <span></span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="home-project">
      <div>
        <div class="part-title">
          <span>(2)</span>
          <h2>MOST RECENT WORK</h2>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptate quis sapiente voluptatum praesentium nostrum assumenda
            quas vero in. Hic similique tempore, quaerat quo odio nesciunt
            repudiandae numquam aperiam aspernatur.
          </p>
          <TableProject :tableItems="latestProjects"></TableProject>
        </div>

        <div class="home-page__more">
          <router-link to="/projects"
            >MORE ABOUT MY WORK
            <span></span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="home-contact">
      <div class="part-title">
        <span>(3)</span>
        <h2>CONTACT ME</h2>
      </div>
      <div class="content">
        <p>
          Let’s talk about a project, collaboration or an idea you may have.
          Don’t hesitate to send me a message at
        </p>
        <div class="email">
          <a href="mailto:hello@elodieanthony.com">hello@elodieanthony.com</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import TableProject from '../components/TableProject.vue';

export default {
  name: 'HomePage',
  components: {
    TableProject,
  },
  computed: {
    latestProjects() {
      const projects = [...this.$store.state.projects];
      return projects.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
section:not(:last-child) {
  margin-bottom: 6rem;
}
.part-title {
  display: flex;
  align-items: center;
  span {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
  h2 {
    margin: 0;
  }
  @media (min-width: 768px) {
   margin-bottom: 2rem;
  }
}

.home-page {
  display: grid;

  h1 {
    margin-bottom: 1rem;
    font-size: 3.5rem;

    @media (min-width: 768px) {
      width: 50%;
    }
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

    span {
      font-size: 3rem;
      font-weight: 400;
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
  margin-top: 8rem;

  &__sub {
    font-size: 0.8rem;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
  &__intro {
    margin-top: 3rem;
    font-weight: 300;
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      margin-top: 5rem;

      p {
        width: 75%;
      }
    }
  }
}

.home-about {
  &__txt {
    padding-top: 10rem;
  }
}
.home-contact {
  .email {
    margin: 2rem 0;
    font-size: 2rem;
  }
}

</style>
