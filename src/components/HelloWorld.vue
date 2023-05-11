<template>
    <div>
        <h1>{{ msg }}</h1>
        <img src="../theme/images/logo-tekst1.png">
    </div>
</template>

<script>
    import '../theme/main.css';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
</style>