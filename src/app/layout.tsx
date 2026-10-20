import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { escola } from "@/config/escola";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const fonteTitulo = Fredoka({ subsets: ["latin"], weight: ["500", "600"], variable: "--fonte-titulo", display: "swap" });
const fonteCorpo = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--fonte-corpo", display: "swap" });

const titulo = `${escola.nomeCompleto} | ${escola.endereco.cidade}`;
const capa = "/escola/logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(escola.siteUrl),
  title: titulo,
  description: escola.descricao,
  keywords: [
    "berçário",
    "recreação infantil",
    "contraturno escolar",
    "reforço escolar",
    "curso de férias",
    `berçário em ${escola.endereco.cidade}`,
    `berçário ${escola.endereco.bairro}`,
    "período integral",
    escola.nome,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: escola.siteUrl,
    siteName: escola.nomeCompleto,
    title: titulo,
    description: escola.descricao,
    images: [{ url: capa, width: 854, height: 1031, alt: `Logo da ${escola.nome}` }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: escola.cores.chao,
  width: "device-width",
  initialScale: 1,
};

/** Cores do config → CSS variables consumidas pelo Tailwind (ver globals.css). */
const cssVars = `:root{${Object.entries(escola.cores)
  .map(([k, v]) => `--cor-${k}:${v};`)
  .join("")}}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ChildCare", "Preschool"],
  name: escola.nomeCompleto,
  description: escola.descricao,
  url: escola.siteUrl,
  image: `${escola.siteUrl}${capa}`,
  telephone: `+${escola.contato.whatsapp}`,
  ...(escola.contato.email ? { email: escola.contato.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: escola.endereco.rua,
    addressLocality: escola.endereco.cidade,
    addressRegion: escola.endereco.estado,
    postalCode: escola.endereco.cep,
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: escola.endereco.latitude, longitude: escola.endereco.longitude },
  hasMap: escola.endereco.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: escola.horario.dias,
      opens: escola.horario.abre,
      closes: escola.horario.fecha,
    },
  ],
  ...(escola.contato.instagram ? { sameAs: [`https://instagram.com/${escola.contato.instagram}`] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fonteTitulo.variable} ${fonteCorpo.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        {/* Sem JavaScript, as entradas animadas não podem esconder o conteúdo */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
