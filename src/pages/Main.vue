<script>
import Favorites from "../components/Favorites.vue";
import Tasks from "../components/Tasks.vue";

export default {
  data() {
    return {
      tasks: [],
      nonTextTask: false,
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
      if (this.userTask == "") {
        this.nonTextTask = true;
      } else if(this.tasks !== 0){
         this.tasks.push(newTask);
         this.nonTextTask = false;
      }
      this.userTask = "";
    },

    addFavorit(task) {
      if(task.taskFavorit == false){
        task.taskFavorit = true;
      } else {
        task.taskFavorit = false;
      }
    },
  },
};
</script>

<template>  
  <div>
    <div class="container">
      <header>
        <span
          >Для сохранения данных войдите<br />
          или зарегиструйтесь</span
        >

        <h1 class="logo">TO-DO</h1>
        <div class="login">
          <a href="" class="log">Войти</a>/
        <router-link to ="/reg"><a href="" class="log">Зарегистрироваться</a></router-link>
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
            :nonTextTask ="nonTextTask"
            @remove="removeTask"
            @addFav="addFavorit"
          ></Tasks>
        </div>
        <favorites :tasks="tasks"></favorites>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
