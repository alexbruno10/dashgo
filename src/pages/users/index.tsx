import { useState } from 'react';
import NextLink from 'next/link';

import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr,
  Text, 
  useBreakpointValue,
  Spinner,
  Link
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from '../../components/Header';
import { Sidebar } from "../../components/Sidebar";
import Pagination from '../../components/Pagination';


export default function UserList() {
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
          <Flex mb="8" justify="space-between" align="center">
            
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>

          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
                <Tr>
                    <Th px="6" color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuários</Th>
                    <Th>Data de cadastro</Th>
                    <Th w="8">Data de cadastro</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>
                        <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                        <Box>
                            <Text fontWeight="bold">Alex Bruno</Text>
                            <Text fontSize="sm" color="gray.300">alex.bruno@teste.com</Text>
                        </Box>
                    </Td>
                    <Td>22 de Agosto, 2022</Td>
                    <Td>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                        >
                            Editar
                        </Button>
                    </Td>
                </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
