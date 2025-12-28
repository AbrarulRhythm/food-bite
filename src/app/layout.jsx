import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import CartProvider from "@/context/CartProvider";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | Food Bit',
    default: 'Best Food in City | Food Bit'
  },
  description: "Best Fast Food in City",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`} >
        <div className="site-main">
          <CartProvider>
            {/* Header */}
            <Header></Header>
            {/* Header End */}

            <main>
              {children}
            </main>

            {/* Footer */}
            <Footer></Footer>
            {/* Footer End */}
          </CartProvider>
        </div>
      </body>
    </html >
  );
}
