import { Button, Heading, VStack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { NextPage } from 'next';
import { Editor } from "@tinymce/tinymce-react"
import { useEffect, useRef, useState } from 'react';
import { getJournal, postJournal, updateJournal } from '@utils/api';
import type { Journal } from '@types';

export default function Edit() : NextPage {
    const [prompt, setPrompt] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const toast = useToast();
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        // find the jounral with the given name passed in from router
        // set the content of the editor to the content of the journal
        const fetchData = async () => {
            try {
              const req = await getJournal({ username: 'Waylon' });
              // Find the journal with the matching name
              const journal = req.find(journal => journal.name === id);
              if (journal) {
                setPrompt(journal.prompt);
                setContent(journal.content);
              }
            } catch (error) {
              console.error('Error fetching journal:', error);
            }
          };

        fetchData();
        console.log(content)

    }, [id]);
    const editorRef = useRef(null);
    const initEditor = {
        menubar: false,
        plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        content_style: `
                body {
                    background: #FFF;
                    color: #2b2b2b;
                }
            `,
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
    }
    const handleClick = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
            const data = {
                name: id,
                content: editorRef.current.getContent(),
            }
            console.log(data)
            updateJournal(data);
            toast({
                title: "Journal Saved",
                description: "Your journal has been saved",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            // wait a little bit until doing window
        }
    }

    return (
        <VStack>
            <NextLink href={"/journals"}>
                <Button>
                    Back
                </Button>
            </NextLink>
            <Heading 
                as={"h1"} 
                fontFamily={"Ubuntu"} f
                ontSize={"2rem"} 
                justifyContent={"center"} 
                alignItems={"center"}
                padding={"2vh"}
                display={"flex"}
                textAlign={"center"}
            >
                {prompt}
            </Heading>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                apiKey={process.env.MCE_TOKEN}
                init={initEditor}
                initialValue={content}
            />
            <Button onClick={handleClick}>
                    Save
            </Button>
        </VStack>
    )
}