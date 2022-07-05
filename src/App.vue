<script>
export default{

}
</script>

<template>
<div class="wrapper">

<router-view></router-view>

</div>


</template>
<style>
a {
  color: #ffffff;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

body {
  background-color: #000000;
  color: #ffffff;
}

.wrapper {
  width: 100%;
}

.container {
  width: 1100px;
  margin: 0 auto;
  background-color: #333e48;
}

header {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  color: #a90000;
}

.main {
  display: flex;
}

h1 {
  color: #fff;
}

.newTask {
  flex: 2;
  margin: 20px;
}

.newTask h1 {
  margin: 0 0 20px 0;
}

.favoriteTask {
  flex: 1;
}

.textTask {
  width: 100%;
  max-width: 500px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: 0;
  text-indent: 10px;
  outline: none;
}


</style>
