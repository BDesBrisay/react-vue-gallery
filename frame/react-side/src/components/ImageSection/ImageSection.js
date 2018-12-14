import React from 'react';
import './ImageSection.css';

class ImageSection extends React.Component {
  render() {
    const { title, image, caption, background } = this.props;
    return (
      <div className="section" style={{ backgroundColor: background }}>
        <h1>{ title }</h1>
        <img src={`http://harvix.com/react-vue-gallery/react-side/build/static/media/${image}`} alt="" />
        <p>{ caption }</p>
      </div>
    )
  }
}

export default ImageSection;