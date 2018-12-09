<template>
    <div class="component">
        <p>Learn about the different Amiibo facts</p>
        <p>FACT: {{ name }} </p>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>


<style scoped>
    div {
        background-color: lightgray;
    }
</style>
