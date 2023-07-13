import { Card, Button } from 'react-bootstrap';

const AudioPlayer = ({ isPlaying, setIsPlaying }) => {

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <Card className='w-100 mt-3'>
      <Card.Body>
        <Card.Title className='d-flex justify-items-center'>
          Audio
        </Card.Title>
        <Card.Text className='pt-2'>
          {
            isPlaying ? 
            <Button onClick={PlayPause}><i className="bi bi-pause"></i></Button> : 
            <Button><i className="bi bi-play-fill" onClick={PlayPause}></i></Button>
          } 
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default AudioPlayer;