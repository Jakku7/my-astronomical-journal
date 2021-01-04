<template>
  <h6 v-if="single" class="planet-title">{{ planet }}</h6>
  <h6 v-if="!single" class="system-title">
    Gliese 832 <br /><span class="system-distance"
      >16 light-years from earth</span
    >
  </h6>
  <div class="solar-system">
    <img
      src="../../assets/planets/proxima-centauri.svg"
      alt="Proxima Centauri"
      title="Proxima Centauri"
      class="sun"
    />
    <div
      v-if="!single || (single && planet === 'Gliese-832 c')"
      class="orbit gliese-832-c-orbit"
    >
      <div class="planet-hover gliese-832-c planet">
        <img
          src="../../assets/planets/uranus.svg"
          alt="Gliese-832-c"
          title="Gliese-832-c"
          class="gliese-832-c gliese-832-c-picture"
        />
      </div>
    </div>
    <div
      v-if="!single || (single && planet === 'Gliese-832 b')"
      class="orbit gliese-832-b-orbit"
    >
      <div class="planet-hover gliese-832-b planet">
        <img
          src="../../assets/planets/neptune.svg"
          alt="gliese-832-b"
          title="gliese-832-b"
          class="gliese-832-b gliese-832-b-picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gliese832Planets",
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
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%) rotateX(-75deg) rotateY(0) rotateZ(0);
  transform-style: preserve-3d;
}
.gliese-832-c {
  width: 20px;
  height: 20px;
  left: calc(50% + 35px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.gliese-832-c-orbit {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: orbit 1.8s linear infinite;
  transform-style: preserve-3d;
}
.gliese-832-c-picture {
  animation: rotation3d 0.9s linear infinite;
}

.gliese-832-b-orbit {
  border-radius: 50%;
  width: 380px;
  height: 380px;
  animation: orbit 180s linear infinite;
  transform-style: preserve-3d;
}

.gliese-832-b {
  width: 42px;
  height: 42px;
  left: calc(50% + 190px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.gliese-832-b-picture {
  animation: rotation3d 90s linear infinite;
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
