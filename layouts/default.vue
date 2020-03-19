<template>
  <div class="main-site-wrap" :class="mainWrapClassName">
    <div class="site-menu-wrap" :class="menuWrapClassName">
      <div class="close-menu" @click="$store.commit('sidebar/hide')">x</div>
      <site-menu/>
      <div class="menu-social">
        <social-icons theme="light" :socials="socials"/>
      </div>
    </div>
    <site-header :socials="socials"/>
    <div class="site-content-wrap" :class="contentWrapClassName">
      <div class="main-sidebar" v-if="isMobile">
        <sidebar/>
      </div>

      <perfect-scrollbar class="main-sidebar" v-else>
        <sidebar/>
      </perfect-scrollbar>

      <div class="page-section" :class="pageClassName">
        <nuxt/>
      </div>
    </div>
    <the-copyright/>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Sidebar from '../components/Sidebar'
  import SiteHeader from '../components/SiteHeader'
  import TheCopyright from '../components/TheCopyright'
  import SocialIcons from '../components/SocialIcons';
  import SiteMenu from '../components/SiteMenu';
  import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
  import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

  export default {
    components: {Sidebar, SiteHeader, TheCopyright, SocialIcons, SiteMenu, PerfectScrollbar},

    data() {
      return {
        socials: [
          {type: 'pinterest', link: '/', icon: ['fab', 'pinterest']},
          {type: 'facebook', link: '/', icon: ['fab', 'facebook']},
          {type: 'twitter', link: '/', icon: ['fab', 'twitter']},
          {type: 'dribbble', link: '/', icon: ['fab', 'dribbble']},
          {type: 'behance', link: '/', icon: ['fab', 'behance']},
        ]
      }
    },

    head() {
      return {
        bodyAttrs: {
          class: ['page', this.isSidebarToggled ? ' page--pushed' : ''].join('')
        }
      }
    },

    created() {
      if (process.browser) {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
      }
    },

    destroyed() {
      if (process.browser) {
        window.removeEventListener('resize', this.handleResize);
      }
    },

    methods: {
      handleResize() {
        this.$store.commit({
          type: 'window/set',
          value: window.innerWidth < 768
        });
      }
    },

    computed: {
      ...mapState({
        isSidebarToggled: state => state.sidebar.isToggled,
        isMobile: state => state.window.isMobile
      }),

      mainWrapClassName() {
        return {
          'main-site-wrap--pushed': this.isSidebarToggled
        }
      },

      contentWrapClassName() {
        return {
          'site-content-wrap--pushed': this.isSidebarToggled
        }
      },

      menuWrapClassName() {
        return {
          'site-menu-wrap--pushed': this.isSidebarToggled
        }
      },

      pageClassName() {
        let {name} = this.$nuxt.$route;
        return {
          [name + '-page']: true
        }
      }
    },

    watch: {
      $route() {
        this.$store.commit('sidebar/hide');
      }
    }
  }
</script>

<style lang="scss">
  .page {
    &--pushed {
      overflow: hidden;
    }
  }

  .close-menu {
    font-size: 30px;
    color: #fff;
    margin-left: 48px;
    padding-top: 32px;
    cursor: pointer;
  }

  .menu-social {
    padding-left: 185px;
    padding-top: 50px;

    @media only screen and (max-width: 767px) {
      padding: 0 15px;
      max-width: 400px;
      margin: 0 auto;
    }
  }

  .main-site-wrap {
    height: 100%;
    width: 100%;
    position: relative;

    &--pushed {
      overflow: hidden;
    }
  }

  .site-content-wrap {
    position: relative;
    height: 100%;
    padding-top: 91px;
    padding-left: 614px;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;

    @media only screen and (min-width: 1200px) and (max-width: 1400px) {
      padding-left: 450px;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      padding-left: 350px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding-left: 0;
      height: auto;
    }

    @media only screen and (max-width: 767px) {
      padding-left: 0;
      height: auto;
    }

    &--pushed {
      -webkit-transform: translateX(614px);
      transform: translateX(614px);
    }
  }

  .site-menu-wrap {
    position: fixed;
    width: 614px;
    height: 100%;
    left: -620px;
    top: 0;
    background: #242424;
    overflow-y: auto;
    z-index: 9999;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;

    @media only screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
      left: -100%;
    }

    &--pushed {
      left: 0;
    }
  }

  .page-section {
    height: 100%;
  }

  .ps {
    height: 100%;
  }

  .main-sidebar {
    position: absolute;
    width: 614px;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;

    @media only screen and (min-width: 1200px) and (max-width: 1400px) {
      width: 450px;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      width: 350px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      position: relative;
      width: 100%;
      height: auto;
    }

    @media only screen and (max-width: 767px) {
      position: relative;
      width: 100%;
      height: auto;
    }
  }
</style>
