<template>
  <div class="row">
    <div class="col-xl-4">
      <portfolio-item :content="portfolioItem" v-for="portfolioItem in left" :key="portfolioItem.id"/>
    </div>

    <div class="col-xl-8">
      <div class="row">
        <div class="col-md-6" v-for="portfolioItem in right" :key="portfolioItem.id">
          <portfolio-item :content="portfolioItem"/>
        </div>

        <div class="col-lg-12" v-for="portfolioItem in last" :key="portfolioItem.id">
          <portfolio-item :content="portfolioItem"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PortfolioItem from './PortfolioItem';

  export default {
    name: 'Portfolio',
    components: {PortfolioItem},

    data() {
      return {
        portfolio: [
          {id: 1, image: require('assets/img/portfolio/1.jpg'), title: 'Ice Cold Love', description: 'Nature Photoagraphy'},
          {id: 2, image: require('assets/img/portfolio/2.jpg'), title: 'Ice Cold Love', description: 'Nature Photoagraphy'},
          {id: 3, image: require('assets/img/portfolio/3.jpg'), title: 'Ice Cold Love', description: 'Nature Photoagraphy'},
          {id: 4, image: require('assets/img/portfolio/4.jpg'), title: 'Ice Cold Love', description: 'Nature Photoagraphy'},
          {id: 5, image: require('assets/img/portfolio/5.jpg'), title: 'Ice Cold Love', description: 'Nature Photoagraphy'}
        ]
      }
    },

    computed: {
      left() {
        return this.portfolio.slice(0, 2);
      },

      right() {
        return this.portfolio.slice(2, 4);
      },

      last() {
        return this.portfolio.slice(4, 5);
      }
    }
  }
</script>

