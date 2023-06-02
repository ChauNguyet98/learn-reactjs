import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
  album: PropTypes.object,
};

AlbumItem.defaultProps = {
  album: null,
};

function AlbumItem(props) {
  const { album } = props;

  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default AlbumItem;
