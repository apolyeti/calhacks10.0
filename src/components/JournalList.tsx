import { Button, Drawer, DrawerBody, DrawerHeader, DrawerCloseButton, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { Journal, User } from '@types';
import { getUsers } from '@utils/api';

export default function JournalList() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [journals, setJournals] = useState<Journal[]>([]);
    const [data, setData] = useState<User[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataUsers = await getUsers();
            setData(dataUsers);
        }
        fetchData();
        for (let user of data) {
            if (user.authkey === localStorage.authToken) {
                setJournals(user.journals);
                console.log('asdasd', journals);
            }
        }
        console.log(journals)
    } , []);



    return (
        <>
        <Button 
        position={'absolute'} 
        top={0} right={0} 
        onClick={onOpen}
        ref={btnRef}
    >
        Open
    </Button>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
    >
        <DrawerOverlay />
        <DrawerContent>
            asdasd
            <Button onClick={() => console.log(journals)}>asdasd</Button>

        <DrawerCloseButton />
        <DrawerHeader>Jourasdasnals</DrawerHeader>
        </DrawerContent>
    </Drawer>
    </>
    )
}