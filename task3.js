import * as task2 from "./task2.js";

// Task 3: addUser(first_name, last_name, email)
const BASE_URL = "http://localhost:3000"

export const addUser = async (first_name, last_name, email) => {

    try {
        
        const list = await task2.listUsers();
        const lastUser = list[list.length - 1];
        const newId = parseInt(lastUser.id) + 1;
        
        const user = {
            id: `${newId}`,
            first_name: first_name,
            last_name: last_name,
            email: email,
        };
    
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        });

    } 
    catch (error) {
        console.log(error);
    }

}

/*****
 * .../users
 * 
 * GET: Obtener datos -> Traer la lista usuarios
 * POST: Mandar datos -> Agregar uno o varios nuevos usuarios
 * PUT: Actualizar datos -> Actualizar un o varios usuarios
 * DELETE: Eliminar datos -> Eliminar uno o varios usuarios
 */
