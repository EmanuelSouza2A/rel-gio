let tempoAtual;

/**
 * Captura os valores dos inputs e define a nova data/hora do sistema
 */
function configurarRelogio() {
    const dataVal = document.getElementById('inputData').value;
    const horaVal = document.getElementById('inputHora').value;
    
    // Cria o objeto de data baseado nos inputs
    tempoAtual = new Date(`${dataVal}T${horaVal}`);
}

// Evento do botão
document.getElementById('btnAtualizar').addEventListener('click', configurarRelogio);

/**
 * Função que atualiza o relógio a cada segundo
 */
function atualizar() {
    if (!tempoAtual) return;

    // Adiciona 1 segundo ao contador interno
    tempoAtual.setSeconds(tempoAtual.getSeconds() + 1);

    // Formata a Hora
    const h = String(tempoAtual.getHours()).padStart(2, '0');
    const m = String(tempoAtual.getMinutes()).padStart(2, '0');
    const s = String(tempoAtual.getSeconds()).padStart(2, '0');

    // Formata a Data por extenso
    const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
    const dataFormatada = tempoAtual.toLocaleDateString('pt-BR', opcoes);

    // Atualiza o DOM
    document.getElementById('relogio').textContent = `${h}:${m}:${s}`;
    document.getElementById('data').textContent = dataFormatada;
}

// Inicializa o relógio com os valores padrão (23:59:00 de 19/02/2026)
configurarRelogio();

// Inicia o loop de 1 segundo
setInterval(atualizar, 1000);
