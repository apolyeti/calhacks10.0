import {Center, Heading, Text, CreateToastFnReturn, IconButton, useToast} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import AudioRecorder from '@components/AudioRecord';
import NextLink from 'next/link';




interface SpeakViewProps {
    setHasSubmitted: (boolean) => void;
    setIsLoading: (boolean) => void;
    setPrompt: (string) => void;
    hasSubmitted: (boolean);
    errorToast: CreateToastFnReturn;
}

export default function SpeakView({setHasSubmitted, setIsLoading, setPrompt, hasSubmitted} : SpeakViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y:-0.5 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            <NextLink href="/journals" padding={"5ox"} color={"transparent"}>
                <IconButton
                    position={"absolute"}
                    top={"0"}
                    left={"0"}
                    aria-label={"View Journals"}
                    _hover={{
                        cursor: "pointer",
                        transform: "scale(1.07); duration: 0.5s"
                    }}
                    size={"md"}
                    icon={<ViewIcon />}
                    isRound={true}
                    display={"flex"}
                />
                {'.'}
            </NextLink>
            <Center
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                height={"100vh"}
            >
                <Heading as={"h1"} fontFamily={"Ubuntu"} fontSize={"3rem"}>
                    let it all out
                    <motion.div
                        initial={{ opacity: 0, y:-0.5 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Text as={"p"} fontSize={"2rem"} paddingBottom={"1vh"}>
                            click the button whenever you{'\''}re ready
                        </Text>
                        <AudioRecorder setHasSubmitted={setHasSubmitted} setIsLoading={setIsLoading} hasSubmitted={hasSubmitted} setPrompt={setPrompt}/>
                    </motion.div>
                </Heading>
            </Center>
        </motion.div>
    )
}