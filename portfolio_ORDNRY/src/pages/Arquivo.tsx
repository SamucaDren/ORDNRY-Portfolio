/*import { useEffect, useState } from "react";
import { getProjetos } from "../Services/prismic";
import type { ProjetoPortfolio } from "../Services/prismic";
import { PrismicRichText } from "@prismicio/react";

function Arquivo() {
  const [projetos, setProjetos] = useState<ProjetoPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjetos() {
      try {
        const data = await getProjetos();
        setProjetos(data);
      } catch (error) {
        console.error(error);
        setError("Erro ao carregar projetos");
      } finally {
        setLoading(false);
      }
    }

    loadProjetos();
  }, []);

  if (loading) return <p>Carregando projetos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {projetos.map((p) => (
        <article key={p.id}>
          {p.data.capa?.url && (
            <img
              src={p.data.capa.url}
              alt={p.data.capa.alt ?? ""}
              loading="lazy"
            />
          )}

          <PrismicRichText field={p.data.name} />
          <PrismicRichText field={p.data.description} />
        </article>
      ))}
    </div>
  );
  export default Arquivo;
}*/
