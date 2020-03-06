<template>
  <div id="registration-block">
    <form id="registrationForm" onsubmit="AddEmployee()">
      <div class="formblock">
        <h2 align="center">Registration Form</h2>

        <div class="field">
          <label>First Name</label>
        </div>
        <div class="fieldvalue">
          <input type="textfield" v-model="EmployeeData.firstname" name="FirstName" required />
        </div>
        <div class="field">
          <label>Last Name</label>
        </div>
        <div class="fieldvalue">
          <input type="textfield" v-model="EmployeeData.lastname" name="LastName" required />
        </div>
        <div class="field">
          <label>Date Of Birth</label>
        </div>
        <div class="fieldvalue">
          <input type="date" name="Dob" v-model="EmployeeData.dob" required />
        </div>
        <div class="field">
          <label>Email Id</label>
        </div>
        <div class="fieldvalue">
          <input type="textfield" name="Email" v-model="EmployeeData.email" required />
          <span>{{validateEmail()}}</span>
        </div>
        <div class="field">
          <label>Password</label>
        </div>
        <div class="fieldvalue">
          <input type="password" name="Password" v-model="EmployeeData.password" required />
        </div>

        <div class="field">
          <label>Gender</label>
        </div>
        <div class="fieldvalue">
          <input type="radio" name="gender" v-model="EmployeeData.gender" value="male" />Male
          <input type="radio" name="gender" v-model="EmployeeData.gender" value="female" />Female
        </div>
        <div class="field">
          <label>Hobbies</label>
        </div>
        <div class="fieldvalue">
          <input
            type="checkbox"
            v-model="EmployeeData.hobbies"
            name="hobbies"
            value="Playing Cricket"
          />Playing Cricket
          <br />
          <input
            type="checkbox"
            v-model="EmployeeData.hobbies"
            name="hobbies"
            value="Watching Movies"
          />Watching Movies
          <br />
          <input type="checkbox" v-model="EmployeeData.hobbies" name="hobbies" value="Painting" />Painting
          <br />
          <input
            type="checkbox"
            v-model="EmployeeData.hobbies"
            name="hobbies"
            value="Listening to music"
          />Listening to music
          <br />
          <input
            type="checkbox"
            v-model="EmployeeData.hobbies"
            name="hobbies"
            value="Writing Stories"
          />Writing Stories
          <br />
        </div>
        <div class="field">
          <label>Country</label>
          <div class="fieldvalue">
            <select
              id="country"
              :change="showstates()"
              v-model="EmployeeData.country"
              name="country"
            >
              <option v-for="c in countries" v-bind:key="c.id">{{c.country}}</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>State</label>
          <div class="fieldvalue">
            <select id="state" v-model="EmployeeData.state" name="state">
              <option v-for="s in states" v-bind:key="s">{{s}}</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>Address</label>
          <div class="fieldvalue">
            <textarea name="address" v-model="EmployeeData.address"></textarea>
          </div>
        </div>
      </div>
    </form>
           <button @click="saveEmployee()">Add</button>
    <button @click="reset()">Reset</button> 
  </div>
</template>
<script>
import { Countries } from "../constants/countries.js";
export default {
  name: "RegistrationForm",
  //   props: {
  //     firstname: { type: String, default: "" },
  //     lastname: String,
  //     dob: Date,
  //     gender: String,
  //     hobbies: Array,
  //     email: String,
  //     password: String,
  //     country: String,
  //     state: String,
  //     address: String,
  //     warning: String,
  //     countries: Array,
  //     states: Array
  //   },
  computed: {
    EmployeeData() {
      return this.$store.state.EmployeeData;
    }
  },
  data() {
    return {
      countries: Countries,
      states: [],
      warning: ""
    };
  },
  methods: {
    validateEmail() {
      var mail = this.EmployeeData.email;
      if (!mail.endsWith("@gmail.com")) return "Invalid Email";
      return "";
    },
    showstates() {
      var con = this.countries.find(
        element => element.country == this.EmployeeData.country
      );
      if (con) this.states = con.states;
    },
      saveEmployee(){
           if(this.isValidEmployee()){
            alert('Employee Added Successfully')
            this.$store.dispatch('addEmployee');
            }
            else 
            alert('Invalid Employee Details')
    },
      reset(){
          this.$store.dispatch('reset');
    },
    isValidEmployee(){
        let employee=this.$store.state.EmployeeData;
        for(let field in employee)
        if(!employee[field])
        return false; 
        return true
        

    }
  }
};
</script>