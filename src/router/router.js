import { createRouter, createWebHistory } from 'vue-router';
import ConsultarVehiculo from '../components/ConsultarVehiculo.vue';
import CrearVehiculo from '../components/CrearVehiculo.vue';

const routes = [
  {
    path: '/ingresar-vehiculo',
    name: 'CrearVehiculo',
    component: CrearVehiculo
  },
  {
    path: '/consultar-vehiculo',
    name: 'ConsultarVehiculo',
    component: ConsultarVehiculo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


