<template>
  <h6 v-if="single" class="planet-title">{{ planet }}</h6>
  <h6 v-if="!single" class="system-title">
    Tau Ceti <br /><span class="system-distance"
      >12 light-years from earth</span
    >
  </h6>
  <div class="solar-system">
    <img src="../../assets/planets/sun.svg" alt="Sun" title="sun" class="sun" />
    <div
      v-if="!single || (single && planet === 'Tau Ceti e')"
      class="orbit tau-ceti-e-orbit"
    >
      <div class="planet-hover tau-ceti-e planet">
        <img
          src="../../assets/planets/mercury.svg"
          alt="Tau Ceti e"
          title="Tau Ceti e"
          class="tau-ceti-e tau-ceti-e-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Tau Ceti f')"
      class="orbit tau-ceti-f-orbit"
    >
      <div class="planet-hover tau-ceti-f planet">
        <img
          src="../../assets/planets/pluto.svg"
          alt="Tau Ceti f"
          title="Tau Ceti f"
          class="tau-ceti-f tau-ceti-f-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Tau Ceti g')"
      class="orbit tau-ceti-g-orbit"
    >
      <div class="planet-hover tau-ceti-g planet">
        <img
          src="../../assets/planets/mars.svg"
          alt="Tau Ceti g"
          title="Tau Ceti g"
          class="tau-ceti-g tau-ceti-g-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Tau Ceti h')"
      class="orbit tau-ceti-h-orbit"
    >
      <div class="planet-hover tau-ceti-h planet">
        <img
          src="../../assets/planets/mars.svg"
          alt="Tau Ceti h"
          title="Tau Ceti h"
          class="tau-ceti-h tau-ceti-h-picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TauCetiPlanets",
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
.orbit {
  border: 0.15rem solid rgba(190, 190, 190, 0.075);
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: border 0.2s ease-in-out;
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
.tau-ceti-e-orbit {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  animation: orbit 8s linear infinite;
  transform-style: preserve-3d;
}
.planet {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease-in-out;
}
.sun {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%) rotateX(-75deg) rotateY(0) rotateZ(0);
  transform-style: preserve-3d;
}
.tau-ceti-e {
  width: 25px;
  height: 25px;
  left: calc(50% + 90px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.tau-ceti-e-picture {
  animation: rotation3d 4s linear infinite;
}

.tau-ceti-f-orbit {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  animation: orbit 32s linear infinite;
  transform-style: preserve-3d;
}
.tau-ceti-f {
  width: 25px;
  height: 25px;
  left: calc(50% + 150px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.tau-ceti-f-picture {
  animation: rotation3d 16s linear infinite;
}

.tau-ceti-g-orbit {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: orbit 0.6s linear infinite;
  transform-style: preserve-3d;
}
.tau-ceti-g {
  width: 19px;
  height: 19px;
  left: calc(50% + 40px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.tau-ceti-g-picture {
  animation: rotation3d 0.3s linear infinite;
}

.tau-ceti-h-orbit {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: orbit 1.2s linear infinite;
  transform-style: preserve-3d;
}
.tau-ceti-h {
  width: 19px;
  height: 19px;
  left: calc(50% + 60px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.tau-ceti-h-picture {
  animation: rotation3d 0.6s linear infinite;
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
