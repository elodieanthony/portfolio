<template>
  <div class="container">
    <section class="contact-page">
      <div class="content">
        <h2>HELLO</h2>
        <p>
          Si vous souhaitez collaborer sur un projet ou simplement discuter,
          n'hésitez pas à me contacter. Je serai ravie d'échanger avec vous.
        </p>
        <p>Vous pouvez m'envoyer un message à l'adresse suivante :</p>
        <div class="email">
          <a
            href="anthonyelodie@gmail.com"
            class="hoverable"
            @click="handleClick"
            ref="email"
          >
            <span>anthonyelodie</span>@gmail <span>.com</span>
          </a>
        </div>
      </div>
      <CursorLink
        :cursorMessage="cursorMessage"
        :isCopied="isCopied"
        size="2"
      ></CursorLink>
    </section>
    <Footer />
  </div>
</template>

<script>
import CursorLink from '@/components/UIElements/cursorLink.vue';
import Footer from '@/components/Footer.vue';
import clipboardMixin from '@/mixins/clipboardMixin';

export default {
  name: 'ContactPage',
  components: {
    CursorLink,
    Footer,
  },
  mixins: [clipboardMixin],
};
</script>

<style lang="scss" scoped>
.contact-page {
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
    // border-radius: 50%;
    background: #817f7d;
    animation: pulse 1.75s infinite;
    animation-delay: 0.5s;

    @media (min-width: 768px) {
      bottom: 23px;
    }
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
p {
  margin: 0;
}
.email {
  margin-top: 2rem;
  word-wrap: break-word;
  text-align: center;

  a {
    display: inline-block;
    // font-size: 3.5rem;
    font-size: 14vw;
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
.content {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  @media (min-width: 1024px) {
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
}
</style>
