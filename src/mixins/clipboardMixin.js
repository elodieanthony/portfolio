export default {
  data() {
    return {
      cursorMessage: 'Copier',
      isCopied: false,
      isTouchDevice: 'ontouchstart' in window,
    };
  },
  methods: {
    handleClick(e) {
      if (!this.isTouchDevice) {
        e.preventDefault();
        const link = e.currentTarget.getAttribute('href');
        if (navigator.clipboard && window.isSecureContext) {
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
        } else {
          e.currentTarget.setAttribute('mailto', link);
        }
      }
    },
  },
  mounted() {
    let link = this.$refs.email.getAttribute('href');
    if (this.isTouchDevice) {
      this.$refs.email.setAttribute('href', `mailto:${link}`);
    }
  },
};
