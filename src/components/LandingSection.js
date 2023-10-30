import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "../index.css";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const img = "https://i.pravatar.cc/150?img=7";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      size="2xl"
      name="Pete"
      src={img}
    />
    <Heading className="greeting" as="h3" fontSize="22px" >{greeting}</Heading>
    <VStack>
      <Text as="b" fontSize="6xl">{bio1}</Text>
      <Text as="b" fontSize="6xl">{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
