<template>
  <div class="card-area">
    <div class="bar">
      <span>{{ reformatDate(date) }} </span>
      <span>Source: {{ author }}</span>
    </div>
    <div class="card">
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(' + picture + ')' }"
      />
      <div class="content">
        <h2>{{ title }}</h2>
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    author: String,
    content: String,
    date: String,
    title: String,
    picture: String,
  },
  methods: {
    reformatDate(date) {
      if (date) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString('en')
      }
      return 'unknown';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-family: "Astrolab";
  font-size: 18px;
  margin-top: 0px;
  text-align: left;
}
span {
  font-family: "Astrolab";
  font-size: 10px;
  text-align: justify;
  padding: 12px 0px;
}
.bar {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.card {
  background: #ffffff30;
  border: 6px solid white;
  text-decoration: none;
  font-family: "Astrolab";
  color: #fff;
  text-align: left;
  width: 100%;
}
.card-area {
  width: 100%;
  max-width: 800px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 48px;
}
.content {
  color: black;
  background: white;
  padding: 24px;
  font-family: "Liberation";
  font-size: 16px;
  line-height: 1.3;
  text-align: justify;
  white-space: pre-line;
}
.content img {
  width: 100%;
}
.image {
  height: 150px;
  border-bottom: 6px solid white;
  background-position: 50% 50%;
  background-size: 100%;
}
</style>
