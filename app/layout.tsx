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
      <body>
        <div className="mx-auto font-tangerine">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
