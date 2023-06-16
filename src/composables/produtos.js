import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useProdutos() {
    const produtos = ref([]);
    const produto = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getProdutos = async () => {
        const response = await axios.get("produtos");
        produtos.value = response.data.data;
    };

    const getProduto = async (id) => {
        const response = await axios.get("produtos/" + id);
        produto.value = response.data.data;
    };

    const storeProdutos = async (data) => {
        try {
            await axios.post("produtos", data);
            router.push({name: "ProdutoIndex"});
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateProduto = async (id) => {
        try {
            await axios.put("produtos/" + id, produto.value);
            router.push({ name: "ProdutoIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }

    };

    const destroyProduto = async (id) => {
        if (!window.confirm("Tem certeza?")) {
            return;
        }
        await axios.delete("produtos/" + id);
        await getProdutos();
    }

    return {
        produto,
        produtos,
        getProduto,
        getProdutos,
        storeProdutos,
        updateProduto,
        destroyProduto,
        errors
    };
}