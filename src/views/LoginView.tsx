import {
    Container,
    IconButton,
    VStack,
    FormControl,
    FormLabel,
    Center,
    Input,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getUsers } from '@utils/api'
import { motion } from 'framer-motion'
import {ArrowRightIcon} from '@chakra-ui/icons'
import type { User } from '@types'

interface LoginViewProps {
    setUser: (user: string) => void;
}



export default function LoginView({setUser} : LoginViewProps) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [allUsers, setAllUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataUsers = await getUsers();
            setAllUsers(dataUsers);
        };
        fetchData();
        if (typeof window !== "undefined") {
            let usert = localStorage.getItem("authToken");
            setUser(usert);
        }
    }, []);

    const handleSubmit = () => {
        console.log(allUsers)
        setTimeout(() => {
            let isAuthenticated = false;
            for (let user of allUsers) {
                if (username === user.user && password === user.pass) {
                    isAuthenticated = true;
                    break;
                }
            }
            if (isAuthenticated) {
                localStorage.setItem('authToken', username + password);
                window.location.href = "/"
            } else {
                window.location.href = "/?login=false"
            }
        }, 1000)
    };
    return (
        // make login form that takes username and password
        // make iconbutton spin around when hovered over
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
        <Center
            height={"100vh"}>
        <VStack>
            <Container>
                <FormControl colorScheme={"white"} color={"white"}fontSize={"3rem"}width={"30vh"}>
                    <Input
                        variant={"flushed"} 
                        placeholder="Username"
                        height={"5vh"}
                        type="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        _placeholder={{ color: "white", opacity: 0.5}}
                        focusBorderColor='white'
                    />
                    <Input 
                        // make the color of input text white
                        variant={"flushed"}
                        placeholder="Password"
                        height={"5vh"}
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        _placeholder={{ color: "white", opacity: 0.5 }}
                        focusBorderColor='white'
                    />
                </FormControl>
            </Container>
            <IconButton 
                marginTop={"2vh"}
                isRound={true}
                aria-label='login' 
                icon={<ArrowRightIcon />}
                _hover={{transform: 'rotate(360deg) scale(1.1)', transition: 'transform 0.45s ease-in-out', bg: 'gray.200'}}
                _active={{bg: 'gray.300'}}
                onClick={handleSubmit}
            />

        </VStack>
        </Center>
        </motion.div>
    )
}