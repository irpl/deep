<template>
  <main>
    <section class="container">
      <div class="deep">
        <h1>Projects</h1>
        <span>Stuff I made and stuff I helped make</span>
      </div>
      
      <div v-for="(project, index) in projects" :key=index>
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title">{{project.title}}</span>
            <!-- <span class="doop-duration">{{project.acf.duration}}</span> -->
          </div>
          <span>{{project.link}}</span>
          <p>{{project.description}}</p>
        </div>
      </div>
      <!-- <div class="img-container">
        <img src="@/assets/projects.jpg" alt="" >
      </div> -->
    </section>
  </main>
</template>
<script>
export default {
  props: ['projects'],
};
</script>
<style scoped>
/* .img-container {
  display: flex;
}
img {
  width: 50%;
  margin: 0 auto;  
  margin-top: 60px;
  opacity: .25;
} */
</style>