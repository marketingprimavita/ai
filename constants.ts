
import { Product, ProductCategory, GuidedCase, Achievement, PrimavitaTip } from './types';
import React from 'react'; // Import React for JSX in GuidedCase icons
import { SyringeIcon, BeakerIcon, SparklesIcon } from './components/icons/FeatureIcons'; // Example icons

export const PRIMAVITA_PRODUCTS: Product[] = [
  // Blocos CAD/CAM
  {
    id: "bloco_hibrido", name_pt: "Bloco Híbrido (Cerâmica e PMMA)", category: ProductCategory.BLOCOS_CADCAM,
    description_pt: "Blocos CAD/CAM híbridos combinando a estética da cerâmica com a facilidade de fresagem do PMMA.",
    image_url: "https://picsum.photos/seed/bloco_hibrido/150/150"
  },
  {
    id: "bloco_pmma_cadcam", name_pt: "Bloco PMMA CAD/CAM", category: ProductCategory.BLOCOS_CADCAM,
    description_pt: "Blocos de PMMA de alta qualidade para fresagem de coroas e pontes provisórias.",
    image_url: "https://picsum.photos/seed/bloco_pmma_cadcam/150/150"
  },
  {
    id: "bloco_cera_cadcam", name_pt: "Bloco de Cera CAD/CAM", category: ProductCategory.BLOCOS_CADCAM,
    description_pt: "Blocos de cera para fresagem, ideais para enceramentos diagnósticos e fundição.",
    image_url: "https://picsum.photos/seed/bloco_cera_cadcam/150/150"
  },
  {
    id: "bloco_clear_cadcam", name_pt: "Bloco Clear CAD/CAM", category: ProductCategory.BLOCOS_CADCAM,
    description_pt: "Blocos de material transparente para guias cirúrgicos e placas oclusais.",
    image_url: "https://picsum.photos/seed/bloco_clear_cadcam/150/150"
  },
  {
    id: "bloco_orto_cadcam", name_pt: "Bloco Orto CAD/CAM", category: ProductCategory.BLOCOS_CADCAM,
    description_pt: "Blocos específicos para aplicações ortodônticas fresadas.",
    image_url: "https://picsum.photos/seed/bloco_orto_cadcam/150/150"
  },
  {
    id: "bloco_pom_cadcam", name_pt: "Bloco POM CAD/CAM", category: ProductCategory.BLOCOS_CADCAM,
    description_pt: "Blocos de Polioximetileno (POM) para estruturas flexíveis e provisórios de longa duração.",
    image_url: "https://picsum.photos/seed/bloco_pom_cadcam/150/150"
  },
  // Dentes Acrílicos
  {
    id: "dente_primavita_3c", name_pt: "Dente Primavita 3 Camadas (3C)", category: ProductCategory.DENTES_ACRILICOS,
    description_pt: "Dentes acrílicos de três camadas com estética natural e alta resistência.",
    image_url: "https://picsum.photos/seed/dente_primavita_3c/150/150"
  },
  {
    id: "dente_primavita_2c", name_pt: "Dente Primavita 2 Camadas (2C)", category: ProductCategory.DENTES_ACRILICOS,
    description_pt: "Dentes acrílicos de duas camadas, combinando qualidade e economia.",
    image_url: "https://picsum.photos/seed/dente_primavita_2c/150/150"
  },
  {
    id: "dente_primalux", name_pt: "Dente Primalux", category: ProductCategory.DENTES_ACRILICOS,
    description_pt: "Dentes acrílicos com excelente estética e durabilidade para próteses.",
    image_url: "https://picsum.photos/seed/dente_primalux/150/150"
  },
  // Resinas Acrílicas e Líquidos
  {
    id: "resina_termo", name_pt: "Resina Acrílica Termopolimerizável", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Resina acrílica para base de próteses, polimerizável por calor. Disponível em diversas cores.",
    image_url: "https://picsum.photos/seed/resina_termo/150/150"
  },
  {
    id: "resina_auto", name_pt: "Resina Acrílica Autopolimerizável", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Resina acrílica para reparos e reembasamentos, de polimerização rápida.",
    image_url: "https://picsum.photos/seed/resina_auto/150/150"
  },
  {
    id: "resina_flex", name_pt: "Resina Flexível", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Resina para próteses parciais flexíveis, oferecendo conforto e estética.",
    image_url: "https://picsum.photos/seed/resina_flex/150/150"
  },
  {
    id: "liquido_termo", name_pt: "Líquido para Resina Termopolimerizável", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Monômero para uso com resinas acrílicas termopolimerizáveis Primavita.",
    image_url: "https://picsum.photos/seed/liquido_termo/150/150"
  },
  {
    id: "liquido_auto", name_pt: "Líquido para Resina Autopolimerizável", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Monômero para uso com resinas acrílicas autopolimerizáveis Primavita.",
    image_url: "https://picsum.photos/seed/liquido_auto/150/150"
  },
  {
    id: "resina_color", name_pt: "Resina Acrílica Color (Pigmentos)", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Pigmentos para caracterização e coloração de resinas acrílicas.",
    image_url: "https://picsum.photos/seed/resina_color/150/150"
  },
  {
    id: "resina_lay", name_pt: "Resina Lay", category: ProductCategory.RESINAS_ACRILICAS,
    description_pt: "Resina especializada para criação de attachments ou outras aplicações específicas.",
    image_url: "https://picsum.photos/seed/resina_lay/150/150"
  },
  // Ceras e Placas Base
  {
    id: "ceras_odontologicas", name_pt: "Ceras Odontológicas Diversas", category: ProductCategory.CERAS,
    description_pt: "Gama de ceras para modelagem, escultura, utilidade e periférica.",
    image_url: "https://picsum.photos/seed/ceras_odontologicas/150/150"
  },
  {
    id: "placa_base", name_pt: "Placa Base", category: ProductCategory.CERAS,
    description_pt: "Placas para confecção de moldeiras individuais e planos de cera.",
    image_url: "https://picsum.photos/seed/placa_base/150/150"
  },
  // Ligantes e Glaze
  {
    id: "binder_primavita", name_pt: "Binder Primavita", category: ProductCategory.LIGANTES_GLAZE,
    description_pt: "Agente de ligação para preparo de superfícies antes da aplicação de glaze ou resinas.",
    image_url: "https://picsum.photos/seed/binder_primavita/150/150"
  },
  {
    id: "glaze_primavita", name_pt: "Glaze Primavita", category: ProductCategory.LIGANTES_GLAZE,
    description_pt: "Verniz de selamento superficial para brilho e proteção de resinas.",
    image_url: "https://picsum.photos/seed/glaze_primavita/150/150"
  },
  // Opacificadores
  {
    id: "opacificador_primavita", name_pt: "Opacificador Primavita", category: ProductCategory.ISOLANTES_OPACIFICADORES,
    description_pt: "Opacificador para mascarar estruturas metálicas ou descolorações.",
    image_url: "https://picsum.photos/seed/opacificador_primavita/150/150"
  },
  // Abrasivos e Polidores
  {
    id: "polimento_bastaopasta", name_pt: "Bastão e Pasta para Polimento/Acabamento", category: ProductCategory.ABRASIVOS,
    description_pt: "Conjunto de bastões e pastas para polimento de resinas e metais, garantindo alto brilho.",
    image_url: "https://picsum.photos/seed/polimento_bastaopasta/150/150"
  },
  // Removedores e Limpadores
  {
    id: "removedor_cera", name_pt: "Removedor de Cera", category: ProductCategory.REMOVEDORES_LIMPADORES,
    description_pt: "Solução eficaz para remoção de resíduos de cera de modelos e instrumentos.",
    image_url: "https://picsum.photos/seed/removedor_cera/150/150"
  },
  // Acessórios e Kits
  {
    id: "kit_caracterizacao", name_pt: "Kit de Caracterização para Resinas", category: ProductCategory.ACESSORIOS,
    description_pt: "Kit completo com pigmentos e materiais para caracterização estética de próteses.",
    image_url: "https://picsum.photos/seed/kit_caracterizacao/150/150"
  },
  {
    id: "gaveteiro_organizador", name_pt: "Gaveteiro Organizador", category: ProductCategory.ACESSORIOS,
    description_pt: "Gaveteiro para organização de dentes, brocas e pequenos materiais de laboratório.",
    image_url: "https://picsum.photos/seed/gaveteiro_organizador/150/150"
  }
];


export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: "beginner_tech", name_pt: "Técnico Iniciante", description_pt: "Você iniciou sua jornada com o assistente Primavita!", icon: "🔰", points_required: 10, unlocked: false },
  { id: "resin_explorer", name_pt: "Explorador de Resinas", description_pt: "Você aprendeu sobre nossas resinas acrílicas!", icon: "🧪", points_required: 30, unlocked: false },
  { id: "case_solver", name_pt: "Solucionador de Casos", description_pt: "Completou seu primeiro caso clínico guiado!", icon: "🧩", points_required: 50, unlocked: false },
  { id: "primavita_adept", name_pt: "Adepto Primavita", description_pt: "Você está se tornando um expert nos produtos Primavita!", icon: "💡", points_required: 100, unlocked: false },
  { id: "primavita_expert", name_pt: "Expert Primavita", description_pt: "Parabéns! Você é um especialista Primavita!", icon: "🌟", points_required: 150, unlocked: false },
];

export const PRIMAVITA_TIPS: PrimavitaTip[] = [
  { key: "dica_resina_auto", text_pt: "Nossa Resina Acrílica Autopolimerizável é ideal para reparos rápidos e eficientes, economizando tempo no laboratório! ⏱️", emoji: "💡"},
  { key: "dica_polimento_geral", text_pt: "Para um brilho espelhado em suas resinas e metais, utilize nosso Bastão e Pasta de Polimento com uma escova de feltro em baixa rotação. ✨", emoji: "💡"},
  { key: "dica_blocos_pmma", text_pt: "Os Blocos PMMA CAD/CAM são perfeitos para provisórios de longa duração, combinando estética e resistência. 💪", emoji: "💡"},
];


export const GUIDED_CASES: GuidedCase[] = [
  {
    id: "caso_protese_parcial_removivel",
    name_pt: "Prótese Parcial Removível (PPR)",
    description_pt: "Guia para confecção de uma PPR com grampos.",
    start_step_id: "ppr_passo1",
    icon: React.createElement(BeakerIcon, { className: "w-8 h-8 text-primavita-primaryblue" }),
    steps: {
      "ppr_passo1": {
        id: "ppr_passo1",
        bot_question_pt: "Olá! Vamos iniciar a confecção de uma Prótese Parcial Removível (PPR). Qual o tipo de material você prefere para a estrutura?",
        options: [
          { text_pt: "Liga de CoCr (Tradicional)", next_step_id: "ppr_passo2_cocr", points: 10 },
          { text_pt: "Resina Flexível (sem metal)", next_step_id: "ppr_passo2_flex", points: 10, product_recommendation_id: "resina_flex" },
        ],
      },
      "ppr_passo2_cocr": {
        id: "ppr_passo2_cocr",
        bot_question_pt: "Excelente escolha para durabilidade! ⚙️ Agora, qual o próximo passo após o planejamento e preparo do modelo?",
        options: [
          { text_pt: "Enceramento da estrutura", next_step_id: "ppr_passo3_enceramento", product_recommendation_id: "ceras_odontologicas", points: 10 },
          // Option for duplication removed as silicones are not in the current product list
        ],
      },
      "ppr_passo2_flex": {
        id: "ppr_passo2_flex",
        bot_question_pt: "Resinas flexíveis oferecem estética e conforto! Qual o próximo passo?",
        options: [
          { text_pt: "Seleção de dentes", next_step_id: "ppr_passo3_dentes_flex", product_recommendation_id: "dente_primavita_3c", points: 10 },
          { text_pt: "Processamento da resina flexível", next_step_id: "ppr_passo_final", points: 15, achievement_unlock_id: "resin_explorer", product_recommendation_id: "resina_flex"},
        ],
      },
       "ppr_passo3_enceramento": {
        id: "ppr_passo3_enceramento",
        bot_question_pt: "Ótimo! O enceramento é crucial. Nossa linha de Ceras Odontológicas é ideal para isso.",
        options: [
          { text_pt: "Prosseguir para fundição/inclusão", next_step_id: "ppr_passo_final", product_recommendation_id: "ceras_odontologicas", points: 10, tip_key: "dica_blocos_pmma" },
        ],
      },
      // ppr_passo3_duplicacao is removed
      "ppr_passo3_dentes_flex": {
        id: "ppr_passo3_dentes_flex",
        bot_question_pt: "A seleção dos dentes é fundamental para a estética. Qual linha de dentes Primavita você escolheria?",
        options: [
          { text_pt: "Dentes Primavita 3C", next_step_id: "ppr_passo_final", product_recommendation_id: "dente_primavita_3c", points: 10, tip_key: "dica_resina_auto" },
          { text_pt: "Dentes Primalux", next_step_id: "ppr_passo_final", product_recommendation_id: "dente_primalux", points: 10, tip_key: "dica_resina_auto" },
        ],
      },
      "ppr_passo_final": {
        id: "ppr_passo_final",
        bot_question_pt: "Parabéns por concluir as etapas deste caso de PPR! Continue explorando para se tornar um Expert Primavita! 🏆",
        is_final_step: true,
        achievement_unlock_id: "case_solver"
      }
    },
  },
  {
    id: "caso_coroa_provisoria",
    name_pt: "Coroa Provisória em PMMA",
    description_pt: "Passos para fresagem de uma coroa provisória.",
    start_step_id: "pmma_passo1",
    icon: React.createElement(SparklesIcon, { className: "w-8 h-8 text-primavita-blue" }), // Kept as secondary blue for variety
    steps: {
      "pmma_passo1": {
        id: "pmma_passo1",
        bot_question_pt: "Vamos criar uma coroa provisória com PMMA CAD/CAM. Qual bloco PMMA CAD/CAM Primavita você selecionaria para um dente anterior superior?",
        options: [
          { text_pt: "Bloco PMMA Monocamada Cor A2", next_step_id: "pmma_passo2", product_recommendation_id: "bloco_pmma_cadcam", points: 10, tip_key: "dica_blocos_pmma"},
          { text_pt: "Bloco PMMA Multicamada Cor A2 (se disponível)", next_step_id: "pmma_passo2", product_recommendation_id: "bloco_pmma_cadcam", points: 15, tip_key: "dica_blocos_pmma"},
        ],
      },
      "pmma_passo2": {
        id: "pmma_passo2",
        bot_question_pt: "Após a fresagem, qual o próximo passo para finalizar a coroa provisória?",
        options: [
          { text_pt: "Polimento", next_step_id: "pmma_passo_final", product_recommendation_id: "polimento_bastaopasta", points: 10, tip_key: "dica_polimento_geral"},
          { text_pt: "Glaze (Maquiagem)", next_step_id: "pmma_passo_final", product_recommendation_id: "glaze_primavita", points: 10, tip_key: "dica_polimento_geral"},
        ],
      },
      "pmma_passo_final": {
        id: "pmma_passo_final",
        bot_question_pt: "Excelente! Sua coroa provisória está pronta para brilhar. ✨ Continue assim!",
        is_final_step: true,
        achievement_unlock_id: "case_solver"
      }
    }
  },
];

export const SYSTEM_INSTRUCTION_GEMINI = `Você é um assistente virtual especialista da Primavita, uma marca de produtos para laboratórios de prótese dentária. Suas respostas devem ser em Português do Brasil, amigáveis, técnicas, mas sem jargões excessivamente complicados. Use emojis como 🔬🦷⚙️🏆 quando apropriado. Forneça informações úteis e dicas sobre produtos Primavita (listados em seu conhecimento) e técnicas de prótese dentária. Se você não souber a resposta para uma pergunta específica sobre um produto Primavita que não esteja na lista fornecida, ou um procedimento muito técnico que não esteja em seu conhecimento, admita gentilmente e sugira consultar o catálogo ou um especialista técnico da Primavita. Não invente informações sobre produtos não listados. Foque em ajudar o usuário com dúvidas gerais e dicas sobre a gama de produtos fornecida. A gama de produtos Primavita que você conhece inclui: Blocos CAD/CAM (Híbrido, PMMA, Cera, Clear, Orto, POM), Dentes Acrílicos (Primavita 3C, 2C, Primalux), Resinas Acrílicas (Termo, Auto, Flex, Líquidos, Color, Lay), Ceras Odontológicas, Placa Base, Ligantes (Binder), Opacificadores, Glaze, Polimento (Bastão e Pasta), Removedor de Cera, Acessórios (Kit Caracterização, Gaveteiro).`;
