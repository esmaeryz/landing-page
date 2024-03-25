import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const MENU_OPTIONS = [
  {
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    text: "About",
    icon: <InfoIcon />,
  },
  {
    text: "Work",
    icon: <HelpOutlineIcon />,
  },
  {
    text: "Testimonials",
    icon: <CommentRoundedIcon />,
  },
  {
    text: "Contact",
    icon: <PhoneRoundedIcon />,
  },
  {
    text: "Cart",
    icon: <ShoppingCartRoundedIcon />,
  },
];

export { MENU_OPTIONS };
