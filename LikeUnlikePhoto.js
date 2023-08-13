import React, { Component } from 'react';

class LikeUnlikePhoto extends Component {
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(event) {
    event.stopPropagation();
    const { photo, onLike } = this.props;
    onLike(photo.id, !photo.liked);
  }

  render() {
    const { photo } = this.props;

    return (
      <div>
        <button onClick={this.handleLike}>{photo.liked ? 'Unlike' : 'Like'}</button>
        <p>Likes: {photo.likes}</p>
      </div>
    );
  }
}

export default LikeUnlikePhoto;
