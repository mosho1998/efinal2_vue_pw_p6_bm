<template>
  <form @submit.prevent="crearVehiculo" class="vehiculo-form">
    <h2>Crear Vehículo</h2>
    <div class="form-group">
      <label for="placa">Placa</label>
      <input v-model="placa" type="text" id="placa" required />
      <span v-if="errors.placa" class="error-message">{{ errors.placa }}</span>
    </div>

    <div class="form-group">
      <label for="marca">Marca</label>
      <input v-model="marca" type="text" id="marca" required />
      <span v-if="errors.marca" class="error-message">{{ errors.marca }}</span>
    </div>

    <div class="form-group">
      <label for="modelo">Modelo</label>
      <input v-model="modelo" type="text" id="modelo" required />
      <span v-if="errors.modelo" class="error-message">{{ errors.modelo }}</span>
    </div>

    <div class="form-group">
      <label for="color">Color</label>
      <input v-model="color" type="text" id="color" required />
      <span v-if="errors.color" class="error-message">{{ errors.color }}</span>
    </div>

    <div class="form-group">
      <label for="precio">Precio</label>
      <input v-model="precio" type="number" id="precio" required />
      <span v-if="errors.precio" class="error-message">{{ errors.precio }}</span>
    </div>

    <button type="submit" :disabled="isSubmitting">Guardar</button>

    <p v-if="message" :class="{'success-message': success, 'error-message': !success}">{{ message }}</p>
  </form>
</template>

<script>
import { guardarFachada } from "../clients/clients.js";

export default {
  data() {
    return {
      placa: '',
      marca: '',
      modelo: '',
      color: '',
      precio: '',
      message: '',
      success: false,
      isSubmitting: false,
      errors: {}
    };
  },
  methods: {
    validarFormulario() {
      this.errors = {};
      if (!this.placa) {
        this.errors.placa = 'La placa es requerida.';
      }
      if (!this.marca) {
        this.errors.marca = 'La marca es requerida.';
      }
      if (!this.modelo) {
        this.errors.modelo = 'El modelo es requerido.';
      }
      if (!this.color) {
        this.errors.color = 'El color es requerido.';
      }
      if (!this.precio || this.precio <= 0) {
        this.errors.precio = 'El precio debe ser mayor que 0.';
      }
      return Object.keys(this.errors).length === 0;
    },
    async crearVehiculo() {
      if (!this.validarFormulario()) {
        return;
      }
      
      this.isSubmitting = true;
      const vehiculoBody = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };

      try {
        const data = await guardarFachada(vehiculoBody);
        this.message = "Vehículo guardado con éxito.";
        this.success = true;
        this.resetForm();
      } catch (error) {
        this.message = "Error al guardar el vehículo.";
        this.success = false;
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.placa = '';
      this.marca = '';
      this.modelo = '';
      this.color = '';
      this.precio = '';
      this.errors = {};
    },
  },
};
</script>


<style>
.vehiculo-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  color: green;
  font-weight: bold;
  margin-top: 15px;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 15px;
}

</style>

