interface props {
  n: number;
  active: string;
}

export default function li({ n, active }: props) {
  return <li className={`step ${active}`}></li>;
}
