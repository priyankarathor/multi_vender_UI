import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
 


export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"), // Replace with the deployed production domain.
  title: "Amazon clone",
  description: "Premium E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
