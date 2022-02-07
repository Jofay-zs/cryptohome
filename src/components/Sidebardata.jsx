import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const Sidebardata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Cryptocurrencies",
    icon: <AutoGraphIcon />,
    link: "/cryptocurrencies",
  },
  {
    title: "Exchanges",
    icon: <AccountBalanceIcon />,
    link: "/exchanges",
  },
  {
    title: "News",
    icon: <NewspaperIcon />,
    link: "/news",
  },
  {
    title: "Mentions",
    icon: <AssignmentIcon />,
    link: "/mentions",
  },
];
