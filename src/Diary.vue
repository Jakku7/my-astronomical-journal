<template>
  <div class="diary">
    <h1>Diary feed (beta)</h1>
    <div class="lottie" v-bind:class="{ active: posts?.length }">
      <Lottie
        :options="defaultOptions"
        :height="300"
        :width="300"
        v-on:animCreated="handleAnimation"
      />
      <h2 class="loading">Loading...</h2>
    </div>
    <div class="cards" v-bind:class="{ active: !posts?.length }">
      <Card
        v-for="post in posts"
        v-bind:key="post.title"
        v-bind:title="post.title"
        v-bind:author="post.author"
        v-bind:content="post.content"
        v-bind:date="post.date"
        v-bind:picture="post.picture"
      />
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import Card from "./components/diary/Card";
import axios from "axios";
import * as animationData from "@/assets/lottie/space.json";
export default {
  name: "Diary",
  components: {
    Card,
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData?.default,
        loop: true,
        autoplay: true,
      },
      animationSpeed: 1,
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://my-astronomical-journal-dash.herokuapp.com/posts")
      .then((response) => (this.posts = response.data));
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    stop: function() {
      this.anim.stop();
    },
    play: function() {
      this.anim.play();
    },
    pause: function() {
      this.anim.pause();
    },
    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
  font-family: "Astrolab";
  margin-bottom: 36px;
}
.active {
  opacity: 0;
}
.cards {
  display: flex;
  transition: 1s ease-in-out;
  width: 100%;
  margin: 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.diary {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  align-content: center;
  flex-direction: column;
  position: relative;
}
.loading {
  margin: 0 auto;
  font-size: 30px;
}
.lottie {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: -1;
}
</style>
