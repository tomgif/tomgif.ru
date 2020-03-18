<template>
  <header class="header-section" :class="headerClassName">
    <div class="nav-switch" :class="navSwitchClassName" @click="$store.commit('sidebar/show')">
      <font-awesome-icon icon="bars"/>
    </div>
    <div class="header-social">
      <social-icons v-if="socials.length" :socials="socials"/>
    </div>
  </header>
</template>

<script>
  import {mapState} from 'vuex';
  import SocialIcons from './SocialIcons';

  export default {
    name: 'SiteHeader',

    components: {SocialIcons},

    props: {
      socials: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      ...mapState({
        isSidebarToggled: state => state.sidebar.isToggled
      }),

      headerClassName() {
        return {
          'header-section--pushed': this.isSidebarToggled
        }
      },

      navSwitchClassName() {
        return {
          'nav-switch--hidden': this.isSidebarToggled
        }
      }
    }
  }
</script>

<style lang="scss">
  .header-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    padding: 27px 45px;
    z-index: 999;
    background: #fff;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;

    &--pushed {
      -webkit-transform: translateX(614px);
      transform: translateX(614px);
    }
  }

  .nav-switch {
    float: left;
    font-size: 28px;
    color: #4e4e4e;
    line-height: 0;
    cursor: pointer;
    opacity: 1;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;

    &--hidden {
      opacity: 0;
      visibility: hidden;
    }
  }

  .header-social {
    float: right;

    @media only screen and (max-width: 479px) {
      display: none;
    }
  }
</style>
