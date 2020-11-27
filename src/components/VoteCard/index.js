import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import PropTypes from 'prop-types';

import ThumbData from '../ThumbData';

import { Root } from './styles';
import { getPercent } from '../../services';

const VoteCard = (props) => {
  const { figure } = props;

  // Actions
  const handleVotation = useStoreActions((actions) => actions.handleVotation);
  const handleAlert = useStoreActions((actions) => actions.handleAlert);

  // Local states
  const [thumb, setThumb] = useState(null);
  const [enableVote, setEnableVote] = useState(true);

  // Set percent based on thumbs up and down from json
  const percent = {
    up: getPercent(figure.thumbsUp, figure.thumbsDown),
    down: getPercent(figure.thumbsDown, figure.thumbsUp),
  };

  // Save thumb value on state
  const handleChange = (e) => {
    setThumb(e.target.value);
  };

  // Send result to action and change state in the store
  const handleSubmit = (e) => {
    e.preventDefault();

    if (enableVote === true) {
      if (thumb === null) {
        handleAlert({
          show: true,
          msg: 'Please choose thumbs up or down before voting',
        });
      } else {
        const payload = {
          id: figure.id,
          thumb: thumb,
        };

        handleVotation(payload);
        setEnableVote(false);
        setThumb(null);
      }
    } else {
      setEnableVote(true);
    }
  };

  // Render thumb icon on title left side depending on winner vote
  const renderTitleThumb = () => {
    if (percent.up > percent.down) {
      return <i className="figure__thumb up fas fa-thumbs-up"></i>;
    } else if (percent.down > percent.up) {
      return <i className="figure__thumb down fas fa-thumbs-down"></i>;
    } else {
      return <i className="figure__thumb middle fas fa-thumbs-up"></i>;
    }
  };

  // Change description depending on vote button state
  const renderDescription = () => {
    if (enableVote === true) {
      return figure.description;
    } else {
      return 'Thank you for voting!';
    }
  };

  // Change button text depending on vote button
  const renderVoteText = () => {
    if (enableVote === true) {
      return 'Vote now';
    } else {
      return 'Vote again';
    }
  };

  // Show or not thumbs depending on vote state
  const renderThumbs = () => {
    if (enableVote === true) {
      return (
        <>
          <div className="vote__radio">
            <input
              className="vote__input"
              id={`thumbs-up-${figure.id}`}
              name={`thumbs-${figure.id}`}
              type="radio"
              checked={thumb === 'up'}
              onChange={handleChange}
              value="up"
            />
            <label
              className="vote__label up"
              htmlFor={`thumbs-up-${figure.id}`}
            >
              <i className="vote__icon fas fa-thumbs-up"></i>
            </label>
          </div>
          <div className="vote__radio">
            <input
              className="vote__input"
              id={`thumbs-down-${figure.id}`}
              name={`thumbs-${figure.id}`}
              type="radio"
              checked={thumb === 'down'}
              onChange={handleChange}
              value="down"
            />
            <label
              className="vote__label down"
              htmlFor={`thumbs-down-${figure.id}`}
            >
              <i className="vote__icon fas fa-thumbs-down"></i>
            </label>
          </div>
        </>
      );
    }
  };

  // Render form logic
  const renderForm = () => {
    return (
      <>
        <form className="vote" onSubmit={handleSubmit}>
          {renderThumbs()}
          <button className="vote__btn now" type="submit">
            {renderVoteText()}
          </button>
        </form>
      </>
    );
  };

  return (
    <Root background={figure.picture}>
      <div className="vote-card">
        <div className="vote-card__content">
          <div className="figure">
            <div className="figure__header">
              {renderTitleThumb()}
              <h3 className="figure__name">{figure.name}</h3>
            </div>
            <div className="figure__body">
              <p className="figure__desc">{renderDescription()}</p>
            </div>
            <div className="figure__footer">{renderForm()}</div>
          </div>
          <div className="thumbs-wrapper">
            <ThumbData type="up" perc={percent.up} />
            <ThumbData type="down" perc={percent.down} />
          </div>
        </div>
      </div>
    </Root>
  );
};

VoteCard.propTypes = {
  figure: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbsUp: PropTypes.number.isRequired,
    thumbsDown: PropTypes.number.isRequired,
  }),
};

export default VoteCard;
