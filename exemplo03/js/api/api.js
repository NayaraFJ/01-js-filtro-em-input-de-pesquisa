const url = "https://36c6eb90-6391-418d-9b7c-5dea598d31fd-00-2biqs6wk06s8r.kirk.replit.dev/";
const urlProdutos = url + "produtos";

/*
  Exportação nomeada:
  export async function enviar(dados) {
    // ...
  }

  Exportação da função enviar() com um nome explícito.
  Essa função deve ser importada usando exatamente esse nome:
  import { enviar } from './api.js';
  As chaves {} são obrigatórias em exportações nomeadas.
  Pode haver várias exportações nomeadas em um mesmo arquivo.
*/
export async function enviar(dados) {
  try {
    const resposta = await fetch(urlProdutos, {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao enviar dados:', erro);
    throw erro;
  }
}

export async function remover(id) {
  try {
    const resposta = await fetch(`${urlProdutos}/${id}`, {
      method: 'DELETE',
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    if (!resposta.ok) {
      throw new Error('Erro ao deletar o item!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao deletar:', erro);
    throw erro;
  }
}

/*
  Exportação nomeada:
  export async function buscar() {
    // ...
  }

  Exportação da função buscar() com um nome explícito.
  Essa função deve ser importada usando exatamente esse nome:
  import { buscar } from './api.js';
  As chaves {} são obrigatórias em exportações nomeadas.
  Pode haver várias exportações nomeadas em um mesmo arquivo.
*/
export async function buscar() {
  try {
    const resposta = await fetch(urlProdutos);

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao ler dados:', erro);
    throw erro;
  }
}
