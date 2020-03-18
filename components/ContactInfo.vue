<template>
  <ul class="contact-info">
    <li v-if="address">
      {{address}}
    </li>

    <li v-if="phone">
      {{phone}}
    </li>

    <li v-if="email">
      <a :href="'mailto:' + email">
        {{email}}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ContactInfo',
    props: {
      address: {type: String, default: null},
      phone: {type: String, default: null},
      email: {type: String, default: null},
    }
  }
</script>

<style lang="scss">
  .contact-info {
    list-style: none;
    margin-bottom: 65px;
    position: relative;
  }

  .contact-info:after {
    position: absolute;
    content: "";
    width: 26px;
    height: 32px;
    left: -36px;
    top: -5px;
    background: url(../assets/img/icons/place.png) no-repeat;
  }

  .contact-info li {
    font-size: 14px;
    color: #aaaaaa;
    margin-bottom: 5px;
  }

  .contact-info li a {
    color: #242424;
  }
</style>
