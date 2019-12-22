<template>
  <main role="main">
    <div class="experiences">
      <div class="container">
        <div class="row">
          <experience :company = "'Stripe Inc'"
                      :title = "'Incoming Software Engineering Intern'"
                      :content = "[
                        'Team assignment unknown until 2020',
                      ]"
                      :range = "'05/2020 - 08/2020'"
                      :img = "'stripe.png'"
                      :links="[{href: 'https://stripe.com', iconFamily: 'fas', iconName: 'link'}]"
          />
          <experience :company = "'Funnel Foods'"
                      :title = "'Mobile Development Lead'"
                      :content = "[
                        '- Berkeley startup using machine learning to suggest recipes based on users\' shopping patterns. (Mentors\' Choice in the IANext100 2019 Hackathon)',
                        '- Led a team of 3 on a cross-platform mobile app and a landing page for seeking VC funds.',
                      ]"
                      :range = "'01/2019 - Present'"
                      :img = "'funnel.png'"
                      :links = "[
                        {href: 'https://funnelfoods.com', iconFamily: 'fas', iconName: 'link'},
                        {href: 'https://github.com/FunnelFoods', iconFamily: 'fab', iconName: 'github'}
                      ]"
          />

          <experience :company = "'UC Berkeley CoE'"
                      :title = "'Contract System Administrator'"
                      :content = "[
                        '- Containerized 30+ web applications in 10+ different web techs, reducing hardware cost by more than 50\%.',
                        '- Automated lab programming environment setup with standard system scripts for 30+ lab members.'
                      ]"
                      :range = "'01/2019 - Present'"
                      :img = "'coe.jpg'"
                      :links = "[
                        {href: 'https://autolab.berkeley.edu', iconFamily: 'fas', iconName: 'link'},
                        {href: 'https://github.com/berkeleyautomation', iconFamily: 'fab', iconName: 'github'}
                      ]"
          />
        </div>
      </div>
    </div>
    <router-link class="carousel-control-prev position-fixed" to="/#" role="button"
                 data-toggle="tooltip" data-placement="right" title="Tooltip on right">
      <span class="carousel-control-prev-icon" aria-hidden="true" style="font-size: 50px;"></span>
      <span class="sr-only">Previous</span>
    </router-link>
    <router-link class="carousel-control-next position-fixed" to="/research" role="button"
                 data-toggle="tooltip" data-placement="right" title="Tooltip on right">
      <span class="carousel-control-next-icon" aria-hidden="true" style="font-size: 50px;"></span>
      <span class="sr-only">Next</span>
    </router-link>
  </main>
</template>


<script>
  import Experience from '@/components/Experience.vue';
  export default {
    name: 'experiences',
    components: {
      Experience
    },
    beforeCreate() {
      document.body.className = "experiences";
    }
  }
</script>
