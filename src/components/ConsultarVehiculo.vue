<template>
  <div>
    <button @click="fetchVehicles">Consultar</button>
    <table v-if="vehicles.length > 0">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Acción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehiculo in vehicles" :key="vehiculo.placa">
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td><button @click="viewVehicle(vehiculo)">Ver</button></td>
          <td><button @click="deleteVehicle(vehiculo)">Borrar</button></td>
        </tr>
      </tbody>
    </table>
    <div v-else>No hay datos disponibles</div>
  </div>
</template>

<script>
import { consultarFachada, borrarFachada } from "../clients/clients.js";

export default {
  data() {
    return {
      vehicles: [],
    };
  },
  methods: {
    async fetchVehicles() {
      console.log("Recibiendo...");
      try {
        const data = await consultarFachada();
        console.log("Datos:", data);
        this.vehicles = data;
      } catch (error) {
        console.error("Hubo un error al consultar los vehículos!", error);
      }
    },
    viewVehicle(vehiculo) {
      alert(`Ver vehículo: ${vehiculo.placa}`);
    },
    async deleteVehicle(vehiculo) {
      this.vehicles = this.vehicles.filter((v) => v.placa !== vehiculo.placa);
      alert(`Vehículo con placa ${vehiculo.placa} ha sido borrado`);
      const data = await borrarFachada(vehiculo.placa);
      console.log("Borrar:", data);
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  margin: 10px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}
</style>
