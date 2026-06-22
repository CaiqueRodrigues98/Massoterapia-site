import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";

const titleFont = Lora({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Massoterapeuta em Sao Paulo | Espaco Terapeutico Harmonia",
  description:
    "Massoterapia personalizada em Sao Paulo para alivio de dores, reducao de estresse e bem-estar. Agende sua sessao pelo WhatsApp.",
  keywords: [
    "massoterapia",
    "massagem relaxante",
    "massagem modeladora",
    "massoterapeuta em Sao Paulo",
    "alivio de dores",
  ],
  openGraph: {
    title: "Espaco Terapeutico Harmonia",
    description:
      "Atendimento de massoterapia com tecnicas personalizadas e agendamento rapido via WhatsApp.",
    url: "https://espacoharmonia.com.br",
    siteName: "Espaco Terapeutico Harmonia",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://espacoharmonia.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${titleFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
