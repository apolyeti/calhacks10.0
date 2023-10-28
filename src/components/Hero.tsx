import { AbsoluteCenter, Text, Heading, Button,} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Hero() {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
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
                    <Button
                        color={"#99786E"}
                        bgColor={"#FFC1AE"}
                        onClick={handleClick}
                        _hover={{ bgColor: "#FFA695", color: "#99786E" }}
                    >
                        {count}
                    </Button>
                </Heading>
            </AbsoluteCenter>
        </motion.div>
    )
}