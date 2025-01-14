import conectarAoBanco from '../config/dbConfig.js';

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export default async function getTodosPosts() {
    // Selecion o banco de dados "imersao-instabyte"
    const db = conexao.db('imersao-instabyte');
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection('posts');
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
};
