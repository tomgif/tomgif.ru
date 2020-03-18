<template>
  <div class="social-icons">
    <a
      :href="social.link"
      class="social-icons__item social-icon"
      :class="themeClassName"
      target="_blank"
      v-for="social in socials"
      :key="social.type">
      <font-awesome-icon :icon="social.icon"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SocialIcons',
    props: {
      socials: {
        type: Array,
        required: true
      },

      theme: {
        type: String,
        default: 'dark',
        validator: value => !!~['dark', 'light'].indexOf(value)
      }
    },

    computed: {
      themeClassName() {
        return {
          ['social-icon--' + this.theme]: true
        }
      }
    }
  }
</script>

<style lang="scss">
  .social-icons {
    &__item {
      margin-right: 30px;
    }
  }

  .social-icon {
    display: inline-block;
    font-size: 18px;
    padding: 5px;

    @media only screen and (max-width: 479px) {
      margin-right: 15px;
    }

    &--light {
      color: #fff;
    }

    &--dark {
      color: #242424;
    }
  }
</style>
