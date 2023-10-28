import { Center, Text, Heading, AbsoluteCenter, Input, Button, useToast } from "@chakra-ui/react"
import Loading from "@components/Loading"
import { useState } from "react"
import ReflectView from "@views/ReflectView"
import SpeakView from "@views/SpeakView"
import LoginView from "@views/LoginView"
import type { User } from "@types"


export default function Hero() {
    const errorToast = useToast();
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>("");
    const [user, setUser] = useState<string>();
    if (!user) {
        return (
            <LoginView setData={(setUser)}/>
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
            <SpeakView 
                hasSubmitted={hasSubmitted} 
                setHasSubmitted={setHasSubmitted} 
                setIsLoading={setIsLoading} 
                setPrompt={setPrompt}
                errorToast={errorToast}
            />
        )
    } else {
        return (
            <ReflectView 
                prompt={prompt}
            />
        );
    }
}