<template>
    <div >
    
        <div class="registration-container">
            <registration-form></registration-form>
            <preview></preview>
          
        </div>
   
        </div>
</template>
<script>
import RegistrationForm from './RegistrationForm.vue'
import Preview from './Preview.vue'
export default {
    name:"RegistrationPage",
    components:{'registration-form':RegistrationForm,
    'preview':Preview},
    methods:{
      
    }
}
</script>
<style scoped>
.registration-container{
    display:flex;
    flex-direction: row;
    flex:50%;
}
</style>