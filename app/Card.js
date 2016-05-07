
import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

// Trying out using Aphrodite for styles. Not sure I am a fan.
const styles = StyleSheet.create({
  videoCard: {
    display: 'block',
    float: 'left',
    height: '270px',
    width: '340px',
    padding: '10px',
  },
  videoTitle: {
    marginBottom: '0',
  },
});

// Video Card
export const Card = ({
  video,
}) => (
  <li className = { css(styles.videoCard) }>
    { video.hero_image.hero_320x200 && (
      <img role = "presentation" src = { video.hero_image.hero_320x200 } />
    ) }
    <h6 className = { css(styles.videoTitle) }>{ video.title }</h6>
    <p>
      { video.total_seasons && video.total_episodes && (
        <small>{ video.total_seasons } seasons { video.total_episodes } episodes</small>
      )}
    </p>
  </li>
);

Card.propTypes = {
  video: PropTypes.object.isRequired,
};
