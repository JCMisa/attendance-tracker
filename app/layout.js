import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attendo",
  description: "Keep track of your students attendance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/attendo-logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
