// Task 4: delUser(number)
import * as task2 from "./task2.js";
const BASE_URL = "http://localhost:3000"

export const delUser = async (id) => {
    const response = await fetch (`${BASE_URL}/users/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}

/**
 * {
      "id": "5",
      "first_name": "Alex",
      "last_name": "Chen",
      "email": "achen12@example.net"
    },
 */