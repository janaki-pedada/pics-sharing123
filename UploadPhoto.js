import React, { Component } from 'react';
import './UploadPhoto.css';

class UploadBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFiles: [],
      username: '',
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileChange(event) {
    const files = event.target.files;
    this.setState(prevState => ({
      imageFiles: [...prevState.imageFiles, ...files],
    }));
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { imageFiles, username } = this.state;
    const uploadedPhotos = imageFiles.map(file => ({
      id: new Date().getTime() + Math.random(),
      imageUrl: URL.createObjectURL(file),
      username: username,
    }));

    uploadedPhotos.forEach(photoData => {
      this.props.onUpload(photoData);
    });

    this.setState({
      imageFiles: [],
      username: '',
    });
  }

  render() {
    const headerStyle = "headerStyle";

    return (
      <div className="container">
        <h1 className={headerStyle}>BookGallery</h1>
        <h2>Upload a Book</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="file" accept="image/*" multiple onChange={this.handleFileChange} />
          </div>
          <br />
          <div className="form-group">
            <input type="text" placeholder="bookname" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <br />
          <button type="submit" className="submit-btn">Upload</button>
        </form>
      </div>
    );
  }
}

export default UploadBook;
