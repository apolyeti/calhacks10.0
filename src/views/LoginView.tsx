import {
    Container,
    IconButton,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getUsers } from '@utils/api'
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
                if (username === user.username && password === user.pass) {
                    isAuthenticated = true;
                    break;
                }
            }
            if (isAuthenticated) {
                localStorage.setItem('authToken', username + password);
            }
            window.location.href = "/"
        }, 1000)
    };
    return (
        // make login form that takes username and password
        // make iconbutton spin around when hovered over
        <VStack>
            <Container>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input 
                        type="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
            </Container>
            <IconButton 
                isRound={true}
                aria-label='login' 
                icon={<ArrowRightIcon />}
                _hover={{transform: 'rotate(360deg) scale(1.1)', transition: 'transform 0.45s ease-in-out', bg: 'gray.200'}}
                _active={{bg: 'gray.300'}}
                onClick={handleSubmit}
            />

        </VStack>
    )
}