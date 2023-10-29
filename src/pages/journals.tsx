import { NextPage } from "next";
import NextLink from "next/link"
import { Center, Text, Heading, VStack, Input, Button, IconButton, useDisclosure } from "@chakra-ui/react"
import { ChatIcon } from "@chakra-ui/icons"
import Loading from "@components/Loading"
import { useState, useRef, useEffect } from "react"
import {Journal} from "@types"
import JournalEntry from "@components/JournalEntry";
import { getJournal } from "@utils/api";

export default function Journal() : NextPage {
    const [journals, setJournals] = useState<Journal[]>([]);
    useEffect(() => {
        console.log('asdasd');
        const getJournals = async () => {
            const req = await getJournal({username: 'Waylon'});
            setJournals(req);
        }
        getJournals();
        // make sure journals have been fetched
        if (journals) {
            console.log(journals);
        } else {
            console.log('no journals');
        }

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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
            <path d="M11 2H9v3h2V2Z"/>
            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0ZM1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5Zm3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4v4.5ZM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V15Z"/>
        </svg>
        </VStack>
    )
}