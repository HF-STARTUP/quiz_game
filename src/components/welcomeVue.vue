<template>
   <div class="body">
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-80 text-center">

         <h1 class="text-white text-3xl font-bold mb-4 text-center">Bienvenue sur ASR QUIZ</h1>
         <h2 class="text-white text-2xl font-semibold mb-4">Entrez votre pseudo</h2>

         <input type="text" placeholder="Nom d'utilisateur" required v-model="playerName"
            class="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4">
         <button to="/categorie"            
            @click.prevent="saveUser()"
            className="w-full block text-center bg-gradient-to-l from-purple-400 to-purple-600 via-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded-lg transition duration-300">
            Commençons 😀😀
      </button>
      </div>
   </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'welcomeVue',

  data() {
    return {
      router: useRouter(),
      playerName:'',
    };
  },

  methods: {
    checkSession() {
      if (localStorage.getItem('playerName')) {
        this.$router.push('/categorie');
      }
    },

    saveUser(uName)
    {
      uName = this.playerName.trim()
      if(uName !== "")
    {
      localStorage.setItem('playerName',uName);
      this.router.push('/categorie');
    }else{
      alert('renseignez votre pseudo');
    }
    }
  },

  mounted() {
    this.checkSession();
  }
};
</script>


<style></style>