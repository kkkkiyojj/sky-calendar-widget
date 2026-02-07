import "./globals.css";

export const metadata = {
  title: "Mini Calendar Widget",
  description: "Compact sky-toned date widget"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
