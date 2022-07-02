<script>
import Favorites from "./components/Favorites.vue";
import Tasks from "./components/Tasks.vue";

export default {
  data() {
    return {
      tasks: [],

      userTask: "",
    };
  },
  components: {
    Favorites,
    Tasks,
  },
  methods: {
    removeTask(task) {
      this.tasks = this.tasks.filter((p) => p.id !== task.id);
    },
    createTask() {
      const newTask = {
        id: Date.now(),
        textTask: this.userTask,
        taskFavorit: false,
      };
      this.tasks.push(newTask);
      this.userTask = "";
    },

    addFavorit(task) {
      task.taskFavorit = true;
    },
  },
};
</script>

<template>
  <div class="wraper">
    <div class="container">
      <header>
        <span
          >Для сохранения данных войдите<br />
          или зарегиструйтесь</span
        >

        <h1 class="logo">TO-DO</h1>
        <div class="login">
          <a href="" class="log">Войти</a>/
          <a href="" class="log">Зарегистрироваться</a>
        </div>
      </header>

      <div class="main">
        <div class="newTask">
          <div class="addTask">
            <h1>Добавьте новую задачу</h1>
            <form @submit.prevent>
              <input
                class="textTask"
                type="text"
                placeholder="Может быть, выключить утюг?"
                v-model="userTask"
              />
              <button @click="createTask">asd</button>
            </form>
          </div>
          <Tasks
            :tasks="tasks"
            @remove="removeTask"
            @addFav="addFavorit"
          ></Tasks>
        </div>
        <favorites :tasks="tasks"></favorites>
      </div>
    </div>
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

form button {
  height: 37px;
  width: 100px;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: #a90000;
  color: #fff;
  border-radius: 0 20px 20px 0;
}
</style>
