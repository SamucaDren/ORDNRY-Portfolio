import * as prismic from "@prismicio/client";

// client centralizado
export const client = prismic.createClient(
  "https://ordnryportfolio.cdn.prismic.io/api/v2",
);

// buscar todos
export async function getProjetos() {
  const response = await client.getAllByType("projeto");

  return response.map((doc) => ({
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
    typeOfCase: doc.data.type_of_case || "",
    typeOfProject: doc.data.type_of_project || "",
    behanceLink: doc.data.behance_link?.url || "",
  }));
}

// buscar por ID (se precisar depois)
export async function getProjetoById(id) {
  const doc = await client.getByID(id);

  return {
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
    typeOfCase: doc.data.type_of_case || "",
    typeOfProject: doc.data.type_of_project || "",
    behanceLink: doc.data.behance_link?.url || "",
  };
}
