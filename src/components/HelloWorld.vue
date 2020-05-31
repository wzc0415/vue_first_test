<template>
    <div class="hello">
        <h1>{{ toggleMsg }}</h1>
        <h1>{{ msg2 }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br/>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
            >vue-cli documentation</a
            >.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li>
                <a
                        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                        target="_blank"
                        rel="noopener"
                >babel</a
                >
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                        target="_blank"
                        rel="noopener"
                >typescript</a
                >
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                        target="_blank"
                        rel="noopener"
                >router</a
                >
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                        target="_blank"
                        rel="noopener"
                >vuex</a
                >
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                        target="_blank"
                        rel="noopener"
                >eslint</a
                >
            </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
                >Forum</a
                >
            </li>
            <li>
                <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
                >Community Chat</a
                >
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
                >Twitter</a
                >
            </li>
            <li>
                <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
            </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li>
                <a href="https://router.vuejs.org" target="_blank" rel="noopener"
                >vue-router</a
                >
            </li>
            <li>
                <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/vue-devtools#vue-devtools"
                        target="_blank"
                        rel="noopener"
                >vue-devtools</a
                >
            </li>
            <li>
                <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
                >vue-loader</a
                >
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/awesome-vue"
                        target="_blank"
                        rel="noopener"
                >awesome-vue</a
                >
            </li>
        </ul>
        <button @click="onClick()">这是个按钮</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg!: string;
        @Prop() private msg2!: string;
        toggleMsg:string;
        constructor() {
            super();
            this.toggleMsg = this.msg;
            console.log('constructor',JSON.stringify(this.msg))
        }

        beforeCreate() {
            console.log('beforeCreate');
        }

        created() {
            console.log('created',JSON.stringify(this.msg));
        }

        beforeMount() {
            console.log('beforeMount',JSON.stringify(this.msg));
        }

        mounted() {
            console.log('mounted',JSON.stringify(this.msg));
        }

        beforeUpdate() {
            console.log('beforeUpdate',JSON.stringify(this.msg));
        }

        updated() {
            console.log('updated',JSON.stringify(this.msg))
        }

        activated() {
            console.log('activated')
        }

        deactivated() {
            console.log('deactivated')
        }

        beforeDestroy() {
            console.log('beforeDestroy')
        }

        destroyed() {
            console.log('destroyed')
        }

        errorCaptured(err: Error, vm: any, info: string) {
            console.error('errorCaptured', err)
        }

        @Watch('$route')
        onRouteChanged(route: any, oldRoute: any): void {
            console.log(route, oldRoute)
        }

        onClick() {
            this.toggleMsg = 'Peace and Love';
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
