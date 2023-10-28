import { AbsoluteCenter, Text, Heading, Button,} from "@chakra-ui/react"
import { motion } from "framer-motion"
import AudioRecorder from "@components/AudioRecorder"
import { useState } from "react"


export default function Hero() {
    const handleClick = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'audio' })
            };
            const response = await fetch("http://127.0.0.1:5000/audio", requestOptions);
            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
            } else {
                console.log("Error fetching data!");
            }
        } catch (error) {
            console.error("Error fetching data!", error)
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
        >
            <AbsoluteCenter>
                <Heading as={"h1"} fontFamily={"Ubuntu"}>
                    Hello, world!
                    <Text as={"p"}>
                        Begin editing to see some magic happen!
                    </Text>
                <AudioRecorder />
                </Heading>
                <Button onClick={handleClick}>
                    Click Me
                </Button>
            </AbsoluteCenter>
        </motion.div>
    )
}