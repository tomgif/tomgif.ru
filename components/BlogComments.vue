<template>
  <div class="blog-comments">
    <h4>Комментарии</h4>
    <ul class="comments-list">
      <li class="comments-list__item" v-for="comment in comments" :key="comment.id">
        <blog-comment :comment="comment"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import BlogComment from '~/components/BlogComment';

  export default {
    name: 'BlogComments',
    components: {BlogComment},
    props: {
      comments: Array
    }
  }
</script>

<style lang="scss">
  .comments-list {
    list-style: none;

    &__item {
      display: block;
      margin-bottom: 43px;
    }
  }
</style>
