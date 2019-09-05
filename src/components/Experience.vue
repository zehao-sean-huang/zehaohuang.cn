<template>
    <div class="col-md-4 experience text-dark">
        <div class="card my-3 shadow-sm justify-content-center">
            <img :src="getImgUrl(img)" width="50%" class="rounded mx-auto mt-1"/>
            <div class="card-body">
                <h5 class="card-title">
                    {{ company }}
                    <a :href="link.href" v-for="link in links" target="_blank" class="mx-1 text-dark">
                        <font-awesome-icon :icon="[link.iconFamily, link.iconName]"></font-awesome-icon>
                    </a>
                </h5>
                <p class="card-text">{{ title }}</p>
            </div>
            <div class="card-body card-content">
                <div class="content">
                    <div class="text-left">
                        <p v-for="line in content">{{ line }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-light">{{ range }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style :lang="scss" scoped>
    @media (max-width: 48em) {
        .experience {
            margin-left: 2em;
            margin-right: 2em;
        }
    }
    .card-content {
        background: #555555;
        color: white;
    }
</style>

<script>
    export default {
        name: "experience",
        props: {
            company: String,
            title: String,
            content: Array,
            img: String,
            github: String,
            range: String,
            links: Object
        }, methods: {
            getImgUrl: function (pic) {
                return require('../assets/' + pic)
            }
        }
    }
</script>