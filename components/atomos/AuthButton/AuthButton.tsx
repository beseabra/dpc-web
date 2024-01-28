import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "../../../public/google.png";
import styles from "./authButton.module.css";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.googleButton} ${styles.button}`}
    >
      <Image src={google} alt="Google Logo" width={20} height={20} />
      <span className={styles.buttonText}>Continue com Google</span>
    </button>
  );
}
