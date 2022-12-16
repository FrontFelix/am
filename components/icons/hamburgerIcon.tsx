import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
interface icon {
  state: boolean;
}
export default function HamburgerIcon({ state }: icon) {
  return (
    <span className="material-icons">
      {state ? <CloseIcon /> : <MenuIcon />}
    </span>
  );
}
