<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">VEHICULOS</div>
      <div class="navbar-links">
        <router-link class="navbar-link" to="/ingresar-vehiculo">Ingresar Vehiculo</router-link>
        <router-link class="navbar-link" to="/consultar-vehiculo">Consultar Vehiculo</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style>
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  gap: 15px;
}

.navbar-link {
  text-decoration: none;
  color: #007bff;
  font-size: 1.1em;
}

.navbar-link:hover {
  text-decoration: underline;
}
</style>
