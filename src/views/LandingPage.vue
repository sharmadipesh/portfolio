<template>
  <div class="layout">
    <div class="title">
      <div>
        <h3 class="heading-one">Heyyaa!!,</h3>
        <h3 class="name-conatiner">
          <vue-typed-js
            :strings="['Anshika.', 'Artist.', 'Dancer.']"
            :typeSpeed="200"
            :backSpeed="200"
            :loop="true"
          >
            <div>I am <span class="typing"></span></div>
          </vue-typed-js>
        </h3>
        <div class="buttons">
          <button class="bt-instagram">
            <i class="fa fa-instagram" aria-hidden="true" />
          </button>
          <button class="bt-twitter">
            <i class="fa fa-twitter" aria-hidden="true" />
          </button>
          <button class="bt-facebook">
            <i class="fa fa-facebook" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div>
        <img :src="`img/img-${this.imageName}.svg`" loading="lazy" />
      </div>
    </div>
  </div>
</template>
<script>
import { VueTypedJs } from "vue-typed-js";

export default {
  data() {
    return {
      imageName: 1,
    };
  },
  components: {
    VueTypedJs,
  },
  created() {
    this.imageName = Math.floor(Math.random() * 4) + 1;
  },
};
</script>
<style lang="scss" scoped>
.name-conatiner {
  width: 310px;
}
.buttons {
  margin-top: 20px;
  display: flex;
  button {
    cursor: pointer;
    background: white;
    border-radius: 50%;
    margin-right: 10px;
    height: 60px;
    width: 60px;
    font-size: 28px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      transition: 0.3s;
    }
  }
}
.bt-instagram {
  border: transparent;
  color: #fff;
  background: linear-gradient(
    180deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d,
    #f56040,
    #f77737,
    #fcaf45,
    #ffdc80
  ) !important;
}
.bt-facebook {
  color: #fff;
  background-color: #4267b2 !important;
  border: #4267b2;
}

.bt-twitter {
  color: #fff;
  background-color: #1da1f2 !important;
  border: #1da1f2;
}

.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1050px) {
    flex-direction: unset;
  }
}

.heading-one {
  margin-bottom: 15px;
}
img {
  width: 100%;
  max-width: 95vh;
  height: auto;
  @media only screen and (max-width: 1050px) {
    width: 100%;
    position: absolute;
    bottom: -50px;
    left: 0;
  }
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #8f3b1f;
  padding-left: 20px;
  font-size: 40px;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
}
</style>
