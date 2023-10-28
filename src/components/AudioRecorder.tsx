import { useState, useRef } from 'react';

export default function AudioRecorder() {
    const [recording, setRecording] = useState(false);
    const audioRef = useRef(null);
    const mediaRecorder = useRef(null);
    const audioBlob = useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    audioBlob.current = new Blob([e.data], { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(audioBlob.current);
                    audioRef.current.src = audioUrl;
                }
            };
            mediaRecorder.current.start();
            setRecording(true);
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
        }
    };

    const handleClick = async () => {
        if (audioBlob.current) {
            const formData = new FormData();
            formData.append('audio', audioBlob.current, 'audio.wav');

            try {
                const response = await fetch('/api/v1/audio', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('Audio data sent successfully.');
                } else {
                    console.error('Failed to send audio data.');
                }
            } catch (error) {
                console.error('Error while sending audio data:', error);
            }
        } else {
            console.log('No audio data to send.');
        }
    };

    return (
        <>
            <audio ref={audioRef} controls />
            <div>
                {recording ? (
                    <button onClick={stopRecording}>Stop Recording</button>
                ) : (
                    <button onClick={startRecording}>Start Recording</button>
                )}
                <button onClick={handleClick}>Send Audio</button>
            </div>
        </>
    );
}
