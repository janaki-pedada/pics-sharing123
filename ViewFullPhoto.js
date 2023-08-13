import React, { Component } from 'react';

class FullPhotoView extends Component {
  render() {
    const { photo, onClose } = this.props;

    return (
      <div>
        <button onClick={onClose}>Close</button>
        <img src={photo.imageUrl} alt={`Uploaded by ${photo.username}`} style={{ width: '100%', height: 'auto' }} />
        <p>Uploaded by: {photo.username}</p>
        <p>Likes: {photo.likes}</p>
      </div>
    );
  }
}

export default FullPhotoView;
