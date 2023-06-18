import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import { Ggradient } from "@/components/gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salim Diallo",
  description: "Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pb-1">
        <div className=" mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
