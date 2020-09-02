<template>
  <div id="app">
    <Navbar />
    <router-view :works="works" :projects="projects" :about="about"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import axios from 'axios'

export default {
  name: "App",
  components: {
    Navbar
  },
  data: function () {
    return {
      works: [],
      projects: [],
      about: null
    }
  },
  created() {
    const w = axios("/works");
    const p = axios("/projects");
    const a = axios("/about")

    Promise.all([w, p, a])
      .then(values => {
        this.works = values[0].data;
        this.projects = values[1].data;
        this.about = values[2].data;
      })
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

html {
  /* font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", */
  /* Roboto, "Helvetica Neue", Arial, sans-serif; */
  /* font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif; */
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  line-height: 1.5;
  font-weight: 400;
  background-color: #f2f0f4;
  padding: 0 1em;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
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
/* img {
  width: 100%;
} */
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
  box-shadow: 0 5px 10px rgba(25, 17, 34, 0.1);
}
a {
  text-decoration: none;
  color: black;
}
.doop-title {
  margin-top: 0;
  line-height: 1.3;
  font-weight: 400;
  margin-bottom: 0.5em;
  font-size: 1.5em;
}
.doop-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
