import { Table } from 'react-bootstrap';
import Row from './Row';
 

const CustomTable = ({ audios }) => {
    
    if (!audios || !audios.length) return null;
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Telephone</th>
                    <th>Duration</th>
                    <th>Person who called</th>
                    <th>Attendant</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    audios.map(
                        audio => <Row key={audio.id} audio={audio} />
                    )
                }
            </tbody>
        </Table>
    )
};

export default CustomTable;