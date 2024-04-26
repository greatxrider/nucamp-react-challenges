import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Click on a user to view details:</p>
            <ul>
                <li><Link to="/users/jephlove">User 123</Link></li>
                <li><Link to="/users/jephangry">User 456</Link></li>
                <li><Link to="/users/jephwanteat">User 789</Link></li>
            </ul>
        </div>
    );
};

export default Home;
