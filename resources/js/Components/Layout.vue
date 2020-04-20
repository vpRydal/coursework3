<template>
    <keep-alive :exclude="['Catalog', 'ViewProduct']">
        <router-view>
        </router-view>
    </keep-alive>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>

</style>
