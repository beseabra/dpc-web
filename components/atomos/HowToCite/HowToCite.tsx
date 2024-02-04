interface IArtigoReference {
  title: string;
  writer: string;
  date: string;
  area: string;
  volume: string;
  number: string;
  year: string;
  version: string;
  author: {
    author: string;
    coAuthor: string;
  };
}

interface IHowToCiteProps {
  reference?: IArtigoReference;
}

export default function ArtigoReference({ reference }: IHowToCiteProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return `${day}/${month}/${year}`;
  };

  const abntReference = `${reference?.author.author.toUpperCase()}; ${reference?.author.coAuthor.toUpperCase()}. ${
    reference?.title
  }. ${reference?.writer}. ${reference?.date}. ${reference?.area}, v. ${
    reference?.volume
  }, n. ${reference?.number}, ${reference?.year}. ${
    reference?.version
  }. Disponível em: ${currentUrl}. Acesso em: ${getCurrentDate()}.`;

  return (
    <div>
      <p>Referência ABNT: {abntReference}</p>
    </div>
  );
}
