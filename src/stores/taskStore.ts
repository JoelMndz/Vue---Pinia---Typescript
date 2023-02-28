import { defineStore } from 'pinia';
import Axios from 'axios';
const API = 'http://localhost:5000/api/task';

interface ITask{
  _id?: string,
  name: string,
  description: string,
  status?: boolean
}

interface IState{
  taskCurrent: ITask,
  listTask: ITask[]
}

export const useTaskStore = defineStore('taskStore', {
  state: ():IState=>{
    return{
      taskCurrent:{
        name:'',
        description:''
      },
      listTask: []
    }
  },
  actions:{
    async addTask(task:ITask){
      try {
        const {name, description} = task;
        const data = await Axios({
          url:API,
          method:'POST',
          data:{
            name,
            description
          }
        });
        if(data.status == 200){
          this.listTask.push(data.data);
          this.taskCurrent = {
            name:'',
            description:''
          }
        }
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAllTask(){
      try {
        const data = await Axios({
          url:API,
          method:'GET'
        })
        
        this.listTask = data.data;
      } catch (error) {
        console.log(error);
        
      }
    },

    async deleteTask(id:string){
      try {
        const data = await Axios({
          url:`${API}/${id}`,
          method:'DELETE'
        })
        this.listTask = this.listTask.filter(x => x._id !== id);
      } catch (error) {
        console.log(error);
        
      }
    },

    async updateTask(task:ITask){
      try {
        const {_id, name, description, status} = task;
        const data = await Axios({
          url:`${API}/${_id}`,
          method:'PATCH',
          data:{
            name,
            description, 
            status
          }
        });
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },
  }

})