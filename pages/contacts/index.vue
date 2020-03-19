<template>
  <div class="contact-section">
    <div class="row">
      <div class="col-xl-6">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
            style="border:0" allowfullscreen></iframe>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="contact-text-wrap">
          <div class="contact-text">
            <h2 class="contact-text__title">Get in touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac,
              ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis
              eu arcu vehicula fringilla ut vitae orci. Suspendisse maximus malesuada Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. </p>
          </div>

          <contact-form/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ContactForm from '~/components/ContactForm';

  export default {
    components: {ContactForm}
  }
</script>

<style lang="scss">
  .map {
    height: calc(100% - 60px);
    background: #ddd;
    position: relative;

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      height: 600px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      height: 600px;
    }

    @media only screen and (max-width: 767px) {
      height: 600px;
    }

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }

  .contact-section {
    height: 100%;
    padding-right: 70px;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding: 0 15px;
      margin: 0;
    }

    @media only screen and (max-width: 767px) {
      padding: 0 15px;
      margin: 0;
    }

    .row {
      height: 100%;
    }
  }

  .contact-text-wrap {
    padding-left: 15px;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding-left: 0;
    }

    @media only screen and (max-width: 767px) {
      padding-left: 0;
    }
  }

  .contact-text {
    max-width: 570px;
    margin-bottom: 50px;
    padding-top: 80px;

    &__title {
      margin-bottom: 20px;
    }
  }
</style>
