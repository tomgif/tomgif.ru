<template>
  <div class="blog-comment">
    <div class="blog-comment__avatar">
      <img class="blog-comment__image" :src="comment.avatar" :alt="comment.author">
    </div>

    <div class="comment-text">
      <h6 class="comment-text__author">{{comment.author}}</h6>
      <span class="comment-text__date">{{comment.date}}</span>
      <div class="comment-text__content" v-html="comment.content"></div>
      <a class="comment-text__reply" href="#">Ответить</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogComment',
    props: {
      comment: Object
    }
  }
</script>

<style lang="scss">
  .blog-comment {
    &__avatar {
      float: left;
      margin-right: 44px;

      @media only screen and (max-width: 479px) {
        float: none;
        margin-bottom: 30px;
      }
    }

    &__image {
      width: 67px;
      height: 67px;
      border-radius: 50%;
    }
  }

  .comment-text {
    overflow: hidden;

    &__author {
      font-weight: 600;
    }

    &__date {
      font-size: 13px;
      color: #828282;
    }

    &__content {
      padding-top: 10px;
      margin-bottom: 10px;
    }

    &__reply {
      font-size: 13px;
      color: #242424;
      text-decoration: underline;
    }
  }
</style>
