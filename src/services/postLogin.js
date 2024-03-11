import { addDoc, collection, getDocs } from "@firebase/firestore";
import users from "../data/users.json"
import { db } from "../firebase/config";

export default async function postLogin(email, password, resgistered) {
    try {
        if (resgistered === true) {
            const usersDB = collection(db, "users");

            const dat = getDocs(usersDB).then(res => {
                return res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            }).then(res => { return res.find(item => item.email === email && item.password == password) })

            return dat.then(res => res);
        }
        else {
            const usersDB = collection(db, "users");
            return addDoc(usersDB, {
                email: email,
                name: "John",
                lastname: "Doe",
                password: password,
                date: Date.now()
            }).then(() => {
                return {
                    email: email,
                    name: "John",
                    lastname: "Doe",
                    password: password,
                    date: Date.now()
                }
            })
        }

    } catch (error) {
        const response = users.result.find(item => item.email === email && item.password === password);
        return response
    }
}