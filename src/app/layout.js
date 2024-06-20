import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
  title: "Portfolio | Kazi Sami Ullah",
  description: "The portfolio site of Kazi Sami Ullah",
};
<script
  async
  src="node_modules/@material-tailwind/html/scripts/ripple.js"
></script>;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Navbar/> */}
      <body className={roboto.className}>
      <div className=" z-20 text-green-500 w-fit fixed">
        <Navbar />
      </div> 
      {children}
        
       
        
      </body>
    </html>
  );
}
