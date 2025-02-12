import FinishVue from '@/components/finishVue.vue'
import QuestionnaireVue from '@/components/questionnaireVue.vue'
import QuizCategories from '@/components/quizCategories.vue'
import WelcomeVue from '@/components/welcomeVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL ?? '/'),
  routes: [
    {
      path: '/',
      component: WelcomeVue,
      name: 'welcomeVue',
    },
    {
      path: '/categorie',
      component: QuizCategories,
      name: 'categorieVue',
    },
    {
      path: '/commencer',
      component: QuestionnaireVue,
      name: 'questions',
    },
    {
      path: '/finish',
      component: FinishVue,
      name: 'terminer',
    },
 
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/components/NotFound.vue'),
      name: 'notFound',
    },
  ],
})

export default router
