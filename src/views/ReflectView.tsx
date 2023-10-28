import { motion } from 'framer-motion'
import { Center, Heading, Text, Button } from '@chakra-ui/react'
import { Editor } from "@tinymce/tinymce-react"
import { useRef } from 'react'

interface ReflectProps {
    prompt: string;
}

export default function Reflect({prompt} : ReflectProps) {
    const editorRef = useRef(null);
    const handleLog = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
        }
    }
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
                    <motion.div
                            initial={{ opacity: 0, y:-0.5 }}
                            animate={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                apiKey={process.env.MCE_TOKEN}
                                init={initEditor}
                                initialValue=""
                            />
                            {/* <Input placeholder={"Type your prompt here"} onChange={(e) => setInput(e.target.value)}/> */}
                            <Center padding="20px">
                                <Button onClick={handleLog}>Submit</Button>
                            </Center>
                        </motion.div>
                </Center>
            </motion.div>
    )
}