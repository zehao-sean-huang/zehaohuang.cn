<template>
    <main role="main">
        <div class="research">
            <div class="container">
                <div class="row">
                    <experience :company = "'Professor. Dawn Song'"
                                :title = "'Undergraduate Researcher'"
                                :content = "[
                        '- Using NLP to extract structured knowledge graph from more than 70+ security blog posts',
                        '- Building a query system to automatically inspect attack patterns based on knowledge graphs',
                      ]"
                                :range = "'08/2019 - Present'"
                                :img = "'bair.png'"
                                :links = "[
                        {href: 'https://bair.berkeley.edu', iconFamily: 'fas', iconName: 'link'},
                      ]"
                    ></experience>
                    <experience :company = "'Professor. Q.S. Zhang'"
                                :title = "'Undergraduate Researcher'"
                                :content = "[
                        '- Implemented algorithms to compute pixel-wise contributions of images to CV model feature maps.',
                        '- Designed models to correlate pixel-wise information entropy with adversarial robustness.',
                      ]"
                                :range = "'06/2019 - 09/2019'"
                                :img = "'bair.png'"
                                :links="[{href: 'https://uncountable.com', iconFamily: 'fas', iconName: 'link'}]"
                    ></experience>
                </div>
            </div>
        </div>
        <router-link class="carousel-control-prev position-fixed" to="/experiences" role="button"
                     data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="font-size: 50px;"></span>
            <span class="sr-only">Previous</span>
        </router-link>
        <router-link class="carousel-control-next position-fixed" to="/projects" role="button"
                     data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            <span class="carousel-control-next-icon" aria-hidden="true" style="font-size: 50px;"></span>
            <span class="sr-only">Next</span>
        </router-link>
    </main>
</template>


<script>
    import Experience from '@/components/Experience.vue';
    export default {
        name: 'research',
        components: {
            Experience
        },
        beforeCreate() {
            document.body.className = "research";
        }
    }
</script>