<template>
  <form class="contact-form">
    <div class="row">
      <div class="col-lg-6">
        <input class="contact-form__input" type="text" placeholder="Имя">
      </div>

      <div class="col-lg-6">
        <input class="contact-form__input" type="text" placeholder="E-mail">
      </div>

      <div class="col-lg-12">
        <input class="contact-form__input" type="text" placeholder="Тема">
        <textarea class="contact-form__textarea" placeholder="Текст сообщения"></textarea>
        <site-button
          text="Отправить"
          :icon="['fas', 'arrow-right']"
        />
      </div>
    </div>
  </form>
</template>

<script>
  import SiteButton from './SiteButton';

  export default {
    name: 'ContactForm',
    components: {SiteButton}
  }
</script>

<style lang="scss">
  .contact-form {
    padding-bottom: 50px;

    &__input {
      width: 100%;
      height: 56px;
      padding: 0 22px;
      margin-bottom: 30px;
      font-size: 14px;
      font-style: italic;
      border: 2px solid #e1e1e1;
    }

    &__textarea {
      width: 100%;
      font-size: 14px;
      font-style: italic;
      border: 2px solid #e1e1e1;
      height: 159px;
      padding: 20px 22px 10px;
      resize: none;
      margin-bottom: 45px;
    }
  }
</style>
