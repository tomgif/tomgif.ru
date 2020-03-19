<template>
  <div class="about-section">
    <div class="video-section" :style="{'background-image': `url(${require('~/assets/img/about-bg.jpg')})`}">
      <a href="https://www.youtube.com/watch?v=2kf8WNQQPpc" class="video-play-btn">
        <font-awesome-icon fas icon="play"/>
      </a>
    </div>

    <div class="row m-0 milestones">
      <div class="col-lg-3 col-sm-6 p-0" v-for="milestone in milestones" :key="milestone.id">
        <milestone :content="milestone"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Milestone from '../../components/Milestone';

  export default {
    components: {Milestone},
    data() {
      return {
        milestones: [
          {id: 1, head: '25', title: 'Years Of experience', description: 'Nature Photography'},
          {id: 2, head: '16k', title: 'Photograps taken', description: 'Nature Photography'},
          {id: 3, head: '59', title: 'Weddings/Year', description: 'Happy Couples'},
          {id: 4, head: '37k', title: 'IG Followers', description: 'Thank you'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .about-section {
    height: 100%;
    padding-right: 74px;
    overflow: hidden;
    outline: none;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding: 0 15px;
      margin: 0;
    }

    @media only screen and (max-width: 767px) {
      padding: 0 15px;
      margin: 0;
    }
  }

  .milestones {
    padding-top: 30px;
  }

  .video-section {
    height: calc(100% - 235px);
    margin-bottom: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      height: 400px;
    }

    @media only screen and (max-width: 767px) {
      height: 400px;
    }
  }

  .video-play-btn {
    display: block;
    width: 159px;
    height: 69px;
    text-align: center;
    padding-top: 16px;
    font-size: 22px;
    color: #fff;
    border-radius: 27px;
    background: rgba(255, 255, 255, 0.43);
  }
</style>
