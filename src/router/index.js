import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      title: "Med - логин"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title: "Med - регистрация"
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta:{
      title: "Med - главная"
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    meta:{
      title: "Med - персонал"
    },
    component: () => import('../components/Personal.vue')
  },

]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));
  next();
});

export default router

