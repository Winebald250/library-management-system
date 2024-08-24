import fetch from 'node-fetch';

const getTermEmbeddings = async (query) => {
    const apiKey = process.env.EMBEDDING_KEY;
    const url = process.env.EMBEDDING_URL+"/api/embeddings";

    const response = await fetch(url).then((res) => res.json());

    return response["embedding"];
};

export default getTermEmbeddings;
