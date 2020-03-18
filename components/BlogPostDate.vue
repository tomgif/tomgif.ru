<template>
  <div class="post-date">
    <div class="post-date__day">{{dateParts.day}}</div>
    <div class="post-date__parts">{{dateParts.month}}<br>{{dateParts.year}}</div>
  </div>
</template>

<script>
  export default {
    name: 'BlogPostDate',

    props: {
      date: String
    },

    computed: {
      dateParts() {
        let parts = this.$moment(this.date, 'YYYY-MM-DD');
        return {
          day: parts.format('DD'),
          month: parts.format('D MMMM').replace(/\d+\s/g, ''),
          year: parts.format('YYYY'),
        }
      }
    }
  }
</script>

<style lang="scss">
  .post-date {
    background: #fff;
    width: 138px;
    height: 84px;
    padding-top: 5px;
    padding-left: 10px;
    overflow: hidden;

    &__day {
      float: left;
      font-family: "Playfair Display", serif;
      font-weight: 900;
      font-size: 48px;
      margin-right: 15px;
      line-height: 1.2;
    }

    &__parts {
      padding-top: 17px;
      line-height: 1.4;
      font-size: 13px
    }
  }
</style>
