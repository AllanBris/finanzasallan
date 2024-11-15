import { ref, onMounted, watch } from 'vue'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import router from '@/router'

const user = ref(null)
const auth = getAuth()

const googleAuthProvider = new GoogleAuthProvider()

export function useAuth() {
    onMounted(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            user.value = firebaseUser
        })
    })
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error("Error al iniciar sesión")
        }
        router.push('/dashboard')
    }

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider)
            if (result) {
                router.push('/dashboard')
            }
        } catch (error) {
            console.error("Error de autenticación de Google")
        }
    }

    const register = async (email, password, username) => {
        try {
            const userCredential = await createUserWithEmailAndPassword ( auth, email, password)
            console.log("Registro exitoso");
            await updateProfile(userCredential.user, { displayName: username })
        } catch (error) {
            console.error("Hubo un error al crear la cuenta");
        }
        router.push('/dashboard')
    }
    const logout = async () => {
        try {
            await signOut(auth);
            user.value = null;
            router.push('/auth')
        } catch (error) {
            console.error("Error al cerrar sesión");       
        }
    }
    return { user, login, logout, register, signInWithGoogle }
}