'use client'
import { getMembersByType } from "@/app/api/actions/membersAction";
import { Member } from "@/components/moleculas/ModalMemberAdd/ModalMemberAdd";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./member.module.css";

export default function Members() {

  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);


  useEffect(() => {
    async function loadMembers () {
      setLoading(true);
      try {
        const fetchedMembers: Member[] = await getMembersByType('Revista/projeto');
        setMembers(fetchedMembers);
      } catch (error) {
        console.error("Erro ao carregar os membros:", error);
        alert("Erro ao carregar os membros.");
      } finally {
        setLoading(false);
      }
    }
    loadMembers()
  }, []);


  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {members.map((collab, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "25rem",
          }}
          key={index}
        >
          <Image
            src={collab.image}
            alt={collab.image}
            width={125}
            height={125}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <div>
            <h5 className={styles.margin}>{collab.name}</h5>
            <h6 className={styles.margin}>{collab.assignment}</h6>
            <h6 className={styles.margin}>
              Lattes: <a href={collab.lattes}>{collab.lattes}</a>
            </h6>
            <h6 className={styles.margin}>Email: {collab.email}</h6>
          </div>
        </div>
      ))}
      {loading && (
          <div className={styles.loadingContainer}>
            <CircularProgress />
          </div>
          )}
    </div>
  );
}
