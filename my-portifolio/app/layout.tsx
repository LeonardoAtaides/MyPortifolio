
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
