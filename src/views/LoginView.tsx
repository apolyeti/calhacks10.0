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
import { useState } from 'react'
import {ArrowRightIcon} from '@chakra-ui/icons'
import type { User } from '@types'

interface LoginViewProps {
    setData: (string) => void;
}



export default function LoginView({setData} : LoginViewProps) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = () => {
        // send username and password to backend
        // if successful, set user data
        // if unsuccessful, show error toast
        setData(username);
    }

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