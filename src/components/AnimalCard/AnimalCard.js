import React from 'react';
import './AnimalCard.css';
import PropTypes from 'prop-types';


export default function AnimalCard({
    additional,
    developer,
    name,
    scientificName,
    showAdditional,
    size
}) {
    return (
        <div className='hero'>
            <div className='container'>
            <h2>{name}</h2>
            <h3>{scientificName}</h3>
            <h4>{size}kg</h4>
            <div>{developer.join(', ')}.</div>
            <button className='btn btn-x' onClick={() => showAdditional(additional)}>More Info</button>
        </div>
        </div>
    );
}
AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        note: PropTypes.string
    }),
    developer: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
}
AnimalCard.defaultProps = {
    additional: {
        note: 'No Addition Information'
    }
}








// import React from 'react';
// import './AnimalCard.css'

// export default function AnimalCard(props) {
//     const { name } = props;
//   return (
//     <div>
//         {name}
//     </div>
//   )
// }