import * as prismic from "@prismicio/client";

export const client = prismic.createClient(
  "https://ordnryportfolio.cdn.prismic.io/api/v2",
);

export type ProjetoPortfolio = {
  id: string;
  name: string;
  description: string;
  capaUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  behanceLink?: string;
};

export type ProjetoFrontEnd = {
  id: string;
  name: string;
  description: string;
  capaUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  GitHubLink?: string;
  HostLink?: string;
};

export async function getProjetos(): Promise<ProjetoPortfolio[]> {
  const response = await client.getAllByType("projeto");

  return response.map((doc) => ({
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
    typeOfCase: doc.data.type_of_case || "",
    typeOfProject: doc.data.type_of_project || "",
    behanceLink: doc.data.behance_link.url || "",
  }));
}

export async function getProjetoById(id: string): Promise<ProjetoPortfolio> {
  const doc = await client.getByID(id);

  return {
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
    typeOfCase: doc.data.type_of_case || "",
    typeOfProject: doc.data.type_of_project || "",
    behanceLink: doc.data.behance_link.url || "",
  };
}

export async function getProjetosFrontEnd(): Promise<ProjetoFrontEnd[]> {
  const response = await client.getAllByType("projeto_front_end");

  return response.map((doc) => ({
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
    typeOfCase: doc.data.type_of_case || "",
    typeOfProject: doc.data.type_of_project || "",
    GitHubLink: doc.data.github_link.url || "",
    HostLink: doc.data.host_link.url || "",
  }));
}

export async function getProjetoFrontEndById(
  id: string,
): Promise<ProjetoFrontEnd> {
  const doc = await client.getByID(id);

  return {
    id: doc.id,
    name: prismic.asText(doc.data.name) || "",
    description: prismic.asText(doc.data.description) || "",
    capaUrl: doc.data.capa?.url || "",
    typeOfCase: doc.data.type_of_case || "",
    typeOfProject: doc.data.type_of_project || "",
    GitHubLink: doc.data.github_link.url || "",
    HostLink: doc.data.host_link.url || "",
  };
}
