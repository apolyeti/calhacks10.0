import { Center, Text, Heading, AbsoluteCenter, Input, Button, useToast } from "@chakra-ui/react"
import { motion } from "framer-motion"
import AudioRecorder from "@components/AudioRecord"
import Loading from "@components/Loading"
import { useState } from "react"


export default function Hero() {
    const errorToast = useToast();
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>("");
    const [input, setInput] = useState<string>("");
    if (isLoading) {
        return (
            <AbsoluteCenter>
                <Loading />
            </AbsoluteCenter>
        )
    } else if (prompt === ""){
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
    } else {
        const handleSubmit = async () => {
            try {
                setIsLoading(true);
                // have request send prompt
                const response = await fetch('http://', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify(input),
                });
                setIsLoading(false);
                console.log(response);
                if (response.status !== 200) {
                    setHasSubmitted(false);
                    errorToast({
                        title: 'Error',
                        description: "We couldn't process your audio. Please try again.",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                }
            } catch (error) {
                console.error('Error while sending audio data:', error);
            }
        }

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
                        i see!
                        <motion.div
                            initial={{ opacity: 0, y:-0.5 }}
                            animate={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Text as={"p"} fontSize={"2rem"} paddingBottom={"1vh"}>
                                {prompt}
                            </Text>
                            <Input placeholder={"Type your prompt here"} onChange={(e) => setInput(e.target.value)}/>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </motion.div>
                    </Heading>
                </Center>
            </motion.div>
        );
    }
}