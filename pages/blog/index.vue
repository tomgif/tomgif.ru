<template>
  <perfect-scrollbar class="blog-posts">
    <blog-post :post="post" v-for="post in posts" :key="post.id">
      <p slot="content">
        {{post.excerpt}}
      </p>
    </blog-post>
  </perfect-scrollbar>
</template>

<script>
  import BlogPost from '../../components/BlogPost';
  import {PerfectScrollbar} from 'vue2-perfect-scrollbar';

  export default {
    components: {BlogPost, PerfectScrollbar},

    data() {
      return {
        posts: [
          {
            id: 1,
            date: '2019-03-23',
            title: '10 Essential photography tips',
            meta: [
              'By Michael Smith',
              'in Photography',
              '2 Comments'
            ],
            image: require('assets/img/blog/1.jpg'),
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada.'
          },

          {
            id: 2,
            date: '2019-03-23',
            title: '10 Essential photography tips',
            meta: [
              'By Michael Smith',
              'in Photography',
              '2 Comments'
            ],
            image: require('assets/img/blog/2.jpg'),
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .blog-page {
    padding-right: 70px;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding: 0 15px;
      margin: 0;
    }

    @media only screen and (max-width: 767px) {
      padding: 0 15px;
      margin: 0;
    }
  }

  .blog-posts {
    height: 100%;
  }
</style>
