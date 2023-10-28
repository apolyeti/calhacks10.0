import { AbsoluteCenter, Text, Heading, Button,} from "@chakra-ui/react"
import { motion } from "framer-motion"
import AudioRecorder from "@components/AudioRecorder"
import { useState } from "react"

export default function Hero() {
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
            </AbsoluteCenter>
        </motion.div>
    )
}