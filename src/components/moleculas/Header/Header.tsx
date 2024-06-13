"use client";

import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { user } from "../../list/User/user";
import LoginModal from "../LoginModal/LoginModal";
import styles from "./header.module.css";

export default function Header() {
  const [login, setLogin] = useState(false);
  const pathname = usePathname();

  const closeLoginModal = () => {
    setLogin(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const modalContent = document.querySelector(`.${styles.modalContent}`);
      if (login && modalContent && !modalContent.contains(event.target)) {
        closeLoginModal();
      }
    };

    if (login) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [login]);

  return (
    <>
      <div className={styles.header}>
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={144}
          height={144}
          onClick={() => (window.location.href = "/")}
        />
        <div className={styles.menu}>
          {user === "admin" && (
            <a
              className={styles.menuItens}
              href="/assessment"
              style={{
                fontWeight: pathname === "/assessment" ? "bold" : "normal",
              }}
            >
              AVALIAÇÃO
            </a>
          )}
          <a
            className={styles.menuItens}
            href="/magazine"
            style={{
              fontWeight: pathname === "/magazine" ? "bold" : "normal",
            }}
          >
            REVISTA
          </a>
          <a
            className={styles.menuItens}
            href="/presentation"
            style={{
              fontWeight: pathname === "/presentation" ? "bold" : "normal",
            }}
          >
            EXPEDIENTE
          </a>
          <a
            className={styles.menuItens}
            href="/submission"
            style={{
              fontWeight: pathname === "/submission" ? "bold" : "normal",
            }}
          >
            SUBMISSÃO
          </a>
          <a
            className={styles.menuItens}
            href="/project"
            style={{
              fontWeight: pathname === "/project" ? "bold" : "normal",
            }}
          >
            PROJETO
          </a>
          <a className={styles.menuItens} onClick={() => setLogin(true)}>
            <PersonIcon htmlColor="var(--text-color-secondary)" />
          </a>
        </div>
      </div>
      {login && <LoginModal onClickClose={closeLoginModal} />}
    </>
  );
}
