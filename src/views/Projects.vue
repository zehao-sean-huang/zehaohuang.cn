<template>
    <div class="projects">
        <h1>This is the projects page</h1>
    </div>
</template>

<script>
    export default {
        name: 'projects',
        beforeCreate() {
            document.body.className = "projects";
        }
    }
</script>
