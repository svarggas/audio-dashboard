import { Link } from "react-router-dom";

const Row = ({ audio }) => {

    const { id, date, telephone, duration, personWhoCalled, attendant } = audio;

    return (
        <tr key={id}>
            <td>{date}</td>
            <td>{telephone}</td>
            <td>{duration}</td>
            <td>{personWhoCalled}</td>
            <td>{attendant}</td>
            <td className='d-flex justify-content-center'>
                <Link to={`detail/${id}`}>
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </Link>
            </td>
        </tr>
    )
}

export default Row;