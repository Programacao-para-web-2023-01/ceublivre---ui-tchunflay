"use client";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";
import { MdFavorite } from "react-icons/md";
import Footer from "./components/footer";
import IconLink from "./components/icon-link";
import { SearchBar } from "./components/search-bar";
import Sidebar from "./components/sidebar";
import { SidebarProvider } from "./context/sidebarcontext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row w-[100vw] h-[100vh]">
          <div className="w-full">
            <div className="header">
          <Sidebar />
              <SearchBar />
              <div className="flex flex-row justify-evenly">
                <IconLink path={"/"} Icon={HiUserCircle} />
                <IconLink path={"/"} Icon={MdFavorite} />
                <IconLink path={"/"} Icon={FaShoppingCart} size={49} />
              </div>
            </div>
          

          <SidebarProvider>{children}</SidebarProvider>

          
          <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
