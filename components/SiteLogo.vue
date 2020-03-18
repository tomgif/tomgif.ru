<template>
  <div class="site-logo">
    <h2 class="site-logo__title">{{title}}</h2>
    <p class="site-logo__sub-title" v-if="subTitle">{{subTitle}}</p>
  </div>
</template>

<script>
  export default {
    name: 'SiteLogo',
    props: {
      title: {
        type: String,
        default: 'Title'
      },

      subTitle: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  .site-logo {
    display: block;
    margin-bottom: 80px;

    @media only screen and (max-width: 767px) {
      margin-bottom: 50px;
    }

    @media only screen and (max-width: 479px) {
      margin-bottom: 50px;
    }

    &__title {
      font-size: 100px;
      line-height: 100px;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 18px;

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 70px;
        line-height: 70px;
      }

      @media only screen and (max-width: 767px) {
        font-size: 70px;
        line-height: 70px;
      }

      @media only screen and (max-width: 479px) {
        font-size: 60px;
        line-height: 70px;
      }
    }

    &__sub-title {
      font-size: 12px;
      text-transform: uppercase;
      color: #aaaaaa;
      letter-spacing: 12px;
      padding-left: 10px;
      margin-bottom: 0;

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 10px;
        letter-spacing: 8px;
        padding-left: 9px;
      }

      @media only screen and (max-width: 767px) {
        font-size: 10px;
        letter-spacing: 8px;
        padding-left: 9px;
      }

      @media only screen and (max-width: 479px) {
        font-size: 10px;
        letter-spacing: 7px;
        padding-left: 9px;
      }
    }
  }
</style>
