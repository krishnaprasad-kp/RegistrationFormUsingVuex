import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
    EmployeeList: [],
    EmployeeData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        country: "",
        state: "",
        hobbies: [],
        address: ""
    },
    name:"Beach"
},
getters:{
    fullName:state=>{
        return state.EmployeeData.firstname+" "+state.EmployeeData.lastname
    }
},
mutations:{
    addEmployee:state=>{
        state.EmployeeList.push({...state.EmployeeData});
    },
    reset:state=>{
        state.EmployeeData.firstname= "",
        state.EmployeeData.lastname= "",
        state.EmployeeData.dob= "",
        state.EmployeeData.gender= "",
        state.EmployeeData.hobbies= [],
        state.EmployeeData.email= "",
        state.EmployeeData.password= "",
        state.EmployeeData.country= "",
        state.EmployeeData.state= "",
        state.EmployeeData.address= "",
        state.EmployeeData.warning= ""
    }
},
actions:{
    addEmployee:context=>{
        context.commit('addEmployee')
        context.commit('reset')
    },
    reset:context=>{
        context.commit('reset')
    }
}
});
