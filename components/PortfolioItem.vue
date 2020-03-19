<template>
  <div class="portfolio-item">
    <img :src="content.image" :alt="content.title">
    <div class="pi-info">
      <h5>{{content.title}}</h5>
      <p>{{content.description}}</p>
      <a href="#"><img src="img/arrow-right.png" alt=""></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioItem',
    props: {
      content: Object
    }
  }
</script>

<style lang="scss">
  .portfolio-item {
    position: relative;
    padding: 0 3px;
    margin-bottom: 41px;

    &__image {
      min-width: 100%;
    }

    .pi-info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 221px;
      padding: 44px 0 10px 0;
      background: #fff;
      z-index: 1;

      @media only screen and (min-width: 1200px) and (max-width: 1400px) {
        padding: 15px 0 10px 0;
      }

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        padding: 15px 0 10px 0;
      }

      @media only screen and (max-width: 479px) {
        width: 170px;
        padding: 15px 0 5px 0;
      }

      p {
        margin-bottom: 5px;
      }

      img {
        min-width: auto;
      }
    }
  }
</style>
