"use client";

import sessionCookie from "@/context/sessionCokie";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, List, ListItem, ListItemText, Popover } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import styles from "./header.module.css";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState("");

  const closeLoginModal = () => {
    setLogin(false);
  };

  useEffect(() => {
    const fetchUserPayload = async () => {
      const userPayload = await sessionCookie();
      setUser(userPayload?.type || "user");
    };

    fetchUserPayload();

    const handleClickOutside = (event: MouseEvent) => {
      const modalContent = document.querySelector(`.${styles.modalContent}`);
      if (login && modalContent && !modalContent.contains(event.target as Node)) {
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

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "AVALIAÇÃO", href: "/assessment", show: user === "admin" },
    { text: "REVISTA", href: "/magazine" },
    { text: "EXPEDIENTE", href: "/presentation" },
    { text: "SUBMISSÃO", href: "/submission" },
    { text: "PROJETO", href: "/project" },
  ];

  return (
    <>
      <div className={styles.header}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={144}
          height={144}
          onClick={() => router.push("/")}
        />
        {/* Menu para Desktop */}
        <div className={styles.menu}>
          {menuItems.map(
            (item) =>
              item.show !== false && (
                <a
                  key={item.href}
                  className={styles.menuItens}
                  href={item.href}
                  style={{
                    fontWeight: pathname === item.href ? "bold" : "normal",
                  }}
                >
                  {item.text}
                </a>
              )
          )}
          <a className={styles.menuItens} onClick={() => setLogin(true)}>
            <PersonIcon htmlColor="var(--text-color-secondary)" />
          </a>
        </div>

        {/* Botão de Menu para Mobile */}
        <IconButton onClick={handleMenuClick} className={styles.menuButton}>
          <MenuIcon htmlColor="var(--text-color-secondary)" sx={{ fontSize: 80, padding: 7 }} />
        </IconButton>
      </div>

      {/* Popover para Mobile */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List>
          {menuItems.map(
            (item) =>
              item.show !== false && (
                <ListItem
                  button
                  key={item.href}
                  onClick={() => {
                    router.push(item.href);
                    handleClose();
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{ fontWeight: pathname === item.href ? "bold" : "normal" }}
                  />
                </ListItem>
              )
          )}
          <ListItem button onClick={() => setLogin(true)}>
            <PersonIcon htmlColor="var(--text-color-secondary)" />
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Popover>

      {login && <LoginModal onClickClose={closeLoginModal} />}
    </>
  );
}
