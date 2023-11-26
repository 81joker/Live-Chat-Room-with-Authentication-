import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const logout = async () => {
    error.value = null;

    try {
        const res = await projectAuth.signOut();
        error.value = null;
        console.log(res);

        // if (!res) {
        //     throw new Error("could not complate the signup");
        // }
        // await res.user.updateProfile({ displayName });
        return res;
    } catch (err) {
        console.log(err.value);
        error.value = 'Incorrect logout credentials';
        // error.value = err.message;
    }

};

const useLogout = () => {
    return { error, logout };
};
export default useLogout;
