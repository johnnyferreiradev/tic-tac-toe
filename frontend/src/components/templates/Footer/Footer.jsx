import React from 'react';

import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <p>
            Desenvolvido por 
            <a href="https://github.com/johnnyferreiradevweb"> Johnny Ferreira </a>
            &#38;
            <a href="https://github.com/nicolas433"> Nicolas Grisoste.</a>
        </p>

        <p>
            <a href="https://github.com/johnnyferreiradevweb/tic-tac-toe" className="repository">
                <i class="fab fa-github"></i> 
                Repositório do projeto
            </a>
        </p>
    </footer>
);

export default Footer;