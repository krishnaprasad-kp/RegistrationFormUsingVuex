<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <div>
      <ul class="nav-container">
        <li><router-link :to="{name:'RegisterEmployee'}">Register</router-link>  </li> 
        <li><router-link :to="{name:'ShowEmployees'}" >Employee Details</router-link></li>
      </ul>
    </div>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
               this.$store.dispatch('initializeEmployeeList')
        
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#registration-block {
  padding-left: 10%;
  width:50%;
  /* height:600px; */
}

#preview-block {
  width:50%;
  padding-left: 10%;
  /* height:600px; */
}
.field {
  font-weight: bold;
}
.nav-container {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.nav-container li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color:cornflowerblue;
}
#app{
  height: 100%;
  background-color: bisque;
  padding: 0px;
}
.employee-table{
  width:100%;
  margin-top:30px;
}
.employee-table,.employee-table th,.employee-table td{
  border: 1px solid ;
  border-collapse: collapse;
}




</style>
