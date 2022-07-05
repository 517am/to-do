<script>
export default {
  props: {
    tasks: {
      type: Array,
      taskFavorit: true,
      requared: true,
    },
    nonTextTask: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <div class="tasks">
  
      <transition-group name="task_list">

    <ul 
      v-if="tasks.length > 0"
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    >
      
        <li>
          <p>{{ task.textTask }}</p>
          <div class="btnsActions">
            <button @click="$emit('addFav', task)">f</button>
            <button @click="$emit('remove', task)">x</button>
          </div>
        </li>

    </ul>
    

    <h3 v-else>Задачи отстуствуют</h3>
    <h3 style="color: red; transform:none; opacity: 1; transition: none;" v-if="nonTextTask == true">Что нужно сделать?</h3>
  
        </transition-group>

  </div>
</template>

<style scoped>
ul li {
  width: 100%;
  max-width: 600px;
  background-color: #f5f5f5;
  border-radius: 20px;
  height: 30px;
  margin: 20px 0;
  color: #333e48;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

i {
  margin: 0 10px;
}

i:hover {
  font-size: large;
}

ul li p,
ul li div {
  margin: 0 10px;
}

/* animation */

.task_list-item {
  display: inline-block;
  margin-right: 10px;
}
.task_list-enter-active,
.task_list-leave-active {
  transition: all 0.4s ease;
}
.task_list-enter-from,
.task_list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
