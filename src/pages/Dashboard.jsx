import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import Table from '../components/Table';
import LoadingComponent from '../components/Loading';
import useGetAudios from '../hooks/useGetAudios';

const Dashboard = () => {

    const getAudios = useGetAudios();
    const [audios, setAudios] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const audios = await getAudios();
            setAudios(audios);
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <div className="mt-5">
                <h1>Dashboard</h1>
            </div>
            <div className="mt-5 d-flex flex-row justify-content-between">
                {
                    isLoading ? <LoadingComponent /> : <Table audios={audios} />
                }
            </div>
        </div>
    );
};

export default Dashboard;