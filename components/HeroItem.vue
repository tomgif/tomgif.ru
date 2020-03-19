<template>
  <div class="hero-item" :style="{'background-image': 'url(' + content.image + ')'}">
    <div class="hero-item__info">
      <h5>{{content.title}}</h5>
      <p class="hero-item__description">{{content.description}}</p>
      <a href="#">
        <img class="hero-item__image" src="../assets/img/arrow-right.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroItem',
    props: {
      content: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
  .hero-item {
    height: 100%;
    width: 50%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: inline-block;

    @media only screen and (max-width: 767px) {
      width: 100%;
      height: 600px;
    }

    &:last-child {
      margin-right: 0;
    }

    & + & {
      margin-left: 50px;
    }

    &__info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 221px;
      padding: 44px 0 10px 0;
      background: #fff;
      z-index: 1;

      @media only screen and (max-width: 767px) {
        padding-left: 15px;
      }
    }

    &__description {
      margin-bottom: 5px;
    }

    &__image {
      @media only screen and (max-width: 767px) {
        width: auto;
      }
    }
  }
</style>
