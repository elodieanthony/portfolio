<template>
  <div class="cursor">
    <svg class="cursor__ball" height="120" width="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="60" stroke-width="0"></circle>
      <text v-if="!isCopied" x="60" y="65" text-anchor="middle" font-size="12">
        {{ cursorMessage }}
      </text>
      <text v-if="isCopied" x="60" y="65" text-anchor="middle" font-size="12">
        Copié!
      </text>
    </svg>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'CursorLink',
  props: {
    cursorMessage: String,
    size: String,
    isCopied: Boolean,
  },
  setup(props) {
    const ballEl = ref(null);
    const hoverables = ref([]);
    const ballSize = ref(Number(props.size));

    const onMouseMove = e => {
      gsap.to(ballEl.value, {
        x: e.clientX - 50 + 'px',
        y: e.clientY - 50 + 'px',
        duration: 0,
      });
    };

    const onMouseHover = () => {
      gsap.to(ballEl.value, {
        scale: ballSize.value,
        duration: 0.3,
        ease: 'expoScale(0.5, 1)',
      });
    };

    const onMouseHoverOut = () => {
      gsap.to(ballEl.value, {
        scale: 0,
        duration: 0.3,
        ease: 'expoScale(0.5, 1)',
      });
    };

    onMounted(() => {
      ballEl.value = document.querySelector('.cursor');
      hoverables.value = document.querySelectorAll('.hoverable');
      document.addEventListener('mousemove', onMouseMove);

      hoverables.value.forEach(hoverable => {
        hoverable.addEventListener('mouseenter', onMouseHover);
        hoverable.addEventListener('mouseleave', onMouseHoverOut);
      });
    });

    return {
      ballEl,
      hoverables,
    };
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  pointer-events: none;
  // border: 1px solid red;
  position: fixed;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 10000;

  &__ball {
    // border: 1px solid blue;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    circle {
      fill: rgba(247, 248, 250, 0.9);
    }

    text {
      font-weight: 700;
      font-size: 1.15rem;
    }
  }
}
</style>
