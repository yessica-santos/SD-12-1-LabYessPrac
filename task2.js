// Task 2: listUsers()
const BASE_URL = "http://localhost:3000";

export async function listUsers() {
    try {

        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.json();

        console.log(data);
        return data;

    } catch (error) {

        console.log(error);

    };
} 

