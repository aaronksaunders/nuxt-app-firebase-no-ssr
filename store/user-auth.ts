import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { getApps } from "firebase/app";

debugger;



interface AuthState {
    user: User | null;
    authIsReady: boolean
}



const useAuth = defineStore("authStore", {
    state: (): AuthState => ({
        user: null,
        authIsReady: false
    }),

    actions: {
        async signup({ email, password }: { email: string, password: string }) {
            const { $auth } = useNuxtApp()
            console.log('signup action')

            const res = await createUserWithEmailAndPassword($auth, email, password)
            if (res) {
                this.user = res.user;
                return this.user;
            } else {
                throw new Error('could not complete signup')
            }
        },
        async login({ email, password }: { email: string, password: string }) {
            const { $auth } = useNuxtApp()
            console.log('login action')

            const res = await signInWithEmailAndPassword($auth, email, password)
            if (res) {
                this.user = res.user;
            } else {
                throw new Error('could not complete login')
            }
        },
        async logout() {
            console.log('logout action')
            const { $auth } = useNuxtApp()

            await signOut($auth)
            this.user = null;
        }
    }
});


export default useAuth;