/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from '@arc-fusion/prop-types';
import { useContent } from 'fusion:content';
import './style.scss';

const RecentBagleyStories = ({ customFields }) => {
  const { contentService, contentConfigValues } = customFields.dataConfig;
  const stories = useContent({
    source: contentService,
    query: contentConfigValues
  });
  if (!stories) return <div>Fill in the custom fields</div>;
  return (
    <div className="bagley-recent-container">
      {stories.content_elements.map(s => (
        <h2 key={s._id}>
          <a className="bagley-list-item" href={s.canonical_url}>
            {s.headlines.basic}
          </a>
        </h2>
      ))}
      <ul style={{ marginLeft: '5px' }}>
        {stories.content_elements.map(s => (
          <li key={s._id}>
            <a className="bagley-list-item" href={s.canonical_url}>
              {s.headlines.basic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
// todos - add link around the headline
RecentBagleyStories.label = 'Recent Bagley Stories';

RecentBagleyStories.propTypes = {
  customFields: PropTypes.shape({
    dataConfig: PropTypes.contentConfig('stories')
  }).isRequired
};

export default RecentBagleyStories;
