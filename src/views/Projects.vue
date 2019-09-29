<template>
    <main role="main">
        <div class="projects">
            <div class="container">
                <div class="row">
                    <experience :company = "'Geziwen Chengdu Daily'"
                                :title = "'Co-Founder'"
                                :content = "[
                                    '- Startup in China w/ 4000+ WeChat followers helping 500+ students studying abroad find tutors/advisors.',
                                    '- Led a team of 4 to deliver a web app and a mobile app (ongoing). See https://github.com/geziwen.',
                                    '- Made approximately 0.5 million revenue; received a few buyout offers.'
                                ]"
                                :range = "'01/2017 - Present'"
                                :img = "'geziwen.jpg'"
                                :links = "[
                                    {href: 'https://geziwen.com', iconFamily: 'fas', iconName: 'link'},
                                    {href: 'https://github.com/geziwen', iconFamily: 'fab', iconName: 'github'}
                                ]"
                    ></experience>
                    <experience :company = "'UC Berkeley ICSI'"
                                :title = "'Researcher'"
                                :content = "[
                                    '- Studied tools and algorithms for scraping, analyzing, and visualizing network and graph data.',
                                    '- Implemented a web crawler \& collected a network of ~1M user profiles from a Chinese app like Spotify.'
                                ]"
                                :range = "'03/2017 - 08/2017'"
                                :img = "'icsi.png'"
                                :links = "[
                                    {href: 'http://icsi.berkeley.edu', iconFamily: 'fas', iconName: 'link'},
                                ]"
                    ></experience>
                    <experience :company = "'Siping Soft.'"
                                :title = "'Software Engineering Intern'"
                                :content = "[
                                    '- Studied full stack development using the LAMP server stack.',
                                    '- Implemented an authentication module with privileges support in 2 weeks.'
                                ]"
                                :range = "'01/2017 - 02/2017'"
                                :img = "'siping.png'"
                                :links = "[
                                    {href: 'https://sipingsoft.com', iconFamily: 'fas', iconName: 'link'},
                                ]"
                    ></experience>
                </div>
            </div>
        </div>
        <router-link class="carousel-control-prev position-fixed" to="/experiences" role="button"
                     data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="font-size: 50px;"></span>
            <span class="sr-only">Previous</span>
        </router-link>
        <router-link class="carousel-control-next position-fixed" to="/others" role="button"
                     data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            <span class="carousel-control-next-icon" aria-hidden="true" style="font-size: 50px;"></span>
            <span class="sr-only">Next</span>
        </router-link>
    </main>
</template>

<script>
    import Experience from "../components/Experience";
    export default {
        name: 'projects',
        beforeCreate() {
            document.body.className = "projects";
        },
        components: {
            Experience
        }
    }
</script>
