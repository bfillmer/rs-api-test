
import React, { PropTypes } from 'react';

import { Card } from 'Card';

/**
 * Videos Component & Children
 * In a production application these components would be organized into separate files/directory
 * structures and such as complexity grows.
 */

// List of Cards
const List = ({
  titles,
}) => (
  <ul className = "list-unstyled">
    { titles.map((video) => <Card key = { video.nid } video = { video } />)}
  </ul>
);

List.propTypes = {
  titles: PropTypes.array.isRequired,
};

// Video list title, description, and list.
export const Videos = ({
  videos,
}) => (
  <div className = "container">
    <h1>{ videos.term.name }</h1>
    <p>{ videos.term.body }</p>
    <List titles = { videos.titles } />
  </div>
);

Videos.propTypes = {
  videos: PropTypes.object.isRequired,
};
