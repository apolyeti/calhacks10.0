import { useState, useRef } from 'react';

export default function AudioRecorder() {
    const [recording, setRecording] = useState(false);
    const audioRef = useRef(null);
    const mediaRecorder = useRef(null);
    const startRecording = async () => {
        try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (e) => {
            const audioBlob = new Blob([e.data], { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            audioRef.current.src = audioUrl;
            setRecording(false);
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

    return (
        <div>
        <audio ref={audioRef} controls autoPlay />
        <div>
            {recording ? (
            <button onClick={stopRecording}>Stop Recording</button>
            ) : (
            <button onClick={startRecording}>Start Recording</button>
            )}
        </div>
        </div>
    );
}
