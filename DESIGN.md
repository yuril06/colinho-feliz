# DESIGN.md — Colinho Feliz

Design system do site, sorteado com a skill `design-taste-frontend`: direção **A página é o objeto**.
Feito primeiro para o celular. Conteúdo e cores moram em `src/config/escola.ts`.

## A ideia

> Neste site, **a agenda escolar que vai e volta na mochila** vira **a página inteira**.

A capa é a capa da agenda (com o logo de verdade), sobre a foto da sala. Cada serviço é uma folha da agenda
com a fileira de furos da espiral no alto (`ui/Espiral.tsx`). O rodapé é o verso de um cartão-postal, com
borda em ondinhas e o selo do logo.

**Elemento interativo:** "O que serve para o seu filho?" — idade + rotina escolar → as folhas indicadas
ganham a marca "Indicado para o seu filho" e viram links.

## Espaços de foto

Todo lugar de foto usa `ui/Foto.tsx`. Sem `src`, mostra um bloco liso (`--cor-foto`) com a legenda
"espaço para foto · …". Para colocar a foto, solte o arquivo em `public/escola/` e preencha o campo `foto`
correspondente no config (`hero.foto`, `servicos[].foto`, `cantinhos[].foto`, `dia[].foto`,
`fotosDuvidas`, `fotoFachada`).

| Lugar | Proporção |
| --- | --- |
| Capa (fundo) e fachada | tela cheia / 70% da altura no celular |
| Folhas de serviço | 4:3 no celular, meia folha no desktop |
| Cantinhos | 4:5 com etiqueta embaixo |
| Um dia na Colinho | 4:5, alturas que sobem e descem |
| Dúvidas | 3:4 alta + quadrada sobreposta |

## Cor

Tiradas do logo. Rosa `#D6336C` (botões, o "Colinho" do título) e `#EC4A86` (corações); roxo `#6A2FA0`
(o "Feliz", seção do dia, rodapé, calculadora); verde-água `#2BB3A6` (a camiseta do menino: corações e
etiquetas). Fundos claros por seção: rosa `#FFEFF5`, branco, lilás `#F3EAFB`, verde-água `#DDF4F1`.
Texto em roxo bem escuro `#3A1A50`. O botão flutuante segue o verde do WhatsApp.

## Tipo

**Fredoka** 500/600 nos títulos (a mesma letra gordinha e arredondada do logo) e **Nunito** 400/600/700 no
texto, pelo `next/font`. Cinco tamanhos: `t-display`, `t-titulo`, `t-lead`, `t-corpo`, `t-nota`.

## Forma

Cantos redondos (`--raio: 28px`) em fotos, folhas e cartões; botões em pílula. Marcadores de lista são
corações (`.coracao`) em rosa, roxo e verde-água. Sem linhas, sombras ou gradientes, fora o botão flutuante.

## Seções (ordem)

Capa → Serviços (calculadora + folhas) → Os cantinhos (grade de fotos com etiqueta) → Um dia na Colinho
(carrossel com barra de progresso) → Períodos e horários (como um cardápio) → Dúvidas (com fotos) →
Venha conhecer (cartão sobre a fachada, formulário que abre o WhatsApp) → Rodapé (cartão-postal).
