import React from'react';

export default function Footer(){
    let year = new Date().getFullYear();
    return <footer><p>Copyright &copy;{year}</p></footer>
}