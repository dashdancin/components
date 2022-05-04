import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
        </figure>
    )
}