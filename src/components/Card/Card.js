////this object obtain every component
import React from 'react'
import './Card.css';
//

const Card = ({
    id,
    editedID,
    name,
    description,
    onCloseClicked,
    editedDescription,
    setEditedName,
    editedName,
    setEditedDescription,
    onEditClicked,
    onEditSaveClicked,
}) => {
    const renderNormalView = () => {
        return (
            <>
                <div className="card">
                    <div class="card-heading">
                        <h2>{name}</h2>
                        <span onClick={onCloseClicked} className='close'>
                            close
                    </span>
                    </div>
                    <p>{description}</p>
                    <button onClick={onEditClicked}>edit</button>
                </div>
            </>
        );
    };
    const isEditActive = id === editedID;
    const renderEditView = () => {
        return (
            <div className="card-editing">
                <input type="text"
                    value={editedName}
                    onChange={event => setEditedName(event.target.value)}
                    placeholder='Name'
                />
                <textarea
                    value={editedDescription}
                    onChange={event => setEditedDescription(event.target.value)}
                    placeholder='Descripton'
                />
                <button onClick={onEditSaveClicked}>save</button>
                <button>cancel</button>
            </div>
        );
    };
    return (
        <div className='card'>
            {isEditActive ? renderEditView() : renderNormalView()};
        </div>
    )
};
export default Card;



// import React from 'react'
// import './Card.css';
// const Card = ({ keyy, name, description, onCloseClicked,
//     editedID,
//     editedDescription,
//     setEditedName,
//     setEditedDescription,    
//     editingState,
// }) => {
//     return (
//         <div className="card">
//             <div class="card-heading">
//                 <h2>{name}</h2>
//                 <h2>{keyy}</h2>
//                 <span onClick={onCloseClicked} className='close'>close</span>
//             </div>
//             <p>{description}</p>
//             <p>Martinn and Palo</p>
//         </div>
//     );


// };
// export default Card;