<template>
    <div id="loadScreen" class="carga">
        <span id="palabra"></span>
    </div>
</template>
<script>
export default {
  props: {
    load: Boolean
  },
  data: () => ({
    rep: 0
  }),
  mounted () {
    let self = this
    setTimeout(function () {
      self.loadEnd()
    }, 2100)
  },
  methods: {
    loadEnd () {
      this.$emit('terminarCarga')
    }
  }
}
</script>
<style scoped>
.carga {
  background-color: #424242;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  display: flex;
   flex-direction: column;
}

span:before {
    position: absolute;
    color: #FFFFFF;
    font-size: 30px;
    margin-left: 45vw;
    top: 45vh;
    opacity: 1;
    content: "D'ORBIGNY";
    animation-name: head;
    animation-duration: 1s;
    animation-iteration-count: 2;
}

@keyframes head {
    0% {content: "PALEONTOLOGIA";}
    10% {content: "ORNITOLOGIA";}
    20% {content: "MASTOZOOLOGIA";}
    30% {content: "HERPETOLOGIA";}
    40% {content: "ENTOMOLOGIA";}
    50% {content: "ICTIOLOGIA";}
    60% {content: "MINEROLOGIA";}
    70% {content: "FLORA";}
    80% {content: "FAUNA";}
    90% {content: "PACHAMAMA";}
    100% {content: "D'ORBIGNY";}
}

</style>
