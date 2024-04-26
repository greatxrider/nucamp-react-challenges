import { useParams } from 'react-router-dom';

const UserDetails = () => {
    // Access the 'userId' route parameter
    const { userId } = useParams();

    // Display the user details
    return (
        <div>
            {userId}
            User Details for user with ID {userId}
        </div>
    );
};

export default UserDetails;
