<template>
  <div class="solar-system">
    <img
      src="../../assets/planets/proxima-centauri.svg"
      alt="Proxima Centauri"
      title="Proxima Centauri"
      class="sun"
    />
    <div class="orbit mercury-orbit">
      <div class="planet-hover mercury planet">
        <img
          src="../../assets/planets/mercury.svg"
          alt="Proxima Centauri b"
          title="Proxima Centauri b"
          class="mercury mercury-picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProximaPlanets",
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
  border: 0.25rem solid rgba(190, 190, 190, 0.05);
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: border 0.2s ease-in-out;
}
.mercury-orbit {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: orbit 0.3s linear infinite;
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
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%) rotateX(-75deg) rotateY(0) rotateZ(0);
  transform-style: preserve-3d;
}
.mercury {
  width: 17px;
  height: 17px;
  left: calc(50% + 40px);
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) rotateX(90deg) rotateY(90deg) rotateZ(0);
  display: flex;
}
.mercury-picture {
  animation: rotation3d 0.15s linear infinite;
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
