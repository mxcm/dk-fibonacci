import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Here is the Other page.
            <Link to='/'>Go home!</Link>
        </div>
    );
};