import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fathi Babayeju",
  description:
    "Fathi is a Frontend Engineer who is highly skilled in implementing design systems and passionate about building long-lasting solutions related to the web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Hessader</header>
        {children}
      </body>
    </html>
  );
}
