import { useState } from 'react';

import { 
  Box, 
  Divider, 
  Flex, 
  Heading, 
  HStack, 
  SimpleGrid, 
  useBreakpointValue,
  VStack,
  Button,

} from "@chakra-ui/react";

import { Header } from '../../components/Header';
import { Sidebar } from "../../components/Sidebar";
import { Input } from '../../components/Input';

export default function UserCreate() {
  const [page, setPage] = useState(1);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">

                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <Input name="name" label="Nome completo" />
                    <Input name="email" label="E-mail" />
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <Input name="password" label="Senha" />
                    <Input name="password_confirmation" label="Confirmação da senha" />
                </SimpleGrid>
                
            </VStack>

            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                    <Button colorScheme="whiteAlpha">Cancelar</Button>
                    <Button colorScheme="pink">Salvar</Button>
                </HStack>
            </Flex>

        </Box>
      </Flex>
    </Box>
  )
}
