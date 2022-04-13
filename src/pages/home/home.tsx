import React from "react";
import { HomeWrapper } from "@/pages/home/home.styles";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <HomeWrapper>
      <h1>Home</h1>
      <Menu />
    </HomeWrapper>
  );
}
