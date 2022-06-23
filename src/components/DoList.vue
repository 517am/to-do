<script>
import Favorites from "./Favorites.vue";
import Tasks from "./Tasks.vue";

export default {
  data() {
    return {
      userTask: "",
    };
  },

  props:{
    tasks: {
      type: Array
    }
  },

  components: {
    Favorites,
    Tasks,
  },
  methods: {
    createTask() {
      const newTask = {
        id: Date.now(),
        textTask: this.userTask
      }
      this.tasks.push(newTask);
    },
  },
};
</script>

<template>
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

      <Tasks :tasks="tasks"></Tasks>
    </div>

    <Favorites></Favorites>
  </div>
</template>

<style scoped>
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

.favoritTask {
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
