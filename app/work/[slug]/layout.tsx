import Footer from "@/app/components/footer";
import Header from "@/app/components/nav";
import React from "react";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      {children}

      <div>
        <Footer />
      </div>
    </div>
  );
}
