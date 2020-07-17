<template>
  <header class="navbar">
    <div class="content-wrapper">
      <div class="logo">
        <div class="nav-title">phillip logan</div>
        <div class="nav-subtitle">something</div>
      </div>
      <div class="navs">
        <div class="nav-btn">projects</div>
        <div class="nav-btn">work</div>
        <div class="nav-btn">about</div>
        <!-- <div class="nav-btn">jello pudding</div> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  padding: 1rem 0;
  max-width: 630px;
  margin: 0 auto;
}

.navs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-btn {
  height: 80%;
  margin-left: 1.5rem;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .nav-btn {
    margin-left: unset;
  }
}
.nav-btn:last-of-type {
  background-color: black;
  border-radius: 5px;
  color: white;
  padding: 1em;
}
.nav-title {
  display: block;
  font-weight: 300;
  font-size: 1.2rem;
  color: #35495e;
  letter-spacing: 1px;
}

.nav-subtitle {
  font-weight: 300;
  font-size: 0.9rem;
  color: #526488;
  word-spacing: 5px;
  /* padding-bottom: 15px; */
}
.content-wrapper {
  margin: 0 auto;
  /* max-width: 90vw; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media only screen and (max-width: 600px) {
  .content-wrapper {
    display: block;
  }
}
</style>