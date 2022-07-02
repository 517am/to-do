<script>
export default {
  props: {
    tasks: {
      type: Array,
      requared: true,
    },
  },
};
</script>

<template>
  <div class="favoriteTask">
    <h1>Избранные задачи</h1>

    <ul
      v-if="tasks.length > 0"
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    >
      <li v-if="task.taskFavorit == true">
        <p>{{ task.textTask }}</p>
      </li>
    </ul>

    <h3 v-else>Избранных задач нет</h3>
  </div>
</template>

<style scoped>
li {
  color: #333e48;
  background-color: #f5f5f5;
  margin: 20px 20px 20px 0;
  height: 30px;
}
</style>
