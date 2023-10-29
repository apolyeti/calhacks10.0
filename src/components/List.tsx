import { Button, Drawer, DrawerBody, DrawerHeader, DrawerCloseButton, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { Journal, User } from '@types';
import { getUsers } from '@utils/api';

export default function List() {
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
    } , []);


        journals.map((journal) => {
            console.log('asd')
            console.log('asdasd')
            return (
                <div key={journal.id}>
                    {journal.content}
                </div>
            )
        }
     )
}