import React from "react";

// components...
import PageHeader from "../components/utils";
import Header from "../components/nav";
import Footer from "../components/footer";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="my-16">
        <PageHeader title="ABOUT" subtitle="About me" />
      </div>
      {children}

      <div>
        <Footer />
      </div>
    </div>
  );
}
