<script>
export default {
  props: {
    tasks: {
      type: Array,
      taskFavorit: true,
      requared: true,
    },
  },
};
</script>

<template>
  <div class="tasks">
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
</style>
