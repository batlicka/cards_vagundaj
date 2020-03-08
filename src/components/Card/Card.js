//this object obtain every component
// import React from 'react'
// import './Card.css';
// const Card = ({ name, description, onCloseClicked, onEditeClicked }) => {
//     const renderNormalView = () => {
//         return (
//             <div className="card">
//                 <div class="card-heading">
//                     <h2>{name}</h2>
//                     <span onClick={onCloseClicked} className='close'>
//                         close
//                     </span>
//                     <button onClick={onEditeClicked(false)}>Edit</button>
//                 </div>
//                 <p>{description}</p>                 
//             </div>
//         );
//     };

//     const renderEditView = () => {
//         return (
//             <div className="card">
//                 <div class="card-heading">
//                     <h2>{name}</h2>
//                     <span onClick={onCloseClicked} className='close'>
//                         close
//                         </span>
//                     <button onClick={onEditeClicked(true)}>Edit</button>
//                 </div>
//                 <p>{description}</p>
//             </div>
//         );
//     };
//     return editing ? renderEditView() : renderNormalView();
// };
// export default Card;



import React from 'react'
import './Card.css';
const Card = ({ keyy, name, description, onCloseClicked }) => {
    return (
        <div className="card">
            <div class="card-heading">
                <h2>{name}</h2>
                <h2>{keyy}</h2>
                <span onClick={onCloseClicked} className='close'>close</span>
            </div>
            <p>{description}</p>
            <p>Martinn and Palo</p>
        </div>
    );


};
export default Card;