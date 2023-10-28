import {Center, Heading, Text, CreateToastFnReturn} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import AudioRecorder from '@components/AudioRecord';


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
            <Center
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                display={"flex"}
                flexDirection={"column"}
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