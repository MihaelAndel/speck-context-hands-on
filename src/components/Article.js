import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Article = () => {
    const isLoggedIn = useContext(AuthContext);
    return (
        <>
            <div>
                <h2>Article title</h2>
                {isLoggedIn ? (
                    <div>
                        <span>Article description</span>
                        <button>Edit</button>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Article;
