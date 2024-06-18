import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AddHobbyForm, HobbyList } from '../../components';

const HomePage = () => {

    const hobbyList = useSelector(state => state.hobby.hobbyList);

    useEffect(() => {
        console.log('HobbyList: ', hobbyList);
    }, [hobbyList]);

    return (
        <div>
            <h1>MY MENU:</h1>
            <HobbyList hobbyList={hobbyList} />
            <AddHobbyForm />
        </div>
    )
};

HomePage.propTypes = {

};

export default HomePage;