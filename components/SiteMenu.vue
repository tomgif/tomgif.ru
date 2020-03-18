<template>
  <ul class="site-menu">
    <li class="site-menu__item" v-for="menuItem in menuItems" :key="menuItem.name">
      <site-menu-item :menu-item="menuItem"/>
    </li>
  </ul>
</template>

<script>
  import SiteMenuItem from './SiteMenuItem';

  export default {
    name: 'SiteMenu',

    components: {
      SiteMenuItem
    },

    data() {
      return {
        menuItems: [
          {path: '/', title: 'Главная', name: 'index'},
          {path: '/about', title: 'Обо мне', name: 'about'},
          {path: '/blog', title: 'Блог', name: 'blog'},
          {path: '/portfolio', title: 'Портфолио', name: 'portfolio'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .site-menu {
    list-style: none;
    padding-left: 185px;
    padding-top: 160px;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding-top: 80px;
    }

    @media only screen and (max-width: 767px) {
      padding: 40px 15px;
      max-width: 400px;
      margin: 0 auto;
    }

    &__item {
      display: block;
    }
  }
</style>
