import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase';

const submit = async () => {
    if(!form.username || !form.email || !form.password) {
        Alert.alert("Error", "Please fill in all the fields")
    }
    try{
        const user = await createUserWithEmailAndPassword(getAuth(), form.email, form.password)
        console.log(user)
        // navigate user to homepage
    }
    catch(e){
        Alert.alert('Error', e.message)
    }
}