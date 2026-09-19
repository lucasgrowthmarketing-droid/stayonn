# ONN

Landing page em Next.js App Router, TypeScript, Tailwind CSS e Framer Motion.

## Executar

`npm ci` e `npm run dev`. Para gerar o build de produção: `npm run build`.

## Edição

- `data/pricing.ts`: opções, valores e periodicidade. Preços fornecidos: R$ 89, R$ 249 e R$ 199/mês.
- `data/content.ts`: marca, produto, ecossistema, links do rodapé e redes oficiais.
- `components/`: um arquivo por seção; textos organizados junto à seção correspondente.
- `app/globals.css`: cores, tipografia, espaçamentos, versões mobile e redução de movimento.
- `public/onn-logo.png`: recorte fiel do manual fornecido; sem redesenho e sem mudança de proporções.
- `public/onn-icon.png`: símbolo original recortado do manual, usado no favicon.
- `public/onn-work-original.webp`: produto do manual; embalagem ilustrativa.

## Checkout

`lib/checkout.ts` define CheckoutProvider, CheckoutRequest e CheckoutResult. O adaptador atual retorna indisponibilidade, não envia dados, não armazena informações pessoais e não cria pedidos ou cobranças. O frontend oferece PIX e cartão, valida campos e CPF, mantém foco dentro do diálogo e devolve foco ao botão de origem.

Para Mercado Pago: implementar um Route Handler ou backend HTTPS que receba planId e dados, valide preço pelo catálogo no servidor, calcule frete e crie a sessão. Token secreto apenas no servidor. Confirmar pagamento por webhook assinado e idempotente. Não confiar em valores do navegador.

Antes de vender: definir quantidade e condições da assinatura, frete, conteúdo final do produto, links sociais, suporte e políticas. Não foram inventadas avaliações, certificações, vendas ou benefícios médicos.

## Marca e imagens

O manual com ONN (dois N) é a referência da logo principal. A prancha do Onyx tem ON (um N); o mascote preserva esse detalhe do desenho fornecido, sem substituir a marca principal.

As cenas `hero-dusk.webp`, `earth.webp` e `onyx.webp` foram preparadas com a ferramenta integrada de imagens a partir das referências do usuário. Prompts resumidos: notebook e garrafa pretos diante da cidade no fim do dia, espaço negativo à esquerda; curva da Terra à direita com atmosfera azul e luzes urbanas, sem texto; isolar o mascote central Onyx em fundo preto preservando pose, rosto e moletom. Logo e favicon são recortes diretos, não geração.

## Interações

Carrossel com swipe e scroll snap, navegação mobile, preços e resumo reativos, demonstração de hábitos ONN OS, checkout drawer/bottom sheet, suporte expansível, revelação por scroll, parallax discreto e glow apenas em desktop. Respeita prefers-reduced-motion.

WebMCP opcional: configure_onn_order altera a seleção visível, sem finalizar pedidos. Detecta suporte do navegador e valida o plano.

## Verificação

Revisado em 390px e 1440px; sem overflow horizontal. TypeScript, auditoria automática de acessibilidade, fluxo de formulário com dados fictícios, CPF, redução de movimento e WebMCP com entrada válida/inválida. Auditoria automática não substitui revisão humana; contraste sobre imagens foi revisado visualmente.
