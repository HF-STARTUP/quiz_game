<template>
    <div class="body py-10">
        <div
            class="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg lg:w-200 sm:w-full text-center overflow-auto max-h-screen">
            <h1 class="text-purple-950 text-3xl font-bold mb-4 "><span class="player-name">Salut {{ playerName }}
                </span><span class="hi-emogi text-5xl">👋</span>
            </h1>
            <h2 class="text-white text-2xl font-semibold mb-4">Qu'est ce qu'on fait aujourd'hui ?</h2>
            <div class="grid grid-cols-2 gap-3">
                <button v-for="subject in subjects" :key="subject.code" @click.prevent="setSubject(subject.code)"
                    class="bg-purple-600 hover:bg-purple-700 text-white font -bold py-2 p-2 rounded-lg transition duration-300">
                    {{ subject.code }} <br>
                    <span class="text-xs">{{ subject.title }}</span>
                    <div class="h-skills backdrop-blur-2xl bg-amber-100/20 rounded-full py-1 flex font-sans w-full sm:justify-center md:justify-center space-x-2  justify-between">
                        <div class="h-score text-xs bg-amber-600 w-fit p-1 rounded-sm">
                            20000
                        </div>
                        <div class="h-score text-xs bg-green-600 w-fit p-1 rounded-sm">
                            15/20
                        </div>
                    </div>

                </button>
            </div>

            <button @click.prevent="playRandom()"
                class="w-full block mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Aleatoire
            </button>
        </div>
    </div>
</template>

<script>
import { questionsStore } from '@/stores/questionsStore';
import { useAppStore } from '@/stores/store';

export default {
    name: 'quizCategoriesVue',
    data() {
        return {
            playerName: localStorage.getItem('playerName'),
            subjects: useAppStore().subjects,
            questions: [],
            selectedSubject: sessionStorage.getItem('subject'),
            useQuestionsStore: questionsStore(),
        };
    },

    methods: {
        setSubject(code) {
            sessionStorage.setItem('subject', code);
            this.getQuestions(code);
            this.takeRandQuestions();
            this.$router.push('/commencer')
        },

        playRandom() {
            const x = this.subjects.length;
            const randSub = Math.floor(Math.random() * x);
            sessionStorage.setItem('subject', this.subjects[randSub].code);
            this.$router.push('/commencer');
        },

        getQuestions(code) {
            const category = this.useQuestionsStore.questions.find(cat => cat.categorie === code);
            if (category) {
                this.questions = category.questions;
            } else {
                console.log("Aucune question trouvée pour cette catégorie.");
                this.questions = [];
            }
        },

        takeRandQuestions() {
            if (this.questions.length > 0) {
                this.shuffleArray();
                let selectedQuestions = [];

                for (let i = 0; i < 10; i++) {
                    selectedQuestions.push(this.questions[i]);
                }

                sessionStorage.setItem('questions', JSON.stringify(selectedQuestions));

            }
            return null;
        },

        shuffleArray() {
            for (let i = this.questions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
            }
        },

        removeSpaces(chaine) {
            return chaine.replace(/\s+/g, '');
        },
    },

    watch: {
        selectedSubject(newVal) {
            this.getQuestions(newVal);
        }
    }
};
</script>

<style scoped>
.hi-emogi {
    display: inline-block;
    animation: wave .2s infinite ease-in-out;
}

@keyframes wave {

    0%,
    100% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(20deg);
    }
}

.player-name {
    display: inline-block;
    animation: grow 2s infinite ease-in-out;
    transition: all 2S ease-in-out;
}

@keyframes grow {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>
