/**
 * ============================================================================
 *  CONFIGURAÇÃO DA ESCOLA — o ÚNICO arquivo que você precisa editar.
 * ============================================================================
 *  Textos, contatos e cores do site. Regras visuais: DESIGN.md na raiz.
 *  Itens marcados com  // CONFIRMAR  são exemplos e precisam ser conferidos
 *  com a escola antes de publicar.
 * ============================================================================
 */

export const escola = {
  // ---------------------------------------------------------------------------
  // IDENTIDADE
  // ---------------------------------------------------------------------------
  nome: "Colinho Feliz",
  nomeCompleto: "Colinho Feliz – Berçário e Recreação Infantil",
  slogan: "Berçário e Recreação Infantil",
  frase: "Cuidando com amor, educando para o futuro.",
  descricao:
    "Berçário e recreação infantil na Vila Afonsina, em São Bernardo do Campo, para crianças a partir de 4 meses. Período integral ou meio período, contraturno escolar, reforço escolar e curso de férias.",
  siteUrl: "https://colinhofeliz.vercel.app", // CONFIRMAR domínio

  // ---------------------------------------------------------------------------
  // CORES — tiradas do logo: o rosa do "COLINHO" e dos corações, o roxo do
  // "FELIZ" e o verde-água da camiseta do menino.
  // ---------------------------------------------------------------------------
  cores: {
    chao: "#FFEFF5", // fundo rosa clarinho
    papel: "#FFFFFF", // folhas e cartões
    folha: "#F3EAFB", // lilás clarinho (dúvidas, folhas alternadas)
    agua: "#DDF4F1", // verde-água clarinho (períodos)
    foto: "#F9D2E1", // espaço reservado para foto
    tinta: "#3A1A50", // texto: roxo bem escuro
    suave: "#6B4F7C", // notas secundárias
    acento: "#D6336C", // botões: rosa do logo (texto branco)
    rosa: "#EC4A86", // rosa vivo: corações e detalhes
    roxo: "#6A2FA0", // seções escuras e títulos
    teal: "#2BB3A6", // verde-água da camiseta: detalhes
  },

  // ---------------------------------------------------------------------------
  // CONTATO E LOCALIZAÇÃO
  // ---------------------------------------------------------------------------
  contato: {
    /** WhatsApp só com números, com DDI 55 + DDD. */
    whatsapp: "5511960176301",
    whatsappExibicao: "(11) 96017-6301",
    /** Deixe "" para não exibir. */
    email: "",
    instagram: "",
  },
  endereco: {
    rua: "Rua Clemente José da Silva, 47",
    bairro: "Vila Afonsina",
    cidade: "São Bernardo do Campo",
    estado: "SP",
    cep: "09629-090",
    mapsUrl: "https://maps.app.goo.gl/15wh3K6VMfXrXhNG7",
    latitude: -23.6548576,
    longitude: -46.5672814,
  },
  horario: {
    exibicao: "Segunda a sexta, das 7h às 19h", // CONFIRMAR
    abre: "07:00",
    fecha: "19:00",
    /** 1 = segunda … 5 = sexta (usado no "aberto agora"). */
    diasNumero: [1, 2, 3, 4, 5],
    dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },

  // ---------------------------------------------------------------------------
  // HERO
  // ---------------------------------------------------------------------------
  hero: {
    /** Foto de fundo da capa (a sala do berçário, foto da escola). */
    foto: "/escola/sala.jpg",
    subtitulo:
      "Berçário e recreação infantil na Vila Afonsina, para crianças a partir de 4 meses. Um espaço acolhedor e seguro onde aprender, brincar e crescer caminham juntos.",
    cta: "Agendar uma visita",
  },

  // ---------------------------------------------------------------------------
  // SERVIÇOS — `idades` = faixa em anos completos (0 = menos de 1 ano)
  // `escola`: "nao" = para quem ainda não estuda; "sim" = para quem já estuda; "todos"
  // ---------------------------------------------------------------------------
  servicos: [
    {
      id: "bercario",
      foto: "/escola/exemplo/bercario.jpg", // EXEMPLO
      nome: "Berçário",
      idades: [0, 2],
      escola: "nao",
      texto: "Colo, sono e mamada no ritmo de cada bebê, num ambiente pensado para quem ainda engatinha.",
      fatos: [
        "a partir de 4 meses",
        "integral ou meio período",
        "com alimentação, soninho e trocas",
      ],
    },
    {
      id: "recreacao",
      foto: "/escola/exemplo/recreacao.jpg", // EXEMPLO
      nome: "Recreação infantil",
      idades: [2, 5],
      escola: "nao",
      texto: "Brincadeiras, música, arte e histórias com intenção pedagógica, para quem ainda não está na escola.",
      fatos: [
        "de 2 a 5 anos",
        "integral ou meio período",
        "atividades recreativas e pedagógicas",
      ],
    },
    {
      id: "contraturno",
      foto: "/escola/exemplo/contraturno.jpg", // EXEMPLO
      nome: "Contraturno escolar",
      idades: [2, 12],
      escola: "sim",
      texto: "No período oposto ao da escola: refeição, descanso, lição de casa acompanhada e tempo para brincar.",
      fatos: [
        "para quem já estuda",
        "de manhã ou à tarde",
        "com lição de casa acompanhada",
      ],
    },
    {
      id: "reforco",
      foto: "/escola/exemplo/reforco.jpg", // EXEMPLO
      nome: "Reforço escolar",
      idades: [6, 12],
      escola: "sim",
      texto: "Leitura, escrita e matemática revisadas com calma, em grupos pequenos, no ritmo da criança.",
      fatos: [
        "para o fundamental I",
        "dias combinados na visita",
        "pode ser contratado à parte",
      ],
    },
    {
      id: "ferias",
      foto: "/escola/exemplo/ferias.jpg", // EXEMPLO
      nome: "Curso de férias",
      idades: [2, 12],
      escola: "todos",
      texto: "Semanas temáticas com oficinas e brincadeiras enquanto a escola descansa.",
      fatos: [
        "em janeiro e julho",
        "para alunos e crianças de fora",
        "oficinas e brincadeiras temáticas",
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // UM DIA NA COLINHO — colunas do carrossel // CONFIRMAR horários
  // ---------------------------------------------------------------------------
  dia: [
    { nome: "Chegada", hora: "7h", texto: "Acolhida na porta, brincadeira livre no tapete e café da manhã às 8h.", foto: "/escola/exemplo/chegada.jpg" },
    { nome: "Manhã", hora: "9h", texto: "Atividades pedagógicas, arte, música e brincadeiras de movimento.", foto: "/escola/exemplo/manha.jpg" },
    { nome: "Almoço", hora: "11h", texto: "Almoço junto, na mesa do tamanho deles, comendo com autonomia.", foto: "/escola/exemplo/almoco.jpg" },
    { nome: "Soninho", hora: "12h", texto: "Descanso no ritmo de cada um. Quem vem no contraturno da manhã chega às 13h.", foto: "/escola/exemplo/soninho.jpg" },
    { nome: "Tarde", hora: "14h", texto: "Lição de casa e reforço, lanche às 15h e recreação com histórias, jogos e pintura.", foto: "/escola/exemplo/tarde.jpg" },
    { nome: "Saída", hora: "17h", texto: "Saída com o recado do dia, até as 19h.", foto: "/escola/exemplo/saida.jpg" },
  ],

  // ---------------------------------------------------------------------------
  // OS CANTINHOS — cada um com o espaço da sua foto (troque `foto` por "/escola/arquivo.jpg")
  // ---------------------------------------------------------------------------
  /** Foto da fachada no capítulo da visita. */
  fotoFachada: "/escola/exemplo/visita.jpg", // EXEMPLO: trocar pela fachada
  /** Fotos ao lado das dúvidas (alta e quadrada). */
  fotosDuvidas: ["/escola/exemplo/duvidas-alta.jpg", "/escola/exemplo/duvidas-quadrada.jpg"], // EXEMPLO

  cantinhos: [
    { nome: "Tapete de brincar", nota: "EVA macio", para: "berçário", foto: "/escola/tapete.jpg" },
    { nome: "Descanso dos bebês", nota: "cadeirinhas", para: "berçário", foto: "/escola/descanso.jpg" },
    { nome: "Cantinho dos brinquedos", nota: "estante baixa", para: "todas as idades", foto: "/escola/brinquedos.jpg" },
    { nome: "Refeitório", nota: "mesa do tamanho deles", para: "todas as idades", foto: "/escola/refeitorio.jpg" },
    { nome: "Mesa da lição", nota: "contraturno", para: "quem já estuda", foto: "/escola/exemplo/mesa-licao.jpg" },
    { nome: "Entrada", nota: "acolhida na porta", para: "Vila Afonsina", foto: "/escola/exemplo/entrada.jpg" },
  ],

  // ---------------------------------------------------------------------------
  // PERÍODOS // CONFIRMAR horários
  // ---------------------------------------------------------------------------
  periodos: {
    texto: "Você escolhe o período que cabe na rotina da família. Valores e condições, a gente mostra na visita.",
    opcoes: [
      { nome: "Integral", horario: "7h às 19h", texto: "café, almoço, soninho e lanche" },
      { nome: "Manhã", horario: "7h às 13h", texto: "para quem estuda à tarde" },
      { nome: "Tarde", horario: "13h às 19h", texto: "para quem estuda de manhã" },
    ],
  },

  // ---------------------------------------------------------------------------
  // VISITA
  // ---------------------------------------------------------------------------
  visita: {
    idades: ["Ainda vai nascer", "4 a 11 meses", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "6 a 8 anos", "9 a 12 anos"],
  },

  // ---------------------------------------------------------------------------
  // DÚVIDAS // CONFIRMAR respostas
  // ---------------------------------------------------------------------------
  faq: [
    {
      pergunta: "A partir de qual idade vocês recebem as crianças?",
      resposta: "A partir de 4 meses, no berçário. Para as maiores, há recreação, contraturno, reforço escolar e curso de férias.",
    },
    {
      pergunta: "Vocês têm período integral?",
      resposta: "Sim. Atendemos em período integral e em meio período, de manhã ou à tarde.",
    },
    {
      pergunta: "Como funciona o contraturno escolar?",
      resposta:
        "A criança passa com a gente o período em que não está na escola: faz as refeições, descansa, faz a lição de casa com acompanhamento e brinca.",
    },
    {
      pergunta: "O reforço escolar é só para quem faz o contraturno?",
      resposta: "Não. O reforço pode ser contratado à parte. Na visita, combinamos os dias e as matérias.",
    },
    {
      pergunta: "Quem pode participar do curso de férias?",
      resposta: "Alunos e também crianças de fora, que podem vir só nas semanas de férias.",
    },
    {
      pergunta: "Como funciona a adaptação?",
      resposta: "Aos poucos: nos primeiros dias a família pode ficar junto, e o tempo na escola cresce conforme a criança se sente segura.",
    },
    {
      pergunta: "Quais são os valores?",
      resposta: "Dependem do serviço e do período. Mande uma mensagem no WhatsApp ou agende uma visita para receber a tabela.",
    },
  ],
};

export type Escola = typeof escola;
export type Servico = (typeof escola.servicos)[number];
