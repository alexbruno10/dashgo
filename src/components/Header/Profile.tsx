import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Alex Bruno</Text>
            <Text color="gray.300" fontSize="small">
                alex_brunoneri@hotmail.com
            </Text>
        </Box>

        <Avatar size="md" name="Alex Bruno" src="https://github.com/alexbruno10.png" />
    </Flex>
    );
}