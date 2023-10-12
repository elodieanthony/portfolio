<template>
  <section class="contact-page">
    <div class="content">
      <h2>HELLO</h2>
      <p>
        Vous voulez collaborer sur un projet? N'hesitez pas à me contacter afin
        d'en discuter :
      </p>
      <div class="email">
        <a href="anthonyelodie@gmail.com" class="hoverable" @click="copyLink">
          <span>anthonyelodie</span>@gmail <span>.com</span>
        </a>
      </div>
    </div>
    <Footer footerClass="footer--abs" />
    <CursorLink
      :cursorMessage="cursorMessage"
      :isCopied="isCopied"
      size="2"
    ></CursorLink>
  </section>
</template>

<script>
import CursorLink from '@/components/UIElements/cursorLink.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'ContactPage',
  components: {
    CursorLink,
    Footer,
  },
  data() {
    return {
      cursorMessage: 'Copier',
      isCopied: false,
    };
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
.contact-page {
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  position: relative;
  display: inline-block;
  margin-top: 0;
  font-size: 4rem;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    bottom: 19px;
    right: -27px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #817f7d;
    animation: pulse 1.75s infinite;
    animation-delay: 0.5s;

    @media (min-width: 1024px) {
    bottom: 25px;
  }
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
}
.email {
  margin-top: 2rem;
  word-wrap: break-word;
  text-align: center;

  a {
    font-size: 3.5rem;
    font-weight: 400;
    // cursor: none;

    @media (min-width: 768px) {
      font-size: 10vw;
    }
    @media (min-width: 1024px) {
      font-size: 5rem;
    }
  }
  span {
    display: block;
  }
}
</style>
