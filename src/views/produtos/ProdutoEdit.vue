<script setup>
import useProdutos from '../../composables/produtos';
import { onMounted } from 'vue';
const { produto, getProduto, updateProduto, errors } = useProdutos();

const props = defineProps({
  id: {
    required: true,
    type: String,
  }
});

onMounted(() => getProduto(props.id));

</script>

<template>
 <div class="mt-12"> 
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateProduto($route.params.id)">
        <div class="space-y-6">
            <div class="mb-6">
                <label for="nome" class="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                <input type="text" id="nome" v-model="produto.nome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required>
                <div v-if="errors.nome">
                    <span class="text-sm text-red-400">{{ errors.nome[0] }}</span>
                </div>
            </div>
           
            <div class="mb-6">
                <label for="descricao" class="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
                <input type="text" id="descricao" v-model="produto.descricao" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " required>
                <div v-if="errors.descricao">
                    <span class="text-sm text-red-400">{{ errors.descricao[0] }}</span>
                </div>
            </div>
            <div>
                <label for="preco" class="block mb-2 text-sm font-medium text-gray-900 ">Preço</label>
                <input type="tel" id="preco" v-model="produto.preco" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="R$" required>
                    <div v-if="errors.preco">
                            <span class="text-sm text-red-400">{{ errors.preco[0] }}</span>
                    </div>
            </div>
        </div>
        <div class="mt-4">
            <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Atualizar</button>
        </div>
    </form>
 </div>
</template>
