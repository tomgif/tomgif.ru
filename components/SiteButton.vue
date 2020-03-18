<template>
  <div class="site-button">
    {{text}} <font-awesome-icon class="site-button__icon" v-if="icon.length" :icon="icon"/>
  </div>
</template>

<script>
  export default {
    name: 'TheButton',

    props: {
      text: {
        type: String,
        default: null
      },

      icon: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
  .site-button {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    min-width: 167px;
    padding: 19px 35px;
    text-transform: uppercase;
    color: #242424;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    border: 2px solid #e1e1e1;
    background: transparent;

    &__icon {
      margin-left: 15px;
    }
  }
</style>
