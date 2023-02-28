<template>
  <table>
    <thead>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Acción</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listTask" :key="index" :class="index % 2 == 0 ? 'fila-par':''">
        <td :class="!item.status ? 'completada':''">{{item.name}}</td>
        <td :class="!item.status ? 'completada':''">{{item.description}}</td>
        <td>
          <button v-if="item.status" @click="complete(item)">✅</button>
          <button @click="deleteTask(item._id)">❌</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapState, mapActions} from 'pinia';
import {useTaskStore} from '../stores/taskStore'

export default defineComponent({
  setup() {
    
  },
  methods:{
    ...mapActions(useTaskStore, ['getAllTask','deleteTask','updateTask']),
    complete(task:any){
      task.status = false;
      this.updateTask(task);
    }
  },
  computed:{
    ...mapState(useTaskStore, ['listTask']),
  },
  mounted(){

    this.getAllTask();
  }
})
</script>

<style>
table{
  width: 90%;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  border: 0.5px solid;
  border-color: gray;
  border-spacing: 0;
}
thead{
  background: #04AA6D;
  height: 50px;
  color: #fff;
}
th{
  padding: 0;
}
tr{
  margin-top: 10px;
}
td{
  padding:10px;
}
.fila-par{
  background: #E7E9EB;

}
button{
  border-color: transparent;
  margin-right: 5px;
}
.completada{
  text-decoration: line-through;
}
</style>