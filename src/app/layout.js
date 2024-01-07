import "./globals.css";
import localFont from "next/font/local";
import { Inter, Big_Shoulders_Display } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

const bigShoulderDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-big-shoulder",
});
const velodrama = localFont({
  src: "../fonts/VelodromaBasic-Wide.otf",
  variable: "--font-velodrama",
  display: "swap",
});

export const metadata = {
  title: "Fathi Babayeju",
  description:
    "Fathi is a Frontend Engineer who is highly skilled in implementing design systems and passionate about building long-lasting solutions related to the web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${velodrama.variable} ${bigShoulderDisplay.variable} flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
