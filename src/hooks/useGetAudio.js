import data from '../utils/data';

const useGetAudios = () => {
    return (id) => new Promise((resolve) => {
        setTimeout(() => {
            const result = data.find((item) => item.id === id);
            return result ? resolve(result) : resolve(null);
        }, 2000)
    });
};

export default useGetAudios;