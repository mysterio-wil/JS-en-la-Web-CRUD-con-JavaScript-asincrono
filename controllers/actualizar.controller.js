import { clientServices } from "../service/client-service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]")
    const email= document.querySelector("[data-email]")

    console.log("nombre", " - ", email);
 
    clientServices.detalleCliente(id).then(( perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email; 
    });

};

obtenerInformacion();