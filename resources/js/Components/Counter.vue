<template>
    <div class="counter d-flex ">
        <button class="counter-btn-minus my-auto" @click="minus"><span>-</span></button>
        <input :value="count" class="text-center mx-1 my-auto">
        <button class="counter-btn-plus my-auto" @click="plus"><span>+</span></button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return {
                count: 1
            }
        },
        props: {
            min: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
            }
        },
        watch: {
            count() {
                this.$emit('CountChanged', this.count);
            }
        },
        methods: {
            minus() {
                if (this.count > this.min)
                    this.count -= 1;
            },
            plus() {
                if (this.count < this.max)
                    this.count += 1;
            }
        }
    }
</script>

<style scoped>

    .counter button {
        position: relative;
        font-family: unset !important;
        line-height: unset !important;
        padding: 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;

        width: 38px;
        height: 38px;
        border-radius: 60px;
        border: solid 1px #9a9a9a;

    }

    .counter-btn-plus span, .counter-btn-minus span {
        font-size: 30px;
        font-family: slick, cursive;
        line-height: 1 !important;
        text-align: center;
        height: 20px !important;
        color: black;
    }

    .counter-btn-plus span {
        content: "+"
    }

    .counter-btn-minus span {
        content: "-"
    }

    .counter button:active {
        background-color: white !important;
        color: rgba(236, 123, 141, 0.98) !important;
        border: solid 2px rgba(236, 123, 141, 0.98);
    }

    .counter input {
        font-size: 20px;
        border: solid 1px #9a9a9a;
        border-radius: 5px;
        background-color: inherit;
        text-align: center;
        width: 38px;
        height: 28px;
    }

    .counter {
        position: relative;
    }
</style>
