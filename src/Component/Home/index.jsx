import './index.css';
import {Detail} from './Detail';
import {Recent} from './Recent';
import {Work} from './Work'

export const Home = () => {
    return (
        <>
            <Detail/>
            <Recent/>
            <Work/>
        </>
    )
};