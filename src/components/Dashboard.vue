<script setup>
import { useAuth } from '@/composables/useAuth';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { onMounted, ref } from 'vue';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Barchart  from '../components/BarChart.vue';

const { user } = useAuth();

const chartData = ref({
    labels: [],
    datasets: [
        {
            label: 'Gastos',
            backgroundColor: '#f87979',
            data: []
        },
        {
            label: 'Ingresos',
            backgroundColor: '#f8f879',
            data: []
        }
    ]
    
})

// Inicializar la base de datos
const db = getDatabase();
// funcion para obtener los datos de las transacciones
const fetchData = (userUid) => {
    //Referencia a las transacciones del usuario registrado
    const transactionsRef = dbRef(db, `transactions/${userUid}`);
    onValue(transactionsRef, (snapshot) => {
        const transactions = snapshot.val();
        if (!transactions) return console.log('No hay datos');

        const labels = [];
        const ingresos = [];
        const gastos = [];

        for (const key in transactions){
            const { type, amount, date } = transactions[key];
            labels.push(new Date(date).toLocaleDateString());
            if (type === 'ingresos') {
                ingresos.push(amount)
            } else if (type === 'gastos') {
                gastos.push(amount)
            }
        }

        chartData.value.labels = labels;
        chartData.value.datasets[0].data = gastos;
        chartData.value.datasets[1].data = ingresos;
    })
}

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userUid = auth.currentUser.uid;
            fetchData(userUid);
        } else {
            console.log('No hay un usuario autenticado');
        }
    })
})

</script>

<template>
    <h1>Soy Dashboard</h1>
    <h2 v-if="user">Bienvenido, {{ user.displayName }}</h2>
    <div v-if="chartData && chartData.labels.length > 0">
    <Barchart :chartData="chartData" />
    </div>
</template>