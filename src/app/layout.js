import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
 


export const metadata = {
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