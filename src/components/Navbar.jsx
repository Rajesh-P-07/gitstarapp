import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = ({handleClick}) => {

  return (
    <Box mt="5">
      <Box>
        <Flex justifyContent="center" gap="20">
          <Button
            borderRadius="20"
            bgColor="teal"
            color="white"
            onClick={() => handleClick("all")}
          >
            All
          </Button>
          <Button
            borderRadius="20"
            bgColor="teal"
            color="white"
            onClick={() => handleClick("javascript")}
          >
            Java Script
          </Button>
          <Button
            borderRadius="20"
            bgColor="teal"
            color="white"
            onClick={() => handleClick("html")}
          >
            HTML
          </Button>
          <Button
            borderRadius="20"
            bgColor="teal"
            color="white"
            onClick={() => handleClick("css")}
          >
            CSS
          </Button>
        </Flex>
      </Box>
      <Divider borderColor="gray" mt="3" />
    </Box>
  );
};

export default Navbar;
