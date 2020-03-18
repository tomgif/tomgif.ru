<template>
  <div class="copyright">
    <p class="copyright__text">
      Copyright &copy;{{year}}
      All rights reserved | This template is made with
      <font-awesome-icon class="copyright__icon" far icon="heart"/>
      by <a class="copyright__link" href="https://colorlib.com" target="_blank">Colorlib</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TheCopyright',
    computed: {
      year() {
        return (new Date).getFullYear();
      }
    }
  }
</script>

<style lang="scss">
  .copyright {
    font-size: 13px;
    color: rgba(130, 130, 130, 0.29);
    position: fixed;
    height: 80px;
    width: 614px;
    left: 0;
    bottom: 0;
    background: #fff;
    padding-left: 145px;
    padding-top: 20px;

    @media only screen and (min-width: 1200px) and (max-width: 1400px) {
      width: 450px;
      padding-left: 30px;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      width: 350px;
      padding-left: 30px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      position: relative;
      left: 0;
      bottom: 0;
      padding: 60px 15px 50px;
      text-align: center;
      width: 100%;
    }

    @media only screen and (max-width: 767px) {
      position: relative;
      left: 0;
      bottom: 0;
      padding: 60px 15px 50px;
      text-align: center;
      width: 100%;
    }

    &__icon {
      color: rgba(204, 17, 17, 0.29);
    }

    &__link {
      color: rgba(130, 130, 130, 0.29);
      text-decoration: underline;
    }
  }
</style>
