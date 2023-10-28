import { HStack, Button } from '@chakra-ui/react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useState } from 'react';

export default function AudioRecord() {
    const [data, setData] = useState<any>();
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
            const response = await fetch('http://127.0.0.1:5000/audio', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            });
            console.log(response)
        } catch (error) {
            console.error('Error while sending audio data:', error);
        }
      }


    return (
        <HStack>
            <AudioRecorder 
                onRecordingComplete={createAudio}
                showVisualizer={true}
            />
            {hasRecorded && <Button onClick={handleSubmit}>Submit</Button>}
        </HStack>
    )
}