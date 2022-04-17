import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelectOption from '../views/DataBindingSelectOption.vue'
import DataBindingInputCheckbox from '../views/DataBindingInputCheckbox.vue'
import DataBindingInputRadio from '../views/DataBindingInputRadio.vue'
import DataBindingImageSrc from '../views/DataBindingImageSrc.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClassArray from '../views/DataBindingClassArray.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databinding-html',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databinding-inputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databinding-inputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databinding-textarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databinding-selectoption',
    name: 'DataBindingSelectOption',
    component: DataBindingSelectOption
  },
  {
    path: '/databinding-inputcheckbox',
    name: 'DataBindingInputCheckbox',
    component: DataBindingInputCheckbox
  },
  {
    path: '/databinding-inputradio',
    name: 'DataBindingInputRadio',
    component: DataBindingInputRadio
  },
  {
    path: '/databinding-imagesrc',
    name: 'DataBindingImageSrc',
    component: DataBindingImageSrc
  },
  {
    path: '/databinding-button',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databinding-class',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databinding-classarray',
    name: 'DataBindingClassArray',
    component: DataBindingClassArray
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
