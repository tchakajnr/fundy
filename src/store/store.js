import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store = new Vuex.Store({
    state:{
        students:[],
        student:[],
        time:'',
        isMember:false,
        payment:0,
        interval:1000

        
    },
    actions:{
        loadDetails({commit}){
            fetch('https://fundapi.herokuapp.com/v1/payments/')
                  .then(response=>{
                    return response.json();
                    /* eslint-disable */
                  })
                  .then(data=> {
                    const studentsRecieved =[];
                    for(let key in data){
                      studentsRecieved.push(data[key]);
                    }
                    // this.students = studentsRecieved;
                    console.log("Heloo");
                    
                    let students=[];
                    students = studentsRecieved;
                    commit('SET_STUDENTS',students);
                    
                
                  }); 
        },

    },
    mutations:{
        SET_STUDENTS(state,students){
            state.students = students
        }

    }
});