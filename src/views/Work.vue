<template>
  <main>
    <section class="container">
      <div class="deep">
        <h1>Work</h1>
        <span>Where I've worked</span>
      </div>

      <div v-for="(work, index) in works" :key=index>
        <div class="doop">
          <div class="doop-top">
            <span class="doop-title">{{work.position}}</span>
            <span class="doop-duration">{{work.duration}}</span>
          </div>
          <span>{{work.where}}</span>
          <p>{{work.description}}</p>
        </div>
      </div>      
    </section>
  </main>
</template>

<script>
export default {
  props: ['works']
};
</script>