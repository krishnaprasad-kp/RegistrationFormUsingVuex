<template>
       <div id="preview-block">
      <form  onsubmit="AddEmployee()">
        <div class="formblock">
          <h2 align="center">Preview</h2>
        
          <div class="field">
            <label>Name : </label>
            <label>{{fullname}}</label>
          </div>
          <div class="field">
            <label>Date Of Birth : </label>
            <label>{{EmployeeData.dob}}</label>
          </div>
          <div class="field">
            <label>Email Id : </label>
            <label>{{EmployeeData.email}}</label>
          </div>
          <div class="field">
            <label>Password : </label>
            <label>********</label>
          </div>

          <div class="field">
            <label>Gender : </label>
            <label>{{EmployeeData.gender}}</label>
          </div>
          <div class="field">
            <label>Hobbies : </label>
            <div>
            <ul>
              <li v-for="hobby in EmployeeData.hobbies" v-bind:key=hobby>{{hobby}}</li>
            </ul>
            </div>
          </div>
          <div class="field">
            <label>Country : </label>
              <label>{{EmployeeData.country}}</label>
          </div>
          <div class="field">
            <label>State : </label>
              <label>{{EmployeeData.state}}</label>
          </div>
          <div class="field">
            <label>Address : </label>
            <label>{{EmployeeData.address}}</label>
          </div>
        </div>
      </form>
    </div>
</template>
<script>
export default {
    name:"Preview",
 computed:{
EmployeeData(){
    return this.$store.state.EmployeeData;
},
fullname(){
 return this.$store.getters.fullName;
}
 }
}
</script>
<style scoped>

</style>