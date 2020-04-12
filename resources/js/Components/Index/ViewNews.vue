<template>
    <main class="container">
        <div v-html="htmlText"></div>
    </main>
</template>

<script>
    export default {
        name: "ViewNews",
        data() {
            return {
                slug: null,
                htmlText: null
            }
        },
        created() {
            this.slug = this.$route.params.slug;

            axios
                .get(`/api/news/view/${this.slug}`)
                .then(({data:{html_text}}) => {
                    console.log(html_text)
                    this.htmlText = html_text;
            })
        }
    }
</script>

<style scoped>

</style>
