import React, { useState } from 'react';

import Container from '../Container';

import { Root } from './styles';

const InfoBox = () => {
  const [hide, setHide] = useState(false);

  const handleClick = () => setHide(true);

  if (hide === false) {
    return (
      <Root>
        <Container boxed>
          <div className="infobox">
            <div className="infobox__column-left">
              <span className="infobox__title">Speak out. Be heard.</span>
              <span className="infobox__subtitle">Be counted</span>
            </div>
            <div className="infobox__column-right">
              <p className="infobox__description">
                Rule of Thumb is a crowd sourced court of public opinion where
                anyone and everyone can speak out and speak freely. It's easy:
                You share your opinion, we analyze and put the data in a public
                report
              </p>
            </div>
            <div className="infobox__close">
              <button className="infobox__close-btn" onClick={handleClick}>
                <i className="infobox__close-icon fas fa-times"></i>
              </button>
            </div>
          </div>
        </Container>
      </Root>
    );
  } else {
    return null;
  }
};

export default InfoBox;
