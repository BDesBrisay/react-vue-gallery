import React from 'react';
import './ImageSection.css';

class ImageSection extends React.Component {
  render() {
    const { title, image, caption, background } = this.props;
    return (
      <div className="section" style={{ backgroundColor: background }}>
        <h1>{ title }</h1>
        { image }
        <p>{ caption }</p>
      </div>
    )
  }
}

export default ImageSection;