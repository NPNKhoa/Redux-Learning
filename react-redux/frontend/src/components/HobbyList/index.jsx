import React from "react";
import PropTypes from "prop-types";

const HobbyList = ({ hobbyList }) => {
    const noDataStyle = {
        marginLeft: '-40px',
    }

    return (
      <ul id='hobbyList'>
        {hobbyList.length !== 0 ? (
          hobbyList?.map((hobby) => (
            <li key={hobby?.id} style={{ textAlign: 'left', marginLeft: '40%' }}>
              {hobby?.title}
            </li>
          ))
        ) : (
          <p style={ noDataStyle }>No data</p>
        )}
      </ul>
    );
};

HobbyList.propTypes = {
    hobbyList: PropTypes.array.isRequired,
};

export default HobbyList