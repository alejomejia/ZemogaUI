import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import PropTypes from 'prop-types';

import { Root } from './styles';

const VoteBox = (props) => {
  const { figureName, link, children } = props;

  const votebox = useStoreState((state) => state.votebox);
  const handleVotebox = useStoreActions((actions) => actions.handleVotebox);

  useEffect(() => {
    // Console the actual votation
    console.info(`VoteBox = ${JSON.stringify(votebox)}`);
  }, [votebox]);

  return (
    <Root>
      <div className="vote-box">
        <div className="vote-box__content">
          <h1 className="vote-box__title">
            What's your opinion on{' '}
            <span className="vote-box__figure-name">{figureName}?</span>
          </h1>
          <p className="vote-box__description">{children}</p>
          <a
            className="vote-box__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="vote-box__icon fab fa-wikipedia-w"></i>
            <span className="vote-box__more">More information</span>
          </a>
          <h2 className="vote-box__verdict">What's your verdict?</h2>
        </div>
        <div className="vote-box__thumbs">
          <div className="vote-box__thumb-wrapper">
            <button
              id="vote-box-up"
              className="vote-box__thumb-up"
              onClick={() => handleVotebox('up')}
            >
              <i className="vote-box__thumb-icon fas fa-thumbs-up"></i>
            </button>
          </div>
          <div className="vote-box__thumb-wrapper">
            <button
              id="vote-box-down"
              className="vote-box__thumb-down"
              onClick={() => handleVotebox('down')}
            >
              <i className="vote-box__thumb-icon fas fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    </Root>
  );
};

VoteBox.propTypes = {
  figureName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default VoteBox;
