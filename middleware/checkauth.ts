import useAuth from '~~/store/user-auth';
import { defineNuxtRouteMiddleware } from 'nuxt/app';
export default defineNuxtRouteMiddleware((to, from) => {
    try {
    console.log("in middleware");

    if (!useAuth().authIsReady) {
        return navigateTo('/loading')
    }


    if (!useAuth().user) {
        debugger
        return navigateTo('/login')
    }
} catch (e) {
    debugger;
    console.log(e)
}
})