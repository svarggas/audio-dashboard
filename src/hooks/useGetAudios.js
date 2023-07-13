import data from '../utils/data';

const useGetAudios = () => {
    return () => new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000)
    });
};

export default useGetAudios;