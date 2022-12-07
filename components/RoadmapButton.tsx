import { Button } from "@chakra-ui/react";
type handleChangeFunction = (type: string) => void;
interface props {
  variant: string;
  icon: string;
  type: string;
  function: handleChangeFunction;
  dis: boolean;
}

export default function RoadmapButton(props: props) {
  return (
    <Button
      disabled={props.dis}
      onClick={() => props.function(props.type)}
      variant={props.variant}
    >
      <span className="material-icons">{props.icon}</span>
    </Button>
  );
}
