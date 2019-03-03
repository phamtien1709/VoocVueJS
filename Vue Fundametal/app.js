Vue.component('click-counter', {
    template: "<button @click='counter++'>{{counter}}</button>",
    data() {
        return {
            counter: 0
        }
    }
})


new Vue({
    el: '#app'
})