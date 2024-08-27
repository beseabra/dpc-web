import { getMembers } from "@/app/api/actions/membersAction";
import { Member } from "@/components/moleculas/ModalMemberAdd/ModalMemberAdd";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./member.module.css";


export default function MemberProject() {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    async function loadMembers () {
      setLoading(true);
      try {
        const fetchedMembers: Member[] = await getMembers();
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
    <div style={{ display: "flex", flexWrap: "wrap" , marginLeft: 80, gap:30}}>
      {members.map((collab, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
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
       
          <h5 className={styles.margin}>{collab.name}</h5>
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
