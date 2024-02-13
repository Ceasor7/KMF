import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Kenya Music Festival",
  description: "Welcome to Kenya music festival website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>     
    </html>
  );
}
