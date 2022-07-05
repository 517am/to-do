<script></script>

<template>
  <div class="container">
    <h1 class="logo">TO-DO</h1>

    <h2>Зарегиструйте, чтобы ваши задачи сохранялись</h2>
    <form action="">
      <input type="text" placeholder="Ваше имя" />
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Ваш пароль" />

      <button>Зарегистрироваться</button>
    </form>

   <router-link to ="/"> <a class="toBack">Назад</a></router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}

form {
  padding: 20px;
}

input {
  display: block;
  width: 500px;
  height: 40px;
  margin: 30px 0;
  text-indent: 10px;
}

button {
  background-color: #a90000;
  color: #fff;
  width: 200px;
  height: 30px;
  border: 0;
  transition: 0.4s;
  cursor: pointer;
}

button:hover {
  background-color: #6d0404;
}

.toBack {
  background-color: #a90000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  transition: 0.4s;
  cursor: pointer;

  position: absolute;
  top: 10px;
  left: 10px;
}

.toBack:hover {
  background-color: #6d0404;
}
</style>
