import { HStack, Button, VStack, Text, AbsoluteCenterProps, useToast } from '@chakra-ui/react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useState } from 'react';

interface AudioRecordProps {
    setIsLoading: (isLoading: boolean) => void;
    setHasSubmitted: (hasSubmitted: boolean) => void;
    setPrompt: (prompt: string) => void;
    hasSubmitted: boolean;
}

export default function AudioRecord({ setIsLoading, setHasSubmitted, setPrompt, hasSubmitted } : AudioRecordProps) {
    const [data, setData] = useState<any>();
    const errorToast = useToast();
    const [hasRecorded, setHasRecorded] = useState(false);

    const createAudio = (blob : Blob) => {
        setHasRecorded(true);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            setData(base64data);
            console.log(base64data);
        }

      };
      const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://127.0.0.1:5000/audio', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            });
            const json = await response.json();
            setPrompt(json.prompt);
            setIsLoading(false);
            if (response.status !== 200) {
                setHasSubmitted(false);
                errorToast({
                    title: 'Error',
                    description: "We couldn't process your audio. Please try again.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  });
            }
            setHasSubmitted(true);
        } catch (error) {
            setIsLoading(false);
            console.error('Error while sending audio data:', error);
            errorToast({
                title: 'Error',
                description: "We couldn't process your audio. Please try again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }
        return (
            // show loading if loading, if not, show entire page as needed
            // if loading, show loading spinner
                <VStack>
                    <HStack>
                        <AudioRecorder 
                            onRecordingComplete={createAudio}
                            showVisualizer={true}
                            downloadFileExtension='mp3'
                        />
                        {hasRecorded && <Button onClick={handleSubmit}>Submit</Button>}
                    </HStack>
                    {hasSubmitted && <Text>Sent!</Text>}
                </VStack>
        )
}