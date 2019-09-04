<template>
    <div class="others">
         <h1>This is an others page</h1>
    </div>
</template>

<script>
    export default {
        name: 'others',
        beforeCreate() {
            document.body.className = 'others';
        }
    }
</script>
