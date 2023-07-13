import { Card } from 'react-bootstrap';

const AudioInformation = ({ 
  date, telephone, duration, personWhoCalled, attendant
}) => (
  <Card className='mt-2'>
    <Card.Body>
      <Card.Title>
        <span className='fs-3'>By { personWhoCalled }</span><br/>
        <span className='fs-6'>{ telephone }</span>
      </Card.Title>
      <Card.Text style={{ paddingTop: "10px" }}>
          <strong>At:</strong> { date }
          <br/>
          <strong>Duration:</strong> { duration }
          <br/>
          <strong>Attendant:</strong>
          <br/>
          <span className='d-flex align-items-center mt-2'>
            <i className="bi bi-person-badge fs-3"></i>
            { attendant }
          </span>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default AudioInformation;