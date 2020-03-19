<template>
  <div class="blog-comments">
    <div class="blog-comments__title">Комментарии</div>
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

  .blog-comments {
    padding-top: 60px;

    &__title {
      margin: 0 0 40px;
      color: #242424;
      font-weight: 700;
      font-size: 24px;
      line-height: 1.2;
    }
  }
</style>
