// Arquivo temporario para testes
// Ficheiro: script.ts

import { musicaController } from "./src/domains/musicas/musicaController";
import prisma from "./config/client";

// Instancia o controller que vamos testar
const controller = new musicaController();

// (no mesmo ficheiro script.ts, depois da função main)

/**
 * Função que executa uma sequência de testes de erro.
 */
async function testarErros() {
  console.log("\n\n--- 🚀 INICIANDO TESTES DE CAMINHOS DE ERRO ---");
  const controller = new musicaController();

  // --- Cenário 1: Tentar criar música com dados inválidos ---
  console.log("\n🧪 Teste de Erro: Criar música sem 'nome'. Esperado: Erro.");
  // Note que o 'artistaId' aqui é inválido, mas a validação do nome deve ser acionada primeiro.
  await controller.criarMusica({
    nome: "",
    duracao: 180,
    artistaId: 999,
    genero: null,
    album: null,
  });

  console.log(
    "\n🧪 Teste de Erro: Criar música com um 'artistaId' que não existe. Esperado: Erro."
  );
  await controller.criarMusica({
    nome: "Música Fantasma",
    duracao: 180,
    artistaId: 999,
    genero: null,
    album: null,
  });

  // --- Cenário 2: Tentar buscar dados que não existem ---
  console.log(
    "\n🧪 Teste de Erro: Buscar música com ID que não existe (999). Esperado: Erro."
  );
  await controller.conseguirMusicaPorId(999);

  console.log(
    "\n🧪 Teste de Erro: Buscar música com nome que não existe ('xyz'). Esperado: Erro."
  );
  await controller.conseguirMusicasPorNome("xyz123abc");

  // --- Cenário 3: Tentar atualizar uma música que não existe ---
  console.log(
    "\n🧪 Teste de Erro: Atualizar música com ID que não existe (999). Esperado: Erro."
  );
  await controller.atualizarMusica(999, { nome: "Não vai funcionar" });

  // --- Cenário 4: Tentar deletar uma música que não existe ---
  console.log(
    "\n🧪 Teste de Erro: Deletar música com ID que não existe (999). Esperado: Erro."
  );
  await controller.deletarMusica(999);

  console.log("\n--- 🏁 TESTES DE ERRO FINALIZADOS ---");
}

async function main() {
  console.log("--- 🚀 INICIANDO SCRIPT DE TESTE ---");

  try {
    // --- 1. SETUP: CRIAR DADOS NECESSÁRIOS ---
    console.log("\n[SETUP] Criando um artista para o teste...");
    const artistaTeste = await prisma.artista.create({
      data: {
        nome: "As Máquinas Pensantes",
        foto: "https://example.com/foto.jpg",
      },
    });
    console.log(
      `✅ Artista de teste "${artistaTeste.nome}" criado com ID: ${artistaTeste.id}`
    );

    // --- 2. CREATE: TESTANDO A CRIAÇÃO DE MÚSICAS ---
    console.log("\n--- ✅ TESTE 1: CRIAR MÚSICAS ---");
    const musica1Data = {
      nome: "Sinfonia do Código",
      duracao: 240,
      genero: "Instrumental",
      album: "Compilação de Sucessos",
      artistaId: artistaTeste.id,
    };
    await controller.criarMusica(musica1Data);

    const musica2Data = {
      nome: "Balada do Bug",
      duracao: 180,
      genero: "Eletrônica",
      album: "Compilação de Sucessos",
      artistaId: artistaTeste.id,
    };
    await controller.criarMusica(musica2Data);

    // --- 3. READ: TESTANDO A LEITURA DE DADOS ---
    console.log("\n--- ✅ TESTE 2: LER MÚSICAS ---");
    console.log("\n➡️ Listando todas as músicas:");
    await controller.listarMusicas();

    // Para os próximos passos, precisamos do ID de uma música. Vamos buscá-la.
    const musicaParaAtualizar = await prisma.musica.findFirst({
      where: { nome: "Sinfonia do Código" },
    });
    if (!musicaParaAtualizar) {
      throw new Error(
        "Falha ao encontrar a música 'Sinfonia do Código' para testar."
      );
    }
    console.log(`\n➡️ Buscando música pelo ID ${musicaParaAtualizar.id}:`);
    await controller.conseguirMusicaPorId(musicaParaAtualizar.id);

    console.log("\n➡️ Buscando músicas pelo nome 'Balada':");
    await controller.conseguirMusicasPorNome("Balada");

    // --- 4. UPDATE: TESTANDO A ATUALIZAÇÃO ---
    console.log("\n--- ✅ TESTE 3: ATUALIZAR MÚSICA ---");
    console.log(
      `\n➡️ Atualizando o álbum da música ID ${musicaParaAtualizar.id}...`
    );
    await controller.atualizarMusica(musicaParaAtualizar.id, {
      album: "Compilação de Sucessos (Deluxe Edition)",
    });

    // --- 5. DELETE: TESTANDO A REMOÇÃO ---
    console.log("\n--- ✅ TESTE 4: DELETAR MÚSICA ---");
    const musicaParaDeletar = await prisma.musica.findFirst({
      where: { nome: "Balada do Bug" },
    });
    if (!musicaParaDeletar) {
      throw new Error(
        "Falha ao encontrar a música 'Balada do Bug' para testar."
      );
    }
    console.log(`\n➡️ Deletando a música ID ${musicaParaDeletar.id}...`);
    await controller.deletarMusica(musicaParaDeletar.id);

    // --- 6. VERIFICAÇÃO FINAL ---
    console.log("\n--- ✅ TESTE 5: VERIFICAÇÃO FINAL ---");
    console.log("\n➡️ Listando as músicas restantes após as operações:");
    await controller.listarMusicas();
    await testarErros();
  } catch (error: any) {
    console.error(`\n🚨 UM ERRO CRÍTICO OCORREU: ${error.message}`);
  } finally {
    // --- 7. CLEANUP: LIMPAR DADOS DE TESTE ---
    // É uma boa prática remover os dados criados para não sujar o banco de dados.
    console.log("\n[CLEANUP] Removendo dados de teste...");
    const artistaTeste = await prisma.artista.findFirst({
      where: { nome: "As Máquinas Pensantes" },
    });
    if (artistaTeste) {
      // Primeiro deletamos as músicas associadas a este artista
      await prisma.musica.deleteMany({
        where: { artistaId: artistaTeste.id },
      });
      // Depois deletamos o artista
      await prisma.artista.delete({
        where: { id: artistaTeste.id },
      });
      console.log("✅ Dados de teste removidos com sucesso.");
    }

    // Desconecta o cliente Prisma para que o script possa terminar.
    await prisma.$disconnect();
    console.log("\n--- 🏁 SCRIPT DE TESTE FINALIZADO ---");
  }
}

// Executa a função principal
main();
