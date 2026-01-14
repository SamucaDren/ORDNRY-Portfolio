import * as prismic from "@prismicio/client";

// client centralizado
export const client = prismic.createClient(
  "https://ordnryportfolio.cdn.prismic.io/api/v2"
);

// tipo do documento
export type ProjetoPortfolio = prismic.PrismicDocument<{
  name: prismic.RichTextField;
  description: prismic.RichTextField;
  capa: prismic.ImageField;
}>;

// buscar todos
export async function getProjetos(): Promise<ProjetoPortfolio[]> {
  return client.getAllByType<ProjetoPortfolio>("projeto");
}

// buscar por ID
export async function getProjetoById(id: string): Promise<ProjetoPortfolio> {
  return client.getByID<ProjetoPortfolio>(id);
}
