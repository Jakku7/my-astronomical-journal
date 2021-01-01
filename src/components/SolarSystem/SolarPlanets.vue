<template>
  <h6 v-if="single" class="planet-title">{{ planet }}</h6>
  <h6 v-if="!single" class="system-title">Solar System</h6>
  <div class="solar-system">
    <img src="../../assets/planets/sun.svg" alt="Sun" title="sun" class="sun" />
    <div
      v-if="!single || (single && planet === 'Mercury')"
      class="orbit mercury-orbit"
    >
      <div class="planet-hover mercury planet">
        <img
          src="../../assets/planets/mercury.svg"
          alt="Mercury"
          title="Mercury"
          class="mercury mercury-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Venus')"
      class="orbit venus-orbit"
    >
      <div class="planet-hover venus planet">
        <img
          src="../../assets/planets/venus.svg"
          alt="Venus"
          title="Venus"
          class="venus venus-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Earth')"
      class="orbit earth-orbit"
    >
      <div class="planet-hover earth planet">
        <img
          src="../../assets/planets/earth.svg"
          alt="Earth"
          title="Earth"
          class="earth earth-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Mars')"
      class="orbit mars-orbit"
    >
      <div class="planet-hover mars planet">
        <img
          src="../../assets/planets/mars.svg"
          alt="Mars"
          title="Mars"
          class="mars mars-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Jupiter')"
      class="orbit jupiter-orbit"
    >
      <div class="planet-hover jupiter planet">
        <img
          src="../../assets/planets/jupiter.svg"
          alt="Jupiter"
          title="Jupiter"
          class="jupiter jupiter-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Saturn')"
      class="orbit saturn-orbit"
    >
      <div class="planet-hover saturn planet">
        <img
          src="../../assets/planets/saturn.svg"
          alt="Saturn"
          title="Saturn"
          class="saturn saturn-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Uranus')"
      class="orbit uranus-orbit"
    >
      <div class="planet-hover uranus planet">
        <img
          src="../../assets/planets/uranus.svg"
          alt="Uranus"
          title="Uranus"
          class="uranus uranus-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Neptune')"
      class="orbit neptune-orbit"
    >
      <div class="planet-hover neptune planet">
        <img
          src="../../assets/planets/neptune.svg"
          alt="Neptune"
          title="Neptune"
          class="neptune neptune-picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Planets",
  props: {
    single: Boolean,
    planet: String,
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
.orbit {
  border: 0.25rem solid rgba(190, 190, 190, 0.075);
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: border 0.2s ease-in-out;
}
.mercury-orbit {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: orbit 4.5s linear infinite;
  transform-style: preserve-3d;
}
.venus-orbit {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: orbit 11s linear infinite;
  transform-style: preserve-3d;
}
.earth-orbit {
  border-radius: 50%;
  width: 240px;
  height: 240px;
  animation: orbit 18s linear infinite;
  transform-style: preserve-3d;
}
.mars-orbit {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  animation: orbit 34s linear infinite;
  transform-style: preserve-3d;
}
.jupiter-orbit {
  border-radius: 50%;
  width: 400px;
  height: 400px;
  animation: orbit 216s linear infinite;
  transform-style: preserve-3d;
}
.saturn-orbit {
  border-radius: 50%;
  width: 540px;
  height: 540px;
  animation: orbit 522s linear infinite;
  transform-style: preserve-3d;
}
.uranus-orbit {
  border-radius: 50%;
  width: 630px;
  height: 630px;
  animation: orbit 1512s linear infinite;
  transform-style: preserve-3d;
}
.neptune-orbit {
  border-radius: 50%;
  width: 735px;
  height: 735px;
  animation: orbit 2970s linear infinite;
  transform-style: preserve-3d;
}
.planet {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease-in-out;
}
/* .planet-hover {
  padding: 8px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  align-content: center;
} */
/* .planet-hover > img:hover {
  background: #2a3c54;
  padding: 12px;
  border-radius: 50%;
  z-index: 999999;
} */
.sun {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90px;
  height: 90px;
  transform: translate(-50%, -50%) rotateX(-75deg) rotateY(0) rotateZ(0);
  transform-style: preserve-3d;
}
.mercury {
  width: 4px;
  height: 4px;
  left: calc(50% + 75px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.mercury-picture {
  animation: rotation3d 2.25s linear infinite;
}
.venus {
  width: 15px;
  height: 15px;
  left: calc(50% + 100px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.venus-picture {
  animation: rotation3d 5.5s linear infinite;
}
.earth {
  width: 17px;
  height: 17px;
  left: calc(50% + 120px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.earth-picture {
  animation: rotation3d 9s linear infinite;
}
.mars {
  width: 10px;
  height: 10px;
  left: calc(50% + 150px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.mars-picture {
  animation: rotation3d 17s linear infinite;
}
.jupiter {
  width: 50px;
  height: 50px;
  left: calc(50% + 200px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.jupiter-picture {
  animation: rotation3d 108s linear infinite;
}
.saturn {
  width: 40px;
  height: 40px;
  left: calc(50% + 270px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.saturn-picture {
  animation: rotation3d 261s linear infinite;
}
.uranus {
  width: 30px;
  height: 30px;
  left: calc(50% + 320px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.uranus-picture {
  animation: rotation3d 756s linear infinite;
}
.neptune {
  width: 25px;
  height: 25px;
  left: calc(50% + 370px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.neptune-picture {
  animation: rotation3d 1485s linear infinite;
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
