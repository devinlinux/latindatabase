import { Box, Text, Divider, VisuallyHidden, useColorModeValue } from '@chakra-ui/react'

export const WordBox = ({ children, word, id }) => (
    <Box w="100%" textAlign="center" borderWidth='1px' borderColor={useColorModeValue('#ABADB6', 'whiteAlpha.400')} borderRadius='1g' mt={4} mb={4} bg={useColorModeValue('whiteAlpha.500', 'whileAlpha.200')}>
        <Text mt={2} mb={2} fontSize={20}>
            {word}
        </Text>
        <Divider orientation='horizontal' borderColor={useColorModeValue('#ABADB6', 'whiteAlpha.400')}/>
        <Text mt={2} mb={2} fontSize={14}>
            {children}
        </Text>
        <VisuallyHidden>
            {id}
        </VisuallyHidden>
    </Box>
)