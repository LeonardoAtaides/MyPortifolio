
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"
import { LanguageProvider } from "./context/language";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-montserrat",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable}  antialiased`}>
        <Providers>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
