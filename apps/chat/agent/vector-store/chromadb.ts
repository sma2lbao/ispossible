import { Chroma } from '@langchain/community/vectorstores/chroma';
import { OllamaEmbeddings } from '@langchain/ollama';

const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
})

export const chromaVectorStore = new Chroma(embeddings, {
    collectionName: '',
    url: 'http://localhost:8000',
    collectionMetadata: {
        "hnsw:space": "cosine"
    }
})