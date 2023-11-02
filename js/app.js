const { createApp } = Vue;

console.log(axios)

createApp({
  data() {
    return {
      count: 0
    }
  }, methods: {
    getRandomEmail(){
      for(i = 0; i < 10; i++){
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          console.log(res.data.response)

          
        })
      }
    }
  }, created() {
    this.getRandomEmail()
  }, mounted() {
    console.log('VUE OK')
  }
}).mount('#app')