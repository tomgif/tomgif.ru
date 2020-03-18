<template>
  <div class="blog-post">
    <div class="blog-post__thumb" :style="{backgroundImage: `url(${post.image})`}">
      <blog-post-date :date="post.date"/>
    </div>

    <div class="blog-post__content">
      <div class="blog-post__title">
        <n-link :to="`/blog/${post.id}`" class="blog-post__link">
          {{post.title}}
        </n-link>
      </div>

      <div class="blog-metas">
        <div class="blog-meta" v-for="(meta, index) in post.meta" :key="index">
          {{meta}}
        </div>
      </div>

      <slot name="content"/>

      <slot/>
    </div>
  </div>
</template>

<script>
  import BlogPostDate from './BlogPostDate';

  export default {
    name: 'BlogPost',

    components: {BlogPostDate},

    props: {
      post: Object
    }
  }
</script>

<style lang="scss">
  .blog-post {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 80px;

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        margin-bottom: 0;
      }

      @media only screen and (max-width: 767px) {
        margin-bottom: 0;
      }
    }

    &__thumb {
      height: 566px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
    }

    &__content {
      width: calc(100% - 138px);
      background: #fff;
      padding: 55px 58px;
      margin-top: -133px;
      margin-left: 62px;

      @media only screen and (max-width: 479px) {
        width: calc(100% - 10px);
        margin-left: 5px;
        padding: 40px 15px;
      }

      @media only screen and (max-width: 767px) {
        width: calc(100% - 30px);
        margin-left: 15px;
      }
    }

    &__title {
      font-size: 36px;
      margin: 0;
      color: #242424;
      font-weight: 700;
      line-height: 1.2;
    }

    &__link {
      color: #242424;
    }
  }

  .blog-metas {
    padding-top: 15px;
    margin-bottom: 30px;
  }

  .blog-meta {
    display: inline-block;
    position: relative;
    font-size: 13px;
    padding-right: 20px;
    margin-right: 22px;
    margin-bottom: 10px;

    &:after {
      position: absolute;
      content: "|";
      font-size: 13px;
      color: #828282;
      right: 0;
      top: 0;
    }

    &:last-child {
      padding-right: 0;
      margin-right: 0;

      &:after {
        display: none;
      }
    }
  }
</style>
