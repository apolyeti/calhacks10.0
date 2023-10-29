import { NextPage } from "next";
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
    return (
        <VStack display={"flex"}>
        {journals.map((journal) => {
                return (
                    <JournalEntry key={journal.id} content={journal.content} name={journal.name}padding={"2vh"}/>
                )
            })}
        </VStack>
    )
}