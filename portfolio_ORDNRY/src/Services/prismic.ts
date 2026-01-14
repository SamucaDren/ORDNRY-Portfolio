import * as prismic from "@prismicio/client";

// client centralizado
export const client = prismic.createClient(
  "https://ordnryportfolio.cdn.prismic.io/api/v2"
);

// tipo FINAL usado no app
export type ProjetoPortfolio = {
  id: string;
  name: string;
  description: string;
  capaUrl: string;
};

// buscar todos
export async function getProjetos(): Promise<ProjetoPortfolio[]> {
  const response = await client.getAllByType("projeto");

  return response.map((doc) => ({
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
  }));
}

// buscar por ID
export async function getProjetoById(id: string): Promise<ProjetoPortfolio> {
  const doc = await client.getByID(id);

  return {
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
  };
}
