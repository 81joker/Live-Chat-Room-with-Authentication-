import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;

    try {
        const res = await projectAuth.signInWithEmailAndPassword( email,password);
        error.value = null;
        console.log(res);

        // if (!res) {
        //     throw new Error("could not complate the signup");
        // }
        // await res.user.updateProfile({ displayName });
        return res;
    } catch (err) {
        console.log(err.value);
        error.value = 'Incorrect login credentials';
        // error.value = err.message;
    }

};

const useLogin = () => {
    return { error, login };
};
export default useLogin;
