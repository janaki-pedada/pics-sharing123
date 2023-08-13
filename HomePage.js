import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
  renderPhoto(photo) {
    return (
      <div key={photo.id} className="photo-container">
        <img src={photo.imageUrl} alt={`BookName: ${photo.username}`} />
        <div className="photo-details">
          <p>Book Name: {photo.username}</p>
        </div>
      </div>
    );
  }

  renderBookNames(photo) {
    return <li key={photo.id}>BookName: {photo.username}</li>;
  }

  render() {
    const { photos } = this.props;

    return (
      <div className="homepage-container">
        <div className="homepage-grid">
          {photos.map(this.renderPhoto)}
        </div>
        <div className="book-names">
          <h2>All Book Names:</h2>
          <ul>
            {photos.map(this.renderBookNames)}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
