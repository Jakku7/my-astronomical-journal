<template>
  <h6 v-if="single" class="planet-title">{{ planet }}</h6>
  <h6 v-if="!single" class="system-title">
    {{ systemStars[0]?.name }}<br /><span class="system-distance">
      {{ systemStars[0]?.description }}</span
    >
  </h6>
  <div class="solar-system">
    <img
      v-for="star in systemStars"
      v-bind:key="star.name"
      v-bind:alt="star.name"
      v-bind:title="star.name"
      v-bind:src="pictures(star?.color)"
      class="sun"
      :style="{
        width: star.sizeWidth + 'px',
        height: star.sizeHeight + 'px',
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
          width: planet.sizeWidth + 'px',
          height: planet.sizeHeight + 'px',
          left: 'calc(50% +' + planet.width / 2 + 'px)',
        }"
      >
        <img
          v-bind:src="pictures(planet?.color)"
          v-bind:alt="planet.name"
          v-bind:title="planet.name"
          class="planet-picture"
          :style="{
            width: planet.sizeWidth + 'px',
            height: planet.sizeHeight + 'px',
            left: 'calc(50% +' + planet.width / 2 + 'px)',
            animationDuration: planet.animationTime / 2 + 's',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Planets",
  methods: {
    pictures(color) {
      switch (color) {
        case "yellow":
          return require("../assets/planets/sun.svg");
        case "blue":
          return require("../assets/planets/earth.svg");
        case "orange":
          return require("../assets/planets/jupiter.svg");
        case "red":
          return require("../assets/planets/mars.svg");
        case "neptune":
          return require("../assets/planets/neptune.svg");
        case "green":
          return require("../assets/planets/uranus.svg");
        case "light-orange":
          return require("../assets/planets/venus.svg");
        case "medium-orange":
          return require("../assets/planets/saturn.svg");
        case "brown":
          return require("../assets/planets/pluto.svg");
        case "dark-red":
          return require("../assets/planets/proxima-centauri.svg");
        default:
          return require("../assets/planets/mars.svg");
      }
    },
  },
  props: {
    single: Boolean,
    planet: String,
    system: String,
    objects: Array,
  },
  computed: {
    systemPlanets() {
      if (this.objects) {
        const filteredPlanets = this.objects.filter((element) => {
          return element.type !== "star";
        });
        return filteredPlanets.filter((element) => {
          if (!this.single) {
            return element.system === this.system;
          }
          return element.name === this.planet;
        });
      }
      return [];
    },
    systemStars() {
      if (this.objects) {
        const filteredStars = this.objects.filter((element) => {
          return element.type === "star";
        });
        return filteredStars.filter((element) => {
          return element.system === this.system;
        });
      }
      return [];
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
