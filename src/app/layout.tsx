'use client'; 
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { GlobalStyle } from "./style/GlobalStyle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Insany-Shop</title>
        <link rel="icon" href="/img/Car.png" />
        <meta name="description" content="Loja Insany-Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <GlobalStyle />
        <CartProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
