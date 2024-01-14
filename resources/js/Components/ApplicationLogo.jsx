import React from 'react';
import logoImage from './kalasgrande.png';
export default function ApplicationLogo(props) {
    const logoStyle = {
        width: '140px',
        height: '45px',
    };
    return (
        <img {...props} src={logoImage} alt="Logo de la aplicación" style={logoStyle} />
    );
}
