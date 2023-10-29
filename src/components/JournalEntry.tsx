import { Box, Text, Heading, HStack, BoxProps } from "@chakra-ui/react";
import NextLink from 'next/link';
import type { Journal } from "@types";


interface JournalEntryProps extends BoxProps {
    name: string;
    content: string;

}
export default function JournalEntry( {id, name, content }: JournalEntryProps) {
  return (
    <Box
        borderWidth={"1px"}
        borderRadius={"lg"}
        padding={"2vh"}
        width={"80%"}
        height={"100%"}
        boxShadow={"md"}
        borderColor={"gray.300"}
        justifyContent={"center"}
        display={"flex"}
        bgColor={"#965D4D"}
        _hover={{
            bgColor: "#632E1F",
            cursor: "pointer",
            transform: "scale(1.03); duration: 0.5s"
        }}
    >
        <HStack>
            <NextLink href={"/edit/" + name}>
                <Text>{name}...</Text>
            </NextLink>
        </HStack>
    </Box>
  );
}