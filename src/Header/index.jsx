import { HStack, Box, Image, Text } from "@chakra-ui/react";
import "./style.css";

export default function Header() {
  return (
    <HStack className="Header" spacing="4">
      <Box>
        <Image m="20px" mt="30px" src="title.svg" />
      </Box>

      <Box
        w="90px"
        h="110px"
        display="inline"
        fontWeight="bold"
        borderRadius="10px"
        backgroundColor="white"
        color="black"
      >
        <Text p={0} m={0} mt="5px" fontSize={16}>
          SCORE
        </Text>
        <Text display="inline" m={0} fontSize={55}>
          0
        </Text>
      </Box>
    </HStack>
  );
}
