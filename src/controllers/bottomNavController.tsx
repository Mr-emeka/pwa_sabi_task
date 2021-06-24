import React, { ReactElement } from "react";

import MenuItem from "../types/bottomNav.model";
import { ReactComponent as Home } from "../assets/svg/bottomNav/home.svg";
import { ReactComponent as Buy } from "../assets/svg/bottomNav/buy.svg";
import { ReactComponent as Deals } from "../assets/svg/bottomNav/deals.svg";
import { ReactComponent as HamBurger } from "../assets/svg/bottomNav/hamburger.svg";
import { ReactComponent as Wallet } from "../assets/svg/bottomNav/wallet.svg";

export const bottomNav: Array<MenuItem> = [
  { key: "router-home", title: "Home", icon: (props: any): ReactElement => <Home {...props} />, path: "/" },
  { key: "router-buy", title: "Buy", icon: (props: any): ReactElement => <Buy {...props} />, path: "/" },
  { key: "router-deals", title: "Deals", icon: (props: any): ReactElement => <Deals {...props} />, path: "/" },
  { key: "router-wallet", title: "Wallet", icon: (props: any): ReactElement => <Wallet {...props} />, path: "/" },
  { key: "router-more", title: "More", icon: (props: any): ReactElement => <HamBurger {...props} />, path: "/" },
];
