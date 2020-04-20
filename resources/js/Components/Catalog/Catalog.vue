<template>
    <div class="p-md-2">
        <ul class="list-group list-group-flush">
            <li v-for="(category, index) of categories" class="list-group-item">
                <a class="text-muted text-decoration-none" :data-toggle="`collapseExample${index}`"
                   role="button"
                   aria-expanded="false"
                   :aria-controls="`collapseExample${index}`">
                    {{ category.name }}
                </a>
                <ul :class="`collapseExample${index}`" :id="`collapseExample${index}`">
                    <li v-for="childCategory of category.child_categories"
                        class="list-group-item card card-body">
                        <a class="text-muted text-decoration-none" role="button"
                           @click="categorySelected(childCategory.id)">
                            {{ childCategory.name }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Catalog",
        data() {
            return {
                categories: [],
            }
        },
        async created() {
            axios.get(`/api/categories`)
                .then(response => response.data.categories)
                .then(categories => {
                    this.categories = categories
                });
        },
        methods: {
            categorySelected(id) {
                this.$emit('categorySelected', id)
            }
        },
    }
</script>

<style scoped>

</style>
