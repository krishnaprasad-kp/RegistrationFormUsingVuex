<template>
<div id="Employees">
    <table class="employee-table">
        <tr><th>Name</th><th>D.O.B</th><th>Email Id</th><th>Gender</th><th>Hobbies</th><th>Country</th><th>State</th><th>Address</th></tr>
        <tr v-for="employee in EmployeeList" v-bind:key="employee.firstname+employee.lastname"><td>{{employee.firstname}} {{employee.lastname}}</td><td>{{employee.dob}}</td><td>{{employee.email}}</td><td>{{employee.gender}}</td><td>{{employee.hobbies}}</td><td>{{employee.country}}</td><td>{{employee.state}}</td><td>{{employee.address}}</td></tr>
    </table>
</div>
</template>
<script>
export default {
    name:"ShowEmployees",
    computed:{
        EmployeeList(){
            return this.$store.state.EmployeeList
        }
    },
    //  created(){
    //         console.log('hello')
    //         this.$store.dispatch('initializeEmployeeList')
    //     }
}
</script>
<style scoped>
</style>