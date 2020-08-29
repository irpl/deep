<template>
  <main>
    <section class="container">
      <div class="deep">
        <h1>tl;dr</h1>
        <span>I like to build things; I'm a maker and teacher.</span>
      </div>
      <div v-if="about[0]" class="doop">
        <h2>{{about[0].title.rendered}}</h2>
        <div v-html="about[0].content.rendered"></div>
        <!-- <p>From as far back as I can remember, I was one who was more interested in finding that green circuit board in my remote controlled cars than race them. I always knew that I would find my place in the industry of coding and electronics.</p> -->
        <!-- <p>Being born and raised in Kingston, Jamaica, it wasn't so easy getting access information about it and it also wasn't so common, happening upon a like minded person. There was always a lack of emphasis put on the importance of technological development.</p>        <p>To change this and enhance my passion, I graduated from the University of the West Indies with a degree in Computer Systems Engineering, where I made my future in computing and electronics concrete. And the more I learned, the more I wanted to share and help others blossom their curiosity into a potential career.</p> -->
        <!-- <p>I enjoy tutoring in my spare time and I also teach introductory web development and electronics professionally on a tertiary level at my alma mater.</p> -->
        <!-- <p>Being an educator in a field that is continuously evolving, ensuring I keep myself current is imperative to be successful. Having this professional background complements my love for learning, and enables me to enrich most of my self taught knowledge with that of other seasoned developers/makers (or whatever you call yourselves) as well.</p> -->
        <!-- dont un comment <p>It encapsulates so many areas of expertise because the processes are so meticulous, like how I can recall and apply the significance of waves from St. George’s College’s Physics Class 10 years ago in JavaScript today.</p>  -->
        <!-- <p>This is one of the things I gravitate towards the most - how we can involve technology in the things we think about the least.</p> -->
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ['about']
};
</script>
