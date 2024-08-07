import PropTypes from "prop-types";

import "./User.css";

const User = ({ user }) => {
    return (
        <li>
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <p>{user.address.city}</p>
        </li>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            city: PropTypes.string.isRequired
        }).isRequired
    })
};

export default User;
