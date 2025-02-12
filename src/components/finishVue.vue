<template>
    <div class="body w-full">
        <div className="bg-green-600/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-80 text-center">

            <h1 class="text-white text-3xl font-bold mb-4 text-center">Terminer !!</h1>
            <div
                class="score text-3xl text-purple-950 flex flex-row space-x-20 items-center justify-center font-bold px-4">
                <div class="text">
                    SCORE:
                </div>
                <div class="value">
                    {{ score }}
                </div>
            </div>
            <div class="flex space-x-2 flex-col w-full">
                <button
                @click.prevent="reloadGame()"
                    className="w-full text-center bg-gradient-to-l from-green-400 to-green-600 via-green-400 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded-lg transition duration-300">
                    Recommencer 🔄
            </button>
                <router-link to="/categorie"
                    className="w-full cursor-crosshair  text-center bg-gradient-to-l from-purple-400 to-purple-600 via-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded-lg transition duration-300">
                    Nouveau Jeu ➕
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'finishVue',

    props: {
        score: {
            type: Number,
            default: 0
        },
    },

    methods: {
        reloadGame()
        {
         window.location.reload();
        }
    },

    mounted() {

    }
};
</script>


<style></style>