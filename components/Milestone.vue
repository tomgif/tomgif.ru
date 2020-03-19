<template>
  <div class="milestone">
    <div class="milestone__head">{{content.head}}</div>
    <div class="milestone__info">
      <div class="milestone__title">{{content.title}}</div>
      <p class="milestone__description">{{content.description}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Milestone',
    props: {
      content: Object
    }
  }
</script>

<style lang="scss">
  .milestone {
    margin-bottom: 30px;

    &__head {
      font-family: "Playfair Display", serif;
      font-weight: 900;
      font-size: 72px;
      float: left;
      color: #242424;
      margin: 0 15px 0 0;
      line-height: 1;

      @media only screen and (min-width: 1200px) and (max-width: 1400px) {
        float: none;
      }

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        float: none;
      }
    }

    &__info {
      overflow: hidden;
      padding-top: 23px;
    }

    &__title {
      font-weight: 700;
      font-size: 18px;
      margin: 0;
      color: #242424;
      line-height: 1.2;
    }

    &__description {
      margin-bottom: 0;
    }
  }
</style>
