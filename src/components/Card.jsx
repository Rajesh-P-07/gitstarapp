import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

const Card = ({
  id,
  owner,
  name,
  language,
  stargazers_count,
  forks_count,
  html_url,
}) => {
  return (
    <Box boxShadow="lg" padding="4">
      <Link href={html_url}>
        <Image src={owner.avatar_url} height="200px" width="200px" />
      </Link>

      <VStack>
        <Heading size="md">{name}</Heading>
        <Heading size="sm">{language}</Heading>
      </VStack>
      <Flex gap="10">
        <Box display="flex" alignItems="center" gap="2">
          <Icon as={AiFillStar} color="yellow.400" />
          <Text>{stargazers_count}</Text>
        </Box>
        <Box display="flex" alignItems="center" gap="2">
          <Icon as={CgGitFork} color="blue.400" />
          <Text>{forks_count}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
