<script setup>
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["5", "4", "3"],
  datasets: [
    {
      label: "Customers Rating about Hassan training.",
      backgroundColor: "#228be633",
      data: [25, 4, 1],
      fill: false,
      backgroundColor: ["rgb(35, 139, 231)"],
      borderColor: ["#228be6"],
      borderWidth: 1,
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  indexAxis: "y",
});
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<style scoped></style>
