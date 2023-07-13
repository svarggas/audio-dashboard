import { Card, Row, Col } from 'react-bootstrap';

import transcriptions from '../utils/transcriptions.json';

const RowValue = ({ text, duration }) => (
    <Row className='mt-2'>
        <Col className='d-flex justify-space-around'>
            <span className='px-3'>
                <i className="bi bi-person-badge fs-3"></i>
            </span>
            {text}<br/>
            <span className='px-3'>{duration}</span>
        </Col>
    </Row>
);

const AudioTranscription = () => (
  <Card className='mt-2'>
    <Card.Body>
        <Card.Title className='d-flex justify-items-center'>
            Audio Transcription
        </Card.Title>
        {
            transcriptions.map((transcription, index) => (
                <RowValue key={index} {...transcription} />
            ))
        }
    </Card.Body>
  </Card>
);

export default AudioTranscription;