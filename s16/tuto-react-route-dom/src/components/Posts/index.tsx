import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {
    const params = useParams();
    const {id} = params;
    const [qs] = useSearchParams();

    return (
        <div>
            <h1>Post {`For: ${id}`} {`Qs: ${qs.get('second')}`}</h1>
            <Outlet/>
        </div>
    );
}