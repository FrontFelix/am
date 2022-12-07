import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import FormStep from "./formStep";
import IconButton from "./RoadmapButton";
import Li from "./li";

export default function Roadmap() {
  const [active, setActive] = useState(1);
  const [disNext, setDisNext] = useState(false);
  const [disPrev, setDisPrev] = useState(false);
  const [steps] = useState([1, 2, 3, 4]);
  useEffect(() => {
    if (active === 1) {
      setDisPrev(true);
    } else if (active === steps.length) {
      setDisNext(true);
    } else {
      setDisNext(false);
      setDisPrev(false);
    }
  }, [active, steps.length]);
  const handleChange = (e: string) => {
    if (e === "next") {
      setActive(active + 1);
      if (active > steps.length) {
        setActive(steps.length);
      }
    } else if (e === "prev") {
      setActive(active - 1);
      if (active < 1) {
        setActive(1);
      }
    }
  };
  const progress = ((active - 1) / (steps.length - 1)) * 100 + "%";

  return (
    <Box mt={"2rem"}>
      {/* ROADMAP BAR */}
      <Flex mb={"1rem"}>
        <IconButton
          dis={disPrev}
          function={handleChange}
          type="prev"
          icon="arrow_back_ios"
          variant="iconWhiteTransparent"
        />
        <Box
          alignSelf={"center"}
          id="progress"
          sx={{ position: "relative", width: "90%" }}
        >
          <Box
            id="progress-bar"
            sx={{
              position: "absolute",
              background: "#D2AC47",
              height: "5px",
              width: progress,
              top: "50%",
              transition: "all .35s ease-in-out",
              left: 0.1,
            }}
          />
          <ul id="progress-num">
            <Li n={1} active={active === 1 ? "active" : ""} />
            <Li n={2} active={active === 2 ? "active" : ""} />
            <Li n={3} active={active === 3 ? "active" : ""} />
            <Li n={4} active={active === 4 ? "active" : ""} />
          </ul>
        </Box>
        <IconButton
          dis={disNext}
          function={handleChange}
          type="next"
          icon="arrow_forward_ios"
          variant="iconWhiteTransparent"
        />
      </Flex>
      {/* ROADMAP BAR */}
      {/* ROADMAP CONTENT */}
      <Box id="form">
        <FormStep
          headerText="Phase 1"
          subHeaderText="The Foundations"
          box1={{
            header: "Grow",
            text: "Building a fully organic community & a fresh and positive business growth.",
          }}
          box2={{
            header: "Brand",
            text: "Establishing our brand effectively and efficiently in the Whisky industry with some business partnerships.",
          }}
          box3={{
            header: "Artwork",
            text: "Ensuring the 5,000 NFT artwork is absolutely first class via our artists; finalists in the 2022 Scottish Design Competition.",
          }}
          box4={{
            header: "Team",
            text: "Fully doxxed Co-founders will bring in experienced team which includes artists, marketing & whisky experts, all with reputable knowledge.",
          }}
          active={active === 1 ? "active" : ""}
        />
        <FormStep
          headerText="Phase 2"
          subHeaderText="Albannach Mòr"
          box1={{
            header: "Pre Mint",
            text: "Leading up the minting process as a community, we will be hosting regular AMAs & twitter spaces. We will hold multiple events such as quizzes, giveaways & much more.",
          }}
          box2={{
            header: "Minting Stage",
            text: "As the minting stage approaches, we will be integrating Web3 implementations on AlbannachMòr.io. The integration will be completed & ready for holders to connect their wallet to unlock the premium perks of the Albannach Mòr membership.",
          }}
          box3={{
            header: "Reveal",
            text: "After the collection has been minted, a reveal will follow shortly with a trait & rarity partnership. There will be exciting hidden traits for holders to look closer for.",
          }}
          box4={{
            header: "Review",
            text: "As a business, we will gather all the information from the minting process. We will analyse the correct process to more forward in an efficient manor.",
          }}
          active={active === 2 ? "active" : ""}
        />
        <FormStep
          headerText="Phase 3"
          subHeaderText="The Foundations"
          box1={{
            header: "Grow",
            text: "Building a fully organic community & a fresh and positive business growth.",
          }}
          box2={{
            header: "Brand",
            text: "Establishing our brand effectively and efficiently in the Whisky industry with some business partnerships. ",
          }}
          box3={{
            header: "Artwork",
            text: "Ensuring the 5,000 NFT artwork is absolutely first class via our artists; finalists in the 2022 Scottish Design Competition.",
          }}
          box4={{
            header: "Team",
            text: "Fully doxxed Co-founders will bring in experienced team which includes artists, marketing & whisky experts, all with reputable knowledge.",
          }}
          active={active === 3 ? "active" : ""}
        />
        <FormStep
          headerText="Phase 4"
          subHeaderText="The Foundations"
          box1={{
            header: "Grow",
            text: "Building a fully organic community & a fresh and positive business growth.",
          }}
          box2={{
            header: "Brand",
            text: "Establishing our brand effectively and efficiently in the Whisky industry with some business partnerships. ",
          }}
          box3={{
            header: "Artwork",
            text: "Ensuring the 5,000 NFT artwork is absolutely first class via our artists; finalists in the 2022 Scottish Design Competition.",
          }}
          box4={{
            header: "Team",
            text: "Fully doxxed Co-founders will bring in experienced team which includes artists, marketing & whisky experts, all with reputable knowledge.",
          }}
          active={active === 4 ? "active" : ""}
        />
      </Box>
      {/* ROADMAP CONTENT */}
    </Box>
  );
}
