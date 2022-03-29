import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import store from '../store'
import kr from '@/locale/kr.json'
import en from '@/locale/en.json'
const translation = {
  kr: kr,
  en: en,
}
const i18n = new VueI18n({
  locale: store.getters.getLocale, // set locale
  messages: translation, // set locale messages
})

store.commit('SET_TRANSLATION', translation)

export default i18n
