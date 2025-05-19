import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
  } from '@chakra-ui/react';
  
  export const InfoModalContent = ({ onClose }) => (
    <ModalContent>
      <ModalHeader>Diana v1 - Proyecto de Gobierno de Datos</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Este asistente fue desarrollado como parte del proyecto de Gobierno de Datos en Natura Chile.
        <br /><br />
        Para más información, contactar a:
        <br />
        <strong>Emerson Suárez:</strong> emersonsuarez@natura.net  
        <br />
        <strong>Sergio Herrera:</strong> sergioherrera.practia@natura.net
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose} colorScheme="blue">
          Cerrar
        </Button>
      </ModalFooter>
    </ModalContent>
  );
  
  export const ConfigModalContent = ({ onClose }) => (
    <ModalContent>
      <ModalHeader>Configuración</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Esta sección estará disponible próximamente.
        <br />
        <strong>¡Proximamente...!</strong>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose} colorScheme="gray">
          Cerrar
        </Button>
      </ModalFooter>
    </ModalContent>
  );
  