<template>
  <div class="about-info">
    <h2 class="about-info__title">{{title}}</h2>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'AboutInfo',
    props: {
      title: {
        type: String,
        default: 'Title'
      }
    }
  }
</script>

<style lang="scss">
  .about-info {
    margin-bottom: 80px;

    &__title {
      font-weight: 900;
      font-size: 48px;
      margin-bottom: 40px;
      line-height: 1.1;
      font-family: "Playfair Display", serif;

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 36px;
      }

      @media only screen and (max-width: 479px) {
        font-size: 34px;
      }
    }
  }
</style>
