<template>
    <main role="main" class="others">
        <div class="projects">
            <div class="container">
                <div class="row">
                    <experience company="love.zehaohuang.cn"
                                title="Creator & Maintainer"
                                :content="[
                                    'A website that keeps track of stories between me and my love Jenny.'
                                ]"
                                range="04/2019 - Forever"
                                img="love.png"
                                :links="[
                                    {href: 'https://love.zehaohuang.cn', iconFamily: 'fas', iconName: 'link'}
                                ]"
                    ></experience>
                    <experience company="Aerial Photos & Videos"
                                title="Drone Enthusiast"
                                :content="[
                                    'My YouTube channel where I put productions of my drone video clips shot while traveling.'
                                ]"
                                range="01/2017 - Future"
                                img="drone.jpg"
                                :links="[
                                    {href: 'https://www.youtube.com/channel/UCcAYX5tDnNUNfLjgVWeU9cA', iconFamily: 'fab', iconName: 'youtube'}
                                ]"
                    ></experience>
                    <experience company="Competitive Programming"
                                title="Enthusiast"
                                :content="[
                                    'Lover of algorithms and problem solving. Participated NOI, USACO, ACM, IEEEXtreme, etc. Solved Problems on Leetcode, Project Euler, etc.'
                                ]"
                                range="09/2016 - Present"
                                img="code.jpg"
                                :links="[
                                    {href: 'https://github.com/zehao-sean-huang/Algorithms', iconFamily: 'fab', iconName: 'github'}
                                ]"
                    ></experience>
                </div>
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
    import Experience from "../components/Experience";
    export default {
        name: 'others',
        components: {
            Experience
        },
        beforeCreate() {
            document.body.className = 'others';
        }
    }
</script>
