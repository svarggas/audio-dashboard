import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import AudioInformation from '../components/AudioInformation';
import AudioTranscription from '../components/AudioTranscription';
import AudioPlayer from '../components/AudioPlayer';
import LoadingComponent from '../components/Loading';
import useGetAudio from '../hooks/useGetAudio';

const FeebackComponent = ({ text }) => (
    <Row className="mt-5">
      <Col>
        <h5 className="d-flex justify-content-center">
          { text }
        </h5>
      </Col>
    </Row>
);

const Detail = () => {

    const getAudio = useGetAudio();
    const params = useParams();
    const audioElem = useRef();

    const [audioData, setAudioData] = useState(undefined);
    const [isLoading, setLoading] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);

    const onPlaying = () => {
        if (!audioData) return false;

        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;
        setCurrentAudio({ 
            currentAudio: {
                title: audioData.id,
                src: audioData.src,
            },
            "progress": ct / duration * 100, 
            "length": duration 
        });
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const audioParam = params.audio || null;
            const audioResponse = await getAudio(audioParam);
            setAudioData(audioResponse);
            const currSong = {
                title: audioResponse.id,
                src: audioResponse.src,
            }
            setCurrentAudio(currSong);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (currentAudio && audioElem.current) {
            setLoading(true);
            if (isPlaying) audioElem.current.play();
            else audioElem.current.pause();
            setLoading(false);
        }
    }, [isPlaying]);

    if (isLoading) return <LoadingComponent />;

    if (!currentAudio) return <FeebackComponent text="Audio Loading" />;

    if (audioData === null) return <FeebackComponent text="No data found" />;

    return (
        <Container>
            <h1>Call Details</h1>
            <Row>
                <Col>
                    <audio 
                        ref={audioElem} 
                        src={currentAudio.src} 
                        onTimeUpdate={onPlaying} 
                    />
                    <AudioPlayer 
                        isPlaying={isPlaying} 
                        setIsPlaying={setIsPlaying} 
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={3}>
                    <AudioInformation {...audioData} />
                </Col>
                <Col md={12} lg={9}>
                    <AudioTranscription />
                </Col>
            </Row>
        </Container>
    );
};

export default Detail;