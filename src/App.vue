<script setup>
  import DoList from './components/DoList.vue';
</script>

<template>
  <div class="wraper">
    <div class="container">
      <header>
        <span>Для сохранения данных войдите<br> или зарегиструйтесь</span>
        <h1 class="logo">TO-DO</h1>
        <div class="login">
          <a href="" class="log">Войти</a>/
          <a href="" class="log">Зарегистрироваться</a>
        </div>
      </header>

     <do-list></do-list>

    </div>
  </div>
</template>

<style>
  a{
    color: #ffffff;
  }

  ul{
    list-style: none;
    padding-inline-start: 0;
  }

  body{
    background-color: #000000;
    color: #ffffff;
  }

  .wrapper{
    width: 100%;
  }

  .container{
    width: 1100px;
    margin: 0 auto;
    background-color: #333e48;
  }

  header{
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .logo{
    color: #a90000;
  }
</style>
