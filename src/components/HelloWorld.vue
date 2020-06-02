<template>
  <div class="hello">
    <h1>{{ toggleMsg }}</h1>
    <h1>{{ msg2 }}</h1>
    <button v-on:click="onClick">这是个按钮</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private msg2!: string;
  toggleMsg: string;

  constructor() {
    super();
    this.toggleMsg = this.msg;
    console.log("constructor", JSON.stringify(this.msg));
  }

  beforeCreate() {
    console.log("beforeCreate");
  }

  created() {
    console.log("created", JSON.stringify(this.msg));
  }

  beforeMount() {
    console.log("beforeMount", JSON.stringify(this.msg));
  }

  mounted() {
    console.log("mounted", JSON.stringify(this.msg));
    // axios.get('http://localhost:8000/asd').then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.error(err);
    // }).finally(() => {
    //     console.log('finally');
    // })
  }

  beforeUpdate() {
    console.log("beforeUpdate", JSON.stringify(this.msg));
  }

  updated() {
    console.log("updated", JSON.stringify(this.msg));
  }

  activated() {
    console.log("activated");
  }

  deactivated() {
    console.log("deactivated");
  }

  beforeDestroy() {
    console.log("beforeDestroy");
  }

  destroyed() {
    console.log("destroyed");
  }

  errorCaptured(err: Error, vm: any, info: string) {
    console.error("errorCaptured", err);
  }

  @Watch("$route")
  onRouteChanged(route: any, oldRoute: any): void {
    console.log(route, oldRoute);
  }

  onClick() {
    this.toggleMsg = "Peace and Love";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
