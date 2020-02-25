<template>
  <div class="hello">
    <facebook :url="url" scale="3"></facebook>
    <twitter :url="url" title="Hi, check our site" scale="3"></twitter>
    <linkedin :url="url" scale="3"></linkedin>
    <telegram :url="url" scale="3"></telegram>
    <whats-app :url="url" title="Hi, check our site" scale="3"></whats-app>
    <email :url="url" subject="Hi, check our site" scale="3"></email>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  Telegram,
  WhatsApp,
  Email
} from "vue-socialmedia-share";
export default {
  name: "social media share",
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Telegram,
    WhatsApp,
    Email
  },
  data() {
    return {
      url: "https://github.com/sieroniekuggy"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello > span {
  padding: 1em;
}
</style>
