<template>
    <div
        class="w-full h-screen bg-gradient-to-br from-green-600 via-red-950 to-yellow-400 flex flex-col items-center justify-center overflow-auto">
        <div v-if="!isFinished">
            <div class="text-xl absolute z-10 good-emoji" id="emoji-good">👍</div>
            <div class="text-xl absolute z-10 fail-emoji" id="emoji-fail">😩</div>
            <div class="rounded-xl w-50 h-20 bg-white/35 border border-purple-950/50 shadow-lg relative z-20 top-0.5">
                <div class="sub-title">
                    <div class="score">
                        <div class="text text-purple-950 w-full text-center text-md font-bold">
                            NOTE
                            <p class="value text-4xl font-extrabold text-amber-300 shadow-2xl shadow-purple-800">
                                {{ score }}/{{ 2 * currentQuestionIndex + 2 }}
                            </p>
                            <p class="text-amber-600"> 
                                {{ gameTimeFormat }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-purple-400/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg sm:w-100 w-full text-center relative sm:p-4">
                <transition name="fade" mode="out-in">
                    <div :key="currentQuestion.id" class="text-center relative">
                        <h2 class="text-xl font-bold mb-4 text-white">{{ currentQuestion.text }}</h2>
                        <div class="flex flex-col gap-3">
                            <button v-for="(option, index) in currentQuestion.options" :key="index"
                                @click="selectAnswer(option)" :class="[
                                    'py-2 px-4 rounded-lg transition duration-200 border-none shadow-md cursor-pointer',
                                    selectedAnswer === option && !isAnswered ? 'bg-purple-950 text-white shadow-purple-400' :
                                        (isAnswered && currentQuestion.correct === option ? 'bg-green-400/100 good-answer text-white' :
                                            (isAnswered && selectedAnswer === option ? 'bg-red-400/100 text-white' :
                                                'bg-purple-800 text-white hover:bg-gray-300 hover:text-black/200'))
                                ]" :id="'d-' + index" :disabled="isAnswered">
                                {{ option }}
                            </button>
                        </div>
                    </div>
                </transition>

                <div class="flex justify-center mt-6">
                    <button v-if="currentQuestionIndex < questions.length - 1 && isAnswered" @click="nextQuestion"
                        class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                        Suivant
                    </button>
                    <button v-if="currentQuestionIndex === questions.length - 1 && isAnswered" @click="finishQuiz()"
                        class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                        Terminer
                    </button>
                    <button v-if="!isAnswered && selectedAnswer" @click="checkAnswer()"
                        class="px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-700 transition">
                        OK
                    </button>
                </div>
            </div>
        </div>

        <div v-else class="w-full sm:w-80 lg:w-80">
            <finishVue :score="Math.floor((score/gameTime)*100000)" />
        </div>

    </div>
</template>

<script>
import finishVue from './finishVue.vue';
export default {
    name: 'QuestionnaireVue',
    components: {
        finishVue,
    },
    data() {
        return {
            currentQuestionIndex: 0,
            selectedAnswer: null,
            isAnswered: false,
            questions: JSON.parse(sessionStorage.getItem('questions')) || [],
            response: false,
            score: 0,
            isFinished: false,
            gameTime: 0,
            gameTimeFormat: '',
            gameTimeOut:null,
        };
    },

    mounted() {
        this.shuffleArray(this.questions);
        this.questions.forEach(element => {
            this.shuffleArray(element.options);
        });
        this.countTime;
    },

    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex] || {};
        },

        countTime() {
          this.gameTimeOut =  setInterval(() => {
                this.gameTimeFormat = this.convertTime(this.gameTime);
                return this.gameTime++;
            }, 1000)
        },

    },
    methods: {
        convertTime(seconde) {
            const heure = Math.floor(seconde / 3600);
            const minute = Math.floor((seconde % 3600) / 60);
            const secondes = seconde % 60;

            return `${heure.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}s`
        },
        selectAnswer(option) {
            this.selectedAnswer = option;
            console.log(this.selectedAnswer);
        },

        nextQuestion() {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.selectedAnswer = null;
                this.isAnswered = false;
            }
        },

        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        },

        checkAnswer() {
            this.isAnswered = true;
            if (this.currentQuestion.correct === this.selectedAnswer) {
                this.response = true;
                this.score += 2;
                document.querySelector('#emoji-good').classList.add('active');
                setTimeout(() => {
                    document.querySelector('#emoji-good').classList.remove('active');
                }, 2000);
            } else {
                this.response = false;
                document.querySelector('#emoji-fail').classList.add('active');
                setTimeout(() => {
                    document.querySelector('#emoji-fail').classList.remove('active');
                }, 2000);
            }
        },

        finishQuiz() {
            this.isFinished = true;
            clearInterval(this.gameTimeOut);
        },

        setQuestions(question) {
            this.questions = question;
            sessionStorage.setItem('questions', JSON.stringify(this.questions));
        },
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.good-emoji,
.fail-emoji {
    display: none;
}

.good-emoji.active,
.fail-emoji.active {
    display: block;
    animation: activeGoodEmoji 1.5s ease-in-out;
}

.good-answer {
    animation: activeGood 5s ease-in-out infinite;
}

@keyframes activeGoodEmoji {
    0% {
        display: block;
        transform: scale(3) rotate(-45deg);
    }

    50% {
        transform: scale(5) rotate(0);
    }

    50% {
        transform: scale(7) rotate(45deg);
        display: none;
    }
}

@keyframes activeGood {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
