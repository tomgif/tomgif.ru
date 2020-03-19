<template>
  <div class="hero-section">
    <div class="hero-scroll">
      <perfect-scrollbar class="hero-track" :options="{suppressScrollY: true, useBothWheelAxes: true, wheelSpeed: 1}">
        <hero-item :content="slide" v-for="slide in slides" :key="slide.id"/>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
  import HeroItem from './HeroItem';
  import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
  import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
  import {mapState} from 'vuex';

  export default {
    name: 'Hero',

    components: {HeroItem, PerfectScrollbar},

    data() {
      return {
        slides: [
          {id: 1, title: 'Ice Cold Love', description: 'Nature Photoagraphy', image: require('assets/img/hero/1.jpg')},
          {
            id: 2,
            title: 'Bold Architecture',
            description: 'Cityscape Photography',
            image: require('assets/img/hero/2.jpg')
          },
          {id: 3, title: 'Ice Cold Love', description: 'Nature Photoagraphy', image: require('assets/img/hero/1.jpg')},
        ]
      }
    },

    computed: {
      ...mapState({
        isMobile: state => state.window.isMobile
      })
    }
  }
</script>

<style>
  .hero-section, .hero-scroll {
    height: 100%;
  }

  .hero-track {
    padding-bottom: 50px;
    overflow: hidden;
    white-space: nowrap;
    height: 100%;
  }
</style>
