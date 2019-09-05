<template>
    <main role="main" class="others">
        <div class="projects">
            <div class="container">
                <h1 class="display-1">This is an others page.</h1>
            </div>
        </div>
        <router-link class="carousel-control-prev position-fixed" to="/projects" role="button"
                     data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="font-size: 50px;"></span>
            <span class="sr-only">Previous</span>
        </router-link>
    </main>
</template>

<script>
    export default {
        name: 'others',
        beforeCreate() {
            document.body.className = 'others';
        }
    }
</script>
