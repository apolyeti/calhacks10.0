import { Center, Text, Heading, AbsoluteCenter, Input, Button, useToast, useDisclosure } from "@chakra-ui/react"
import Loading from "@components/Loading"
import { useState, useRef } from "react"
import ReflectView from "@views/ReflectView"
import SpeakView from "@views/SpeakView"
import LoginView from "@views/LoginView"
import JournalList from "./JournalList"


export default function Hero() {
    const errorToast = useToast();
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>("");
    const [user, setUser] = useState<string>();
    if (!user) {
        return (
            <LoginView setUser={(setUser)}/>
        )
    }
    if (isLoading) {
        return (
            <AbsoluteCenter>
                <Loading />
            </AbsoluteCenter>
        )
    } else if (prompt === ""){
        return (
            <>
            <JournalList />
            <SpeakView 
                hasSubmitted={hasSubmitted} 
                setHasSubmitted={setHasSubmitted} 
                setIsLoading={setIsLoading} 
                setPrompt={setPrompt}
                errorToast={errorToast}
            />
            </>
        )
    } else {
        return (
            <>
            <JournalList />
            <ReflectView 
                prompt={prompt}
                setUser={setUser}
            />
            </>
        );
    }
}