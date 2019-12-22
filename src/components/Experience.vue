<template>
    <div class="col-md-4 experience text-light">
        <div class="card mt-3 mb-4 justify-content-center shadow-lg">
            <img class="rounded mx-auto mt-3" :src="getImgUrl(img)" width="50%" />
            <div class="card-body card-header text-dark">
                <h5 class="card-title">
                    {{ company }}
                    <a :href="link.href" v-for="link in links" target="_blank" class="mx-1 text-dark">
                        <font-awesome-icon :icon="[link.iconFamily, link.iconName]"></font-awesome-icon>
                    </a>
                </h5>
                <p class="card-text">{{ title }}</p>
            </div>
        </div>
        <div class="card-content my-3">
            <div class="content">
                <div class="text-left">
                    <p v-for="line in content">{{ line }}</p>
                </div>
                <div class="d-flex justify-content-lg-end align-items-center">
                    <small class="text-light">{{ range }}</small>
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
    .card > img {
        background: white;
    }
    .card {
        border: none;
        background: rgba(255,255,255,1);
    }
    .card-header {
        background: rgba(0,0,0,0);
    }
    .card-content {
        background: rgba(86,86,86,0);
        color: white;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: 500;
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
