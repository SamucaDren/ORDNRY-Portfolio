const HYGRAPH_ENDPOINT =
  "https://us-west-2.cdn.hygraph.com/content/cmkaj7gne02l106w5e8uq2rtn/master";

type GraphQLResponse<T> = {
  data: T;
};

type ProjetoPortfolio = {
  id: string;
  name: string;
  descricao: string;
  capa: {
    url: string;
  };
};

// 🔹 base fetch
async function fetchHygraph<T>(query: string, variables?: object) {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json: GraphQLResponse<T> = await response.json();
  return json.data;
}

// 🔹 retorna todos
export function getProjetos() {
  const query = `
    query {
      projetoPortfolios(stage: PUBLISHED) {
        id
        name
        descricao
        capa {
          url
        }
      }
    }
  `;

  return fetchHygraph<{ projetoPortfolios: ProjetoPortfolio[] }>(query).then(
    (data) => data.projetoPortfolios
  );
}

// 🔹 retorna um por ID
export function getProjetoById(id: string) {
  const query = `
    query ($id: ID!) {
      projetoPortfolio(where: { id: $id }, stage: PUBLISHED) {
        id
        name
        descricao
        capa {
          url
        }
      }
    }
  `;

  return fetchHygraph<{ projetoPortfolio: ProjetoPortfolio }>(query, {
    id,
  }).then((data) => data.projetoPortfolio);
}
