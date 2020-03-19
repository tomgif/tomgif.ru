<template>
  <div class="sidebar-wrap">
    <nuxt-link to="/">
      <site-logo title="Nissa" sub-title="Photography Studio"/>
    </nuxt-link>

    <about-info title="My name is Michael Smith.">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum eget sapien ac,
        ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare.
      </p>
    </about-info>

    <contact-info
      address="1525 Boring Lane, Los Angeles, CA"
      phone="+34 56672 9984 22"
      email="contactme@myemail.com"
    />

    <nuxt-link to="/blog">
      <site-button
        text="перейти в блог"
        :icon="['fas', 'arrow-right']"
      />
    </nuxt-link>
  </div>
</template>

<script>
  import SiteLogo from './SiteLogo'
  import AboutInfo from './AboutInfo';
  import SiteButton from './SiteButton';
  import ContactInfo from './ContactInfo';

  export default {
    name: 'Sidebar',
    components: {
      SiteLogo,
      AboutInfo,
      SiteButton,
      ContactInfo
    }
  }
</script>

<style lang="scss">
  .sidebar-wrap {
    padding: 151px 95px 100px 145px;

    @media only screen and (min-width: 1200px) and (max-width: 1400px) {
      padding: 110px 40px 91px 50px;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      padding: 110px 30px 91px 50px;
    }

    @media only screen and (max-width: 767px) {
      padding: 100px 15px;
      padding-left: 50px;
      max-width: 420px;
      margin: 0 auto;
    }
  }
</style>
