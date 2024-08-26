import { Link } from 'react-router-dom';
import './style.css';

export const Main = () => {
    return (
        <nav className='main'>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about" state={'This is state from ABOUT'}>About</Link></li>
                <li> <Link to="/posts">Posts</Link></li>
                <li> <Link to="/posts/10">Posts 10</Link></li>
                <li> <Link to="/redirect">Redirect</Link></li>
            </ul>
        </nav>
    );
}