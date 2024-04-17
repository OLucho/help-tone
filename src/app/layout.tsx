import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Salven a MArtin",
  description: "Martin te quiere vender un vapo",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark container">
        <main className="flex h-screen items-center justify-center py-8">{children}</main>
      </body>
    </html>
  );
}
