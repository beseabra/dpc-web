"use client";
import { getArticlesByStatus, updateArticleStatus } from "@/app/api/actions/articloAction";
import Button from "@/components/atomos/button/Button";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress, InputAdornment, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Article } from "@prisma/client";
import { useEffect, useState } from "react";
import styles from "./ArticleManagement.module.css";

export default function ArticleManagement() {
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);
  const [approvedArticles, setApprovedArticles] = useState<Article[]>([]);
  const [filteredPending, setFilteredPending] = useState<Article[]>([]);
  const [filteredApproved, setFilteredApproved] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [publicationDate, setPublicationDate] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPendingPage, setCurrentPendingPage] = useState(1);
  const [currentApprovedPage, setCurrentApprovedPage] = useState(1);
  const articlesPerPage = 7;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const pending = await getArticlesByStatus("pending");
      const approved = await getArticlesByStatus("approved");
      setPendingArticles(pending);
      setApprovedArticles(approved);
      setFilteredPending(pending);
      setFilteredApproved(approved);
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
      alert("Erro ao carregar artigos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filteredPending = pendingArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.keywords.join(", ").toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredApproved = approvedArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.keywords.join(", ").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPending(filteredPending);
    setFilteredApproved(filteredApproved);
    setCurrentPendingPage(1);
    setCurrentApprovedPage(1);
  }, [searchTerm, pendingArticles, approvedArticles]);

  const handleViewArticle = (article: Article) => {
    setSelectedArticle(article);
    setOpenViewModal(true);
  };

  const handleApprove = async () => {
    if (!selectedArticle || !feedback) {
      alert("Por favor, insira um feedback antes de aprovar o artigo.");
      return;
    }

    try {
      await updateArticleStatus(selectedArticle.id, "approved");
      fetchArticles();
      setOpenApproveModal(false);
      setFeedback("");
      alert("Artigo aprovado com sucesso!");

      // Enviar e-mail de aprovação com feedback
      await sendEmail(selectedArticle.id, "approved", feedback);
    } catch (error) {
      console.error("Erro ao aprovar artigo:", error);
      alert("Erro ao aprovar artigo.");
    }
  };

  const handleReject = async () => {
    if (!selectedArticle || !feedback) {
      alert("Por favor, insira um feedback antes de reprovar o artigo.");
      return;
    }

    try {
      await updateArticleStatus(selectedArticle.id, "rejected");
      fetchArticles();
      setOpenRejectModal(false);
      setFeedback("");
      alert("Artigo reprovado com sucesso!");

      // Enviar e-mail de reprovação com feedback
      await sendEmail(selectedArticle.id, "rejected", feedback);
    } catch (error) {
      console.error("Erro ao reprovar artigo:", error);
      alert("Erro ao reprovar artigo.");
    }
  };

  const handleOpenScheduleModal = (article: Article) => {
    setSelectedArticle(article);
    setOpenScheduleModal(true);
  };

  const handleSchedule = async () => {
    if (!selectedArticle || !publicationDate) {
      alert("Selecione uma data e horário válidos.");
      return;
    }

    const selectedDate = new Date(publicationDate);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("A data de agendamento deve ser no futuro.");
      return;
    }

    try {
      await updateArticleStatus(selectedArticle.id, "scheduled", publicationDate);
      setOpenScheduleModal(false);
      setPublicationDate("");
      fetchArticles();
      alert("Artigo agendado com sucesso!");

      // Enviar e-mail de agendamento
      await sendEmail(selectedArticle.id, "scheduled");
    } catch (error) {
      console.error("Erro ao agendar artigo:", error);
      alert("Erro ao agendar artigo.");
    }
  };

  const handlePublish = async (articleId: string) => {
    try {
      await updateArticleStatus(articleId, "published");
      fetchArticles();
      alert("Artigo publicado com sucesso!");
      // Simular envio de e-mail
      sendEmail(articleId, "published");
    } catch (error) {
      console.error("Erro ao publicar artigo:", error);
      alert("Erro ao publicar artigo.");
    }
  };

  const sendEmail = async (articleId: string, status: string, feedback?: string) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "seabra@alunos.utfpr.edu.br", // Substitua pelo e-mail do autor
          subject: `Status do Artigo: ${status}`,
          html: `<p>O status do seu artigo foi alterado para <strong>${status}</strong>.</p>
                 ${feedback ? `<p>Feedback: ${feedback}</p>` : ""}`,
        }),
      });

      const result = await response.json();
      console.log("E-mail enviado:", result);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  };

  const indexOfLastPending = currentPendingPage * articlesPerPage;
  const indexOfFirstPending = indexOfLastPending - articlesPerPage;
  const currentPending = filteredPending.slice(indexOfFirstPending, indexOfLastPending);

  const indexOfLastApproved = currentApprovedPage * articlesPerPage;
  const indexOfFirstApproved = indexOfLastApproved - articlesPerPage;
  const currentApproved = filteredApproved.slice(indexOfFirstApproved, indexOfLastApproved);

  const paginatePending = (pageNumber: number) => setCurrentPendingPage(pageNumber);
  const paginateApproved = (pageNumber: number) => setCurrentApprovedPage(pageNumber);

  return (
    <div className={styles.container}>
      <h1>Gerenciamento de Artigos</h1>

      <div className={styles.filters}>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Filtrar por título ou palavras-chave"
        />
      </div>

      {loading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <h2>Submissões Pendentes</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Palavras-Chave</th>
                <th>Data de Envio</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentPending.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.keywords.join(", ")}</td>
                  <td>{new Date(article.createdAt).toLocaleDateString()}</td>
                  <td>
                    <div className={styles.gap}>
                      <Button text="Visualizar" onClick={() => handleViewArticle(article)} color="var(--secondary-color)" />
                      <Button text="Aprovar" onClick={() => { setSelectedArticle(article); setOpenApproveModal(true); }} color="var(--quaternary-color)" />
                      <Button text="Reprovar" onClick={() => { setSelectedArticle(article); setOpenRejectModal(true); }} color="var(--tertiary-color)" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination}>
            {Array.from({ length: Math.ceil(filteredPending.length / articlesPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginatePending(i + 1)}
                className={currentPendingPage === i + 1 ? styles.active : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <h2>Submissões Aprovadas</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Palavras-Chave</th>
                <th>Data de Envio</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentApproved.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.keywords.join(", ")}</td>
                  <td>{new Date(article.createdAt).toLocaleDateString()}</td>
                  <td>
                    <div className={styles.gap}>
                      <Button text="Agendar" onClick={() => handleOpenScheduleModal(article)} color="var(--secondary-color)" />
                      <Button text="Publicar" onClick={() => handlePublish(article.id)} color="var(--quaternary-color)" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination}>
            {Array.from({ length: Math.ceil(filteredApproved.length / articlesPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginateApproved(i + 1)}
                className={currentApprovedPage === i + 1 ? styles.active : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}

      <Modal open={openViewModal} onClose={() => setOpenViewModal(false)}>
        <div className={styles.modalContent}>
          {selectedArticle && (
            <>
              <h2>{selectedArticle.title}</h2>
              <p>{selectedArticle.subtitle}</p>
              <p>{selectedArticle.article}</p>
            </>
          )}
        </div>
      </Modal>

      <Modal open={openScheduleModal} onClose={() => setOpenScheduleModal(false)}>
        <div className={styles.modalContent}>
          <h2>Agendar Publicação</h2>
          <input
            type="datetime-local"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
          <Button text="Confirmar" onClick={handleSchedule} color="var(--quaternary-color)" />
        </div>
      </Modal>

      <Modal open={openRejectModal} onClose={() => setOpenRejectModal(false)}>
        <div className={styles.modalContent}>
          <h2>Reprovar Artigo</h2>
          {selectedArticle && (
            <>
              <p><strong>Título:</strong> {selectedArticle.title}</p>
              <p><strong>Autor:</strong> {selectedArticle.authorId}</p>
              <div className={styles.flex} >
              <TextField
                multiline
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Insira o feedback para o autor"
              />
              <Button text="Enviar Feedback" onClick={handleReject} color="var(--tertiary-color)" />
              </div>
            </>
          )}
        </div>
      </Modal>

      <Modal open={openApproveModal} onClose={() => setOpenApproveModal(false)}>
        <div className={styles.modalContent}>
          <h2>Aprovar Artigo</h2>
          {selectedArticle && (
            <>
              <p><strong>Título:</strong> {selectedArticle.title}</p>
              <p><strong>Autor:</strong> {selectedArticle.authorId}</p>
              <div className={styles.flex} >
                <TextField
                    multiline
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Insira o feedback para o autor"
                />
                <Button text="Enviar Feedback" onClick={handleApprove} color="var(--quaternary-color)" />
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}