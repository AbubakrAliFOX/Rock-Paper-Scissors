import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  Center
} from "@chakra-ui/react";
import { useState } from "react";

export default function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton maxW={20} ml='auto' mr={30}/>
            <ModalBody>
              <Center>
              <Image mt='150px' maxW={600} src="rules.png"></Image>
              </Center>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mx='auto' mt={50} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }