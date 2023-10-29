import { NextPage } from "next";
import NextLink from "next/link"
import { Center, Text, Heading, VStack, Input, Button, useToast, useDisclosure } from "@chakra-ui/react"
import Loading from "@components/Loading"
import { useState, useRef, useEffect } from "react"
import {Journal} from "@types"
import JournalEntry from "@components/JournalEntry";
import { getJournal } from "@utils/api";

export default function Journal() : NextPage {
    const [num, setNum] = useState<number>(0);
    const [journals, setJournals] = useState<Journal[]>([]);
    useEffect(() => {
        console.log('asdasd');
        const getJournals = async () => {
            const req = await getJournal({username: 'Waylon'});
            setJournals(req);
        }
        getJournals();
    }
    , []);
    // make div space the journals from the top of the screen
    return (
        <VStack display={"flex"}>
            <div
                style={{
                    height: "5vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >

            </div>
        {journals.map((journal) => {
                return (
                    <JournalEntry key={journal.id} content={journal.content} name={journal.name} padding={"4vh"}/>
                )
            })}
        <NextLink href={"/"}>
            <Button>
                Back
            </Button>
        </NextLink>
        </VStack>
    )
}