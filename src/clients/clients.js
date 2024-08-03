import axios from 'axios';

const guardarVehiculo = async (vehiculoBody) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`, vehiculoBody).then(r => r.data);
    return data;
}


export const guardarFachada = async (vehiculoBody) => {
    return await guardarVehiculo(vehiculoBody);
}

const consultarVehiculos = async () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/consulta`).then(r => r.data);
    return data;
}

const borrarVehiculo = async (placa) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/borrar/${placa}`).then(r => r.data);
    return data;
}


export const consultarFachada = async () => {
    return await consultarVehiculos();
}


export const borrarFachada = async (placa) => {
    return await borrarVehiculo(placa);
}


