import "./globals.css";
import Header from "./header";

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
      <body className="overflow-x-hidden ">
        <div className="mx-auto font-tangerine w-[100vw] overflow-x-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
