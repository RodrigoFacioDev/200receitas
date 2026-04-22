export type Recipe = {
  id: string;
  title: string;
  time: string;
  difficulty: string;
  image: string;
  category: string;
  macros: string;
};

export const heroRecipes: Recipe[] = [
  {
    id: "h1",
    title: "Panqueca de Aveia",
    time: "5 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    category: "Fibra+",
    macros: "310 kcal • 14g proteína"
  },
  {
    id: "h2",
    title: "Smoothie Verde Energy",
    time: "3 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1638176066959-e74e2b6e3bea?w=400&q=80",
    category: "Vegano",
    macros: "180 kcal • 4g proteína"
  }
];

export const solutionRecipes: Recipe[] = [
  {
    id: "s1",
    title: "Toast de Abacate com Ovo",
    time: "8 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
    category: "Proteico",
    macros: "320 kcal • 18g proteína"
  },
  {
    id: "s2",
    title: "Panqueca de Banana Fit",
    time: "12 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&q=80",
    category: "Sem Glúten",
    macros: "280 kcal • 12g proteína"
  },
  {
    id: "s3",
    title: "Muffin Salgado de Queijo",
    time: "20 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80",
    category: "Low Carb",
    macros: "250 kcal • 15g proteína"
  }
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  text: string;
  image: string;
  featured?: boolean;
  timeAgo?: string;
  highlight?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ana L.",
    location: "São Paulo, SP",
    text: "\"Parei de comer biscoito no café na pressa. As panquecas de aveia viraram meu ritual matinal. Rápidas e me deixam cheia até o almoço.\"",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80",
    timeAgo: "há 2 semanas"
  },
  {
    id: "t2",
    name: "Rafael M.",
    location: "Belo Horizonte, MG",
    text: "\"Perdi 4kg em 6 semanas só mudando a refeição da manhã. O melhor é que como muito melhor agora e não sinto que estou de dieta.\"",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    timeAgo: "há 1 mês"
  },
  {
    id: "t3",
    name: "Camila T.",
    location: "Rio de Janeiro, RJ",
    text: "\"Sou péssima na cozinha, nunca sei o que fazer. Mas o passo a passo simplificado é impossível de errar. Recomendo demais.\"",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    timeAgo: "há 3 semanas"
  },
  {
    id: "t4",
    name: "Juliana P.",
    location: "Curitiba, PR",
    text: "\"Economizei mais de R$ 180 em um mês só parando de comprar na padaria.\"",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
    featured: true,
    timeAgo: "há 1 mês"
  }
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "Preciso de ingredientes caros ou difíceis de encontrar?",
    answer: "Não. A proposta do guia é exatamente o oposto. Todas as receitas usam ingredientes de supermercado comum, sem frescuras ou produtos importados. Você provavelmente já tem boa parte deles na sua despensa agora."
  },
  {
    id: "f2",
    question: "Sou iniciante na cozinha. Consigo fazer?",
    answer: "Com certeza. As receitas foram pensadas para quem não tem tempo e nem habilidade avançada. O modo de preparo é detalhado, 100% focado na praticidade para qualquer iniciante acertar na primeira tentativa."
  },
  {
    id: "f3",
    question: "Funciona para quem tem intolerância ao glúten ou lactose?",
    answer: "Sim. O guia é bastante abrangente. Incluímos mais de 40 receitas sem glúten e mais de 30 sem lactose, claramente sinalizadas. Além disso, as receitas usam ingredientes comuns que podem ser facilmente substituídos conforme a sua necessidade."
  },
  {
    id: "f4",
    question: "Quanto tempo levo para ver resultado?",
    answer: "Isso varia de pessoa para pessoa, mas a maioria dos nossos clientes relata um aumento significativo de energia pela manhã e uma redução nos gastos com padarias em menos de 2 semanas aplicando o guia diariamente."
  },
  {
    id: "f5",
    question: "Como recebo o guia após a compra?",
    answer: "O acesso é imediato. Assim que o pagamento é confirmado (Pix e Cartão aprovam na hora), você recebe um e-mail com o acesso para baixar o seu e-book na mesma hora. Você pode abrir o arquivo no seu celular, tablet, computador, ou até mesmo imprimir."
  }
];
