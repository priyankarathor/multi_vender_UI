import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
 


export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"), // apna actual Vercel/live domain daalo
  title: "Amazon clone",
  description: "Premium E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
