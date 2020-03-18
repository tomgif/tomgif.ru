<template>
  <div class="blog-posts" style="overflow: hidden; outline: none;">
    <blog-post :post="post">
      <div slot="content" v-html="post.detail"/>
      <blog-comments :comments="post.comments"/>
      <form class="contact-form">
        <div class="row">
          <div class="col-lg-6">
            <input type="text" placeholder="Name">
          </div>
          <div class="col-lg-6">
            <input type="text" placeholder="E-mail">
          </div>
          <div class="col-lg-12">
            <input type="text" placeholder="Website (optional)">
            <textarea placeholder="Comment"></textarea>
            <button class="site-btn">comment submit<img src="img/arrow-right.png" alt=""></button>
          </div>
        </div>
      </form>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '~/components/BlogPost';
  import BlogComments from '~/components/BlogComments';

  export default {
    components: {BlogPost, BlogComments},

    data() {
      return {
        post: {
          id: 1,
          date: '2019-03-23',
          title: '10 Essential photography tips',
          meta: [
            'By Michael Smith',
            'in Photography',
            '2 Comments'
          ],
          image: require('assets/img/blog/1.jpg'),
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada.',
          detail: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada Lorem ipsum dolor sit amet, consectetur           adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada. Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo viverra scelerisque. Phasellus facilisis lobortis metus, sit amet viverra lectus finibus ac. Aenean non felis dapibus, placera libero auctor, ornare ante. Morbi quis ex eleifend, sodales nulla vitae, scelerisque ante. Nunc id vulputate dui. Suspendisse consectetur rutrum metus nec scelerisque.</p><p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo viverra scelerisque. Phasellus facilisis lobortis metus, sit amet viverra lectus finibus ac. Aenean non felis dapibus, placerat libero auctor, ornare ante. Morbi quis ex eleifend, sodales nulla vitae, scelerisque ante. Nunc id vulputate dui. Suspendisse consectetur rutrum metus nec scelerisque. </p>',
          comments: [
            {
              id: 1,
              author: 'Mark Williams',
              avatar: require('assets/img/blog/comments/1.jpg'),
              date: '2019-03-26',
              content: '<p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi necarcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo viverra scelerisqu</p>'
            },

            {
              id: 2,
              author: 'Mark Williams',
              avatar: require('assets/img/blog/comments/2.jpg'),
              date: '2019-03-26',
              content: '<p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi necarcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo viverra scelerisqu</p>'
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  .blog-comments {
    padding-top: 60px;

    h4 {
      margin-bottom: 40px;
    }
  }
</style>
