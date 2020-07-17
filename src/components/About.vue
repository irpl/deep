<template>
  <main>
    <section class="container">
      <div class="deep">
        <h1>tl;dr</h1>
        <span>I like to build things; I'm a maker and teacher.</span>
      </div>
      <div class="doop">
        <h2>Ok, here we go</h2>
        <p>From as far back as I can remember, I was the child who was more eager to find that green circuit board in my remote controlled cars than race them. I always knew I would find a home in the industry of Coding and Electronics.</p>
        <p>Being born and raised in Kingston, Jamaica, I found it difficult to access information about it and it was rare to encounter peers interested in the trade. There was a lack of emphasis on the importance of technology development.</p>
        <p>To change this and enhance my passion, I graduated from the University of the West Indies with a degree in Computer Systems Engineering, where I made my future in computing and electronics concrete. And the more I learned, the more I wanted to share and help others blossom their curiosity into a potential career.</p>
        <p>I enjoy tutoring in my spare time and I also teach introductory web development and electronics professionally on a tertiary level at my alma-mater.</p>
        <p>Being an educator in a field that is continuously evolving, ensuring I keep myself current is imperative to be successful. Having this professional background complements my love for learning, and enables me to enrich most of my self taught knowledge with that of other seasoned developers/makers (or whatever you call yourselves) as well.</p>
        <!-- <p>It encapsulates so many areas of expertise because the processes are so meticulous, like how I can recall and apply the significance of waves from St. George’s College’s Physics Class 10 years ago in JavaScript today.</p>  -->
        <p>This is one of the things I gravitate towards the most - how we can involve technology in the things we think about the least.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
/* html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: calc(15px + 0.25vw);
  --newspaper: #f2f0f4;
  background-color: var(--newspaper);
} */

main {
  /* padding: 60px 0; */
  margin: 0 auto;
}
.container {
  /* display: grid; */
  /* grid-template-columns: repeat(12, 1fr); */
  grid-gap: 1.5rem;
  max-width: 630px;

  margin: 0 auto;
  /* width: 50%; */
  /* max-width: 90vw; */
  /* margin: 0 auto; */
  /* min-height: 100vh; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 768px) {
  .container {
    display: block;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {...}  */
h1 {
  font-size: 35px;
}
h1,
h2 {
  margin-top: 0;
  line-height: 1.3;
  font-weight: 400;
  /* line-height: 1.3; */
  margin-bottom: 0.5em;
}
p {
  margin-bottom: 1.5em;
}
img {
  width: 100%;
}
.links {
  padding-top: 15px;
}
.deep {
  padding: 20px 0;
  margin-bottom: 30px;
  /* max-width: 630px; */
}
.doop {
  background-color: white;
  margin: 0 auto 40px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(25, 17, 34, 0.1);
}
</style>
