import { Nunito } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import SearchModal from "@/components/modals/SearchModal";
import RentModal from "@/components/modals/RentModal";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "./globals.css";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";

export const metadata = {
  title: "BNB Hotel",
  description: "discover your favorite vacation",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
