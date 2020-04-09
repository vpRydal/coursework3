import Vue from "vue";
import router from "../router";

export default new Vue({
    el: '#App',
    data: {
        checkedAll: false
    },
    methods: {
        checkAll: function () {
            this.checkedAll = !this.checkedAll;
        }
    },
    functional: {

    },
    computed: {

    },
    router: router
});
