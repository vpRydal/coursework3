<template>
    <form @submit.prevent="onSubmit">
        <textarea v-model="message" name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Отправить</button>
    </form>

</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                message: ''
            }
        },
        created() {


        },
        methods: {
            onSubmit() {
                this.axios
                    .post('api/test', {message: this.message})
                    .then(response => {
                        console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>
