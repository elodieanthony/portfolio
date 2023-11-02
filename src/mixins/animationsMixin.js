import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animations = {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    const animationCompleted = localStorage.getItem('introAnimationCompleted');

    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('introAnimationCompleted');
    });

    if (!animationCompleted) {
      document.body.style.overflow = 'hidden';
      const introAnim = gsap.timeline({
        defaults: { duration: 1.5, ease: 'expo.inOut' },
      });
      introAnim
        .fromTo('.first', { top: 0 }, { top: '-100%' })
        .fromTo('.second', { top: 0 }, { top: '-100%' }, 0.4)
        .fromTo('.third', { top: 0 }, { top: '-100%' }, 0.5)
        .addLabel('introPanels')
        .from(
          '.main-navigation',
          { opacity: 0, y: '20', stagger: 0.1 },
          'introPanels'
        )
        .from('.home-hero__sub', { opacity: 0, y: '20', stagger: 1 })
        .from('.home-page__arrow', { opacity: 0, y: '20', stagger: 1 })
        .from(
          '.home-hero__name',
          { opacity: 0, yPercent: 20 },
          'introPanels-=0.8'
        )
        .from(
          '.home-hero__job',
          { opacity: 0, yPercent: 20 },
          'introPanels-=0.3'
        )
        .add(() => {
          document.body.style.overflow = 'auto';
          gsap.set(['.first', '.second', '.third'], { className: '+=hidden' });
        });
      localStorage.setItem('introAnimationCompleted', true);
    } else {
      document.querySelectorAll('.first, .second, .third').forEach(element => {
        element.classList.add('hidden');
      });
    }

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-about',
        start: 'top 60%',
        end: 'bottom 80%',
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
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-contact',
        start: 'bottom 70%',
        end: 'bottom 40%',
        // scrub: true,
      },
    });
    t1.from('.home-about__picture', { opacity: 0, y: -50, duration: 0.2 });
    t1.from('.home-about .part-title', { opacity: 0, x: -50, duration: 0.2 });
    t1.from('.home-about p', { opacity: 0, y: -50, duration: 0.2 });
    t2.from('.home-project .part-title', { opacity: 0, x: 50, duration: 0.2 });
    t2.from('.home-project .content', { opacity: 0, x: -100, duration: 0.2 });
    t3.from('.home-contact', { opacity: 0, y: -100, duration: 0.5 });
  },
};
