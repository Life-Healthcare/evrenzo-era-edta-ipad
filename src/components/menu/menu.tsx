import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuWrapper, MenuItem } from "@/components/menu/menu.styles";

export default function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [prev, next] = React.useMemo(() => {
    return ["/", "/"];
  }, [pathname]);

  return (
    <MenuWrapper>
      <svg
        height="127.415"
        viewBox="0 0 510.935 127.415"
        width="510.935"
        xmlns="http://www.w3.org/2000/svg"
      >
        <MenuItem onClick={() => navigate(prev)}>
          <path
            d="m721.629 490.258h146.527l-50.966 127.415h-146.527z"
            fill="#004c2f"
            transform="translate(-670.663 -490.258)"
          />
          <path
            d="m45.869 22.935a22.935 22.935 0 1 1 -22.934-22.935 22.935 22.935 0 0 1 22.934 22.935zm-21.5-8.6a1.433 1.433 0 1 0 -2.867 0v13.74l-6.153-6.155a1.435 1.435 0 0 0 -2.03 2.03l8.6 8.6a1.433 1.433 0 0 0 2.03 0l8.6-8.6a1.435 1.435 0 1 0 -2.03-2.03l-6.152 6.155z"
            fill="currentColor"
            fillRule="evenodd"
            transform="matrix(0 1 -1 0 122.319 40.771)"
          />
        </MenuItem>

        <MenuItem onClick={() => navigate(next)}>
          <path
            d="m721.629 490.258h146.527l-50.966 127.415h-146.527z"
            fill="#004c2f"
            transform="translate(-513.942 -490.258)"
          />
          <path
            d="m45.869 22.935a22.935 22.935 0 1 1 -22.934-22.935 22.935 22.935 0 0 1 22.934 22.935zm-21.5-8.6a1.433 1.433 0 1 0 -2.867 0v13.74l-6.153-6.155a1.435 1.435 0 0 0 -2.03 2.03l8.6 8.6a1.433 1.433 0 0 0 2.03 0l8.6-8.6a1.435 1.435 0 1 0 -2.03-2.03l-6.152 6.155z"
            fill="currentColor"
            fillRule="evenodd"
            transform="matrix(0 -1 1 0 233.171 86.641)"
          />
        </MenuItem>

        <MenuItem onClick={() => navigate("/home")}>
          <path
            d="m721.629 490.258h146.527l-50.966 127.415h-146.527z"
            fill="#004c2f"
            transform="translate(-357.222 -490.258)"
          />
          <path
            d="m22.469 0-20.769 16.143v29.726h14.29v-17.945h12.959v17.945h14.29v-29.726z"
            fill="currentColor"
            transform="translate(385.114 40.771)"
          />
        </MenuItem>
      </svg>
    </MenuWrapper>
  );
}
