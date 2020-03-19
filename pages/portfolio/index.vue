<template>
  <div class="portfolio-section">
    <perfect-scrollbar :options="{suppressScrollX: true, useBothWheelAxes: true, wheelSpeed: 1}">
      <portfolio/>
    </perfect-scrollbar>
  </div>
</template>

<script>
  import Portfolio from '../../components/Portfolio';
  import {PerfectScrollbar} from "vue2-perfect-scrollbar";

  export default {
    components: {Portfolio, PerfectScrollbar}
  }
</script>

<style lang="scss">
  .portfolio-section {
    padding-right: 30px;
    margin-left: -3px;
    height: 100%;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding: 0 15px;
      margin: 0;
    }

    @media only screen and (max-width: 767px) {
      padding: 0 15px;
      margin: 0;
    }
  }
</style>
