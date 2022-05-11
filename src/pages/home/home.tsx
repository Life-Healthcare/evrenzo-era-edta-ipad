import React from "react";
import {
  HomeWrapper,
  HomeMenu,
  HomeMenuItem,
  HomeLogo,
  HomeIndicator,
  HomeNotice,
} from "@/pages/home/home.styles";
import Menu from "@/components/menu/menu";
import LegalNotice from "@/components/legal-notice/legal-notice";

export default function Home() {
  const menu = React.useMemo(() => {
    return [
      {
        color: "#007A33",
      },
      {
        color: "#43B02A",
      },
      {
        color: "#AD1AAC",
      },
      {
        color: "#4EC3E0",
      },
      {
        color: "#007A33",
      },
    ];
  }, []);

  return (
    <HomeWrapper>
      <HomeLogo src="./assets/logo.svg" alt="" />

      <HomeMenu>
        {menu.map((item, index) => {
          return (
            <HomeMenuItem
              key={index}
              style={{ backgroundColor: item.color }}
              to={`/page/${index + 1}`}
            >
              <img src={`./assets/home/menu/${index + 1}.svg`} alt="" />
            </HomeMenuItem>
          );
        })}
      </HomeMenu>

      <HomeIndicator src="./assets/home/indicator.svg" alt="" />

      <HomeNotice src="./assets/home/notice.svg" alt="" />

      <LegalNotice />

      <Menu prev="/" next="/page/1" />
    </HomeWrapper>
  );
}
