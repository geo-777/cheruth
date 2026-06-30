import styles from "./LogoutButton.module.css"
import { authServices } from "../../../api/authServices";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import { LogOut } from "lucide-react";

export function LogoutButton() {

    const navigate = useNavigate();

    const handleLogout = async() => {
        await authServices.logout();

        toast.success('Successfully logged out.. See you again.');

        navigate({ to:'/' });
    }

    return (
        <button onClick={handleLogout} className={styles.main}>
            <LogOut />
        </button>
    );

}