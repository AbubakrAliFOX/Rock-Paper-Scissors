import { Box, Text, Link, Button, ButtonGroup } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <Box>
      <Text>
        Rock Paper Scissors Game -{" "}
        <Link href="https://portfolio-kfwr.onrender.com/" isExternal>
          Abubakr Ali <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <ButtonGroup gap="4">
        <Button>Reset</Button>
        <Button>Rules</Button>
      </ButtonGroup>
    </Box>
  );
}
