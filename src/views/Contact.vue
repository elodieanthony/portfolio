<template>
  <section class="contact-page">
    <div class="content">
      <h2>HELLO.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        facere natus porro illo. Quidem quod harum nisi culpa, expedita
        architecto, nulla quae explicabo aliquam aperiam, quas cupiditate sed
        minus qui!
      </p>
      <div class="email">
        <a href="mailto:hello@elodieanthony.com">
          <span>hello@</span>elodieanthony <span>.com</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style lang="scss" scoped>
.contact-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  font-size: 4rem;
  font-weight: 400;
}
.email {
  margin-top: 2rem;
  word-wrap: break-word;
  text-align: center;

  a {
    font-size: 3.5rem;
    font-weight: 400;
  }
  span {
    display: block;
  }
}
</style>
