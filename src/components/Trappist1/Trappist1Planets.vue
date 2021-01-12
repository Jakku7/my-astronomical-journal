<template>
  <h6 v-if="single" class="planet-title">{{ planet }}</h6>
  <h6 v-if="!single" class="system-title">
    {{ systemStars[0].name }}<br /><span class="system-distance">
      {{ systemStars[0].description }}</span
    >
  </h6>
  <div class="solar-system">
    <img
      v-for="star in systemStars"
      v-bind:key="star.name"
      :src="require(`../../assets/planets/${star.picture}`)"
      v-bind:alt="star.name"
      v-bind:title="star.name"
      class="sun"
      :style="{
        width: star.sizeInPixels[0] + 'px',
        height: star.sizeInPixels[1] + 'px',
      }"
    />
    <div
      v-for="planet in systemPlanets"
      v-bind:key="planet.name"
      class="orbit"
      :style="{
        width: planet.width + 'px',
        height: planet.width + 'px',
        animationDuration: planet.animationTime + 's',
      }"
    >
      <div
        class="planet"
        :style="{
          width: planet.sizeInPixels[0] + 'px',
          height: planet.sizeInPixels[1] + 'px',
          left: 'calc(50% +' + planet.width / 2 + 'px)',
        }"
      >
        <img
          :src="require(`../../assets/planets/${planet.picture}`)"
          v-bind:alt="planet.name"
          v-bind:title="planet.name"
          class="planet-picture"
          :style="{
            width: planet.sizeInPixels[0] + 'px',
            height: planet.sizeInPixels[1] + 'px',
            left: 'calc(50% +' + planet.width / 2 + 'px)',
            animationDuration: planet.animationTime / 2 + 's',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { planets } from "../../data/planets.js";
export default {
  name: "Trappist1Planets",
  props: {
    single: Boolean,
    planet: String,
    system: String,
  },
  computed: {
    systemPlanets() {
      const filteredPlanets = planets.filter((element) => {
        return element.type !== "star";
      });
      return filteredPlanets.filter((element) => {
        if (!this.single) {
          return element.system === this.system;
        }
        return element.name === this.planet;
      });
    },
    systemStars() {
      return planets.filter((element) => {
        return element.type === "star";
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.solar-system {
  transform: rotateX(75deg);
  transform-style: preserve-3d;
  height: 800px;
  display: block;
  width: 100%;
  position: relative;
}
.orbit {
  border: 0.15rem solid rgba(190, 190, 190, 0.075);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: border 0.2s ease-in-out;
  transform-style: preserve-3d;
  border-radius: 50%;
  animation-name: orbit;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.planet-title {
  top: 100px;
  position: absolute;
  color: white;
  font-size: 30px;
  opacity: 0.1;
  font-family: "Astrolab";
}
.system-title {
  top: 100px;
  position: absolute;
  color: white;
  font-size: 30px;
  opacity: 0.1;
  font-family: "Astrolab";
}
.system-distance {
  font-size: 18px;
}
.planet {
  position: absolute;
  top: 50%;
  transition: 0.3s ease-in-out;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.sun {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateX(-75deg) rotateY(0) rotateZ(0);
  transform-style: preserve-3d;
}
.planet-picture {
  animation-name: rotation3d;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
@keyframes orbit {
  0% {
    transform: translate3d(-50%, -50%, 0) rotateZ(0);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotateZ(-360deg);
  }
}

@keyframes orbit3d {
  0% {
    transform: translate3d(-50%, -50%, 0) rotateZ(0);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotateZ(-360deg);
  }
}
@keyframes rotation3d {
  0% {
    transform: rotateY(-90deg) rotateZ(0);
  }
  100% {
    transform: rotateY(90deg) rotateZ(0);
  }
}
</style>
