import React from 'react';

export default function catList(props) {
    const pics = props.catPics.map(pic => <img src={pic.url} alt="kitty" />)
    return <div>{pics}</div>
}