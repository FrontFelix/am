import {
  ArrowCircleDown,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";

interface Props {
  direction: string;
}

export default function ArrowIcon({ direction }: Props) {
  return (
    <span className="material-icons">
      {direction === "down" && <ArrowCircleDown />}
      {direction === "left" && <ArrowBackIos />}
      {direction === "right" && <ArrowForwardIos />}
    </span>
  );
}
