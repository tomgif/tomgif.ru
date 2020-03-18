<template>
  <n-link :to="menuItem.path">
    <div
      class="site-menu-item"
      :class="menuItemClassName"
      @mouseover="hover = true"
      @mouseout="hover = false">
      {{menuItem.title}}
    </div>
  </n-link>
</template>

<script>
  export default {
    name: 'SiteMenuItem',

    props: {
      menuItem: Object
    },

    data() {
      return {
        hover: false
      }
    },

    computed: {
      menuItemClassName() {
        return {
          'site-menu-item--hover': this.hover,
          'site-menu-item--active': this.isActive
        }
      },

      isActive() {
        return this.$nuxt.$route.name === this.menuItem.name;
      }
    }
  }
</script>

<style lang="scss">
  .site-menu-item {
    display: block;
    font-size: 30px;
    color: #fff;
    padding-bottom: 5px;
    margin-bottom: 20px;
    position: relative;

    @media only screen and (max-width: 767px) {
      font-size: 25px;
      margin-bottom: 10px;
    }

    @media only screen and (max-width: 479px) {
      font-size: 18px;
      margin-bottom: 5px;
    }

    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 3px;
      left: 0;
      bottom: 0;
      background: #fff;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }

    &--hover {
      color: #fff;

      &:after {
        width: 30px;
      }
    }

    &--active {
      &:after {
        width: 30px;
      }
    }
  }
</style>
