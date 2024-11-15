<script setup>
import { ref } from 'vue';
import { getDatabase, ref as dbRef, push } from 'firebase/database';
import { auth } from '@/firebase';

const type = ref('ingresos');
const amount = ref(0)
const db = getDatabase();

const addTransaction = async() => {
    const user = auth.currentUser
    if (user && amount.value != null) {
        const transactionsRef = dbRef(db, `transactions/${user.uid}`);
    

    const newTransaction = {
        type: type.value,
        amount: amount.value,
        date: new Date().toISOString().slice(0, 10),
        userId: user.uid,
        time: new Date().toLocaleTimeString(0, 8) 
    }

        await push(transactionsRef, newTransaction)
        alert('Transacción anadida')
        amount.value = null
    } else {
        alert('Debes ingresar una cantidad valida')
    }

}

</script>









<template>
    <h1>Añadir Transacción</h1>
    <form @submit.prevent="addTransaction">
    <div>
        <label style="margin-right: 5px" >Tipo de Transacción</label>
    <select v-model="type" id="">
        <option value="ingresos">Ingresos</option>
        <option value="gastos">Gastos</option>
    </select>
    </div>
    <div>
    <label style="margin-right: 5px;">Cantidad</label>
    <input v-model="amount" type="number" required>
    </div>
    <button type="submit">Agregar Transacción</button>
    </form>
</template>