<template>
  <div class="home">
    <button @click="clickMe">点击</button>
    <div id="container"></div>
  </div>
</template> 

<script>
// @ is an alias to /src
import { InitScene, CreatMesh } from "@/modules/login";
export default {
  name: "Home",
  data() {
    return {
      name: "张三"
    };
  },
  create() {},
  mounted() {},
  methods: {
    clickMe() {
      let dom = document.getElementById('container')
      let initScene = new InitScene(dom)
      initScene.init()

      let mesh = new CreatMesh()
      initScene.add(mesh)
    }
  }
};
</script>
<style lang="scss" scoped>
.home{
  height:100%;
}
</style>