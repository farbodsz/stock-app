import React from "react";
import Header from "./Header";
import LandingSection from "./LandingSection";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <LandingSection title="The Game" body="Lorem ipsum ..." alt={false} />
      <LandingSection title="About Us" body="Lorem ipsum ..." alt={true} />
      <LandingSection
        title="Something else"
        body="Lorem ipsum ..."
        alt={false}
      />
    </div>
  );
}
