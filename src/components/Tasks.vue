<script>
export default {
  props:{
    tasks: {
      type: Array,
      requared:true
    }
  }
};
</script>

<template>
  <div class="tasks">
    <ul v-for="task in tasks">
      <li>
        <p>{{task.textTask}}</p>
        <div class="btnsActions">
          <i>aS</i>
          <i>cs</i>
        </div>
      </li>
    </ul>
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

ul li p,
ul li div {
  margin: 0 10px;
}
</style>
