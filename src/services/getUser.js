import { collection, getDocs } from "@firebase/firestore";
import users from "../data/users.json"
import { db } from "../firebase/config";

export default async function getUser(email) {

    try {
        const usersDB = collection(db, "users");

        const dat = getDocs(usersDB).then(res => {
            return res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        }).then(res => { return !!res.find(item => item.email === email) || "register" })

        return dat.then(res => res);

    } catch (error) {
        return !!users.result.find(item => item.email === email);
    }

}