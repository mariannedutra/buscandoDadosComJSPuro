// Simula uma função que busca dados em um servidor
function buscarUsuario(id) {
    console.log("Buscando dados do usuário...");
    // A Promise é a "promessa" de que os dados chegarão no futuro
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          const usuario = { id: 1, nome: "Ada Lovelace", email: "ada@email.com" };
          resolve(usuario); // A promessa foi cumprida!
        } else {
          reject("Usuário não encontrado."); // A promessa falhou.
        }
      }, 2000); // Simula 2s de espera
    });
  }
  
  // Função principal que orquestra a chamada
  async function main() {
    try {
      console.log("Iniciando a aplicação...");
      const usuario = await buscarUsuario(1); // Pausa AQUI até a Promise resolver
      console.log(`Usuário encontrado: ${usuario.nome} (${usuario.email})`);
      console.log("Aplicação finalizada.");
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  main();