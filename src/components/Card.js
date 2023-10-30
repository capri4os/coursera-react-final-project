import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack className="project-card">
      <Image className="project-img" src={imageSrc} alt={title} ></Image>
      <div>
        <Heading className="project-heading" as="h3" size="md">{title}</Heading>
        <Text className="project-description" size="md">{description}</Text>
        <HStack>
          <Text className="project-link">
            See more
            <FontAwesomeIcon className="project-link-icon" icon={faArrowRight} size="1x" />
          </Text>
        </HStack>
      </div>
    </VStack>
  )
};

export default Card;
