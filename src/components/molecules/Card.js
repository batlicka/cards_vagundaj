import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.div({
    minHeight: '200px',
    marginBottom: '40px';
    padding: '20px',
    width: '100%', ¨
    border: '1px solid black',
    transition: 'box-shadow 300ms',
    boxShadow: '0 3px 6px rgba(0,0,0,0.22'
});

// '&:hover':{
//     boxShadow:
//     '0 14px 28px rgba(0,0,0,0.26), 0 10px 10px rgba(0,0,0,0.22)',
// },
// });

const Card = ({ name, onCloseClicked, description }) => {
    return (
        <Wrapper>
            <h2>{name}</h2>
            <span onClick={onCloseClicked} className='close'>¨
            close
            </span>
            <p>{description}</p>
        </Wrapper>
    )
}