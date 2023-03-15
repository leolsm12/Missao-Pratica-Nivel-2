<template>

  <div class="row">
    <ul class="list-unstyled">
      <div class="row"> 
      <li v-for="user in users" :key="user.id" class="col-md-4 mb-3">
        <div class="card p-2">
            <img :src="user.avatar" class="card-img-top" alt="Foto de {{ user.first_name }}">
            <div class="card-body">
              <h5 class="card-title">{{user.first_name }} {{user.last_name }}</h5>
              <p class="card-text">{{ user.email }}</p>
            </div>
        </div>
      </li>
    </div>
    </ul>
  </div>
</template>
<script>


export default{
    data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch('https://reqres.in/api/users?per_page=10')
    .then(response => response.json())
    .then(data =>{
    this.users = data.data.map(users => users);
    console.log(this.users)
    


})
}
  }


  

</script>
<style scoped>
</style>
