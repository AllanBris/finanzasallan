<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const isLogin = ref(true);
const email = ref("");
const password = ref("");
const username = ref("");
const router = useRouter();

const { login, register, signInWithGoogle } = useAuth();

const toggleAuth = () => {
    isLogin.value = !isLogin.value
}

const handleSubmit = async () => {
    try {
        if(isLogin.value){
            await login ( email.value, password.value);
            console.log("Inicio de sesión exitoso");
        }
        else{
            await register(email.value, password.value, username.value);
            console.log("Registro exitoso");
        }
        console.log("Redirigiendo al dashboard");
        router.push("/dashboard")
    } catch (error) {

    }
}
</script>



<template>
    <div>
        <h1>{{ isLogin ? "Iniciar Sesión" : "Registro" }}</h1>
        <form @submit.prevent="handleSubmit">
        <div class="inputs">
    <div v-if="!isLogin">
        <label for="username">Username</label>
        <input id="username" v-model="username" type="text" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required>
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required>
    </div>
        <button @click="signInWithGoogle">Iniciar Sesion con Google</button>
        </div>
        <button type="submit">{{ isLogin ? "Iniciar Sesion" : "Registrarme" }}</button>
        </form>
        <p @click="toggleAuth" style="cursor: pointer;">
            {{ isLogin ? "Aun no tienes una cuenta?" : "Ya tenes una cuenta? Inicia sesión" }}
        </p>
    </div>
</template>

<style scoped>
.inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 8rem;
    padding-right: 8rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
}
input {
    width: 100%;
    padding: 0.6rem;
}
label {
    display: block;
    text-align: left;

}

</style>