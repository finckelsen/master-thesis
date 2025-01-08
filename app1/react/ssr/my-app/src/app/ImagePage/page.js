import React from 'react';
import BackgroundChanger from '../components/BackgroundChanger';

const ImagePage = async () => {
  const imageData = await getData();
  return (
    <div>
      <header className="App-header">
        <img src="/background.jpeg" className="headerBackground" alt="Background" />
        <div className="content">
          <h1>This is the image page</h1>
          <p>It contains images fetched online</p>
        </div>
      </header>

      <h1>Images 1 to 10</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {imageData.map((image) => (
          <div key={image.id} style={{ textAlign: 'center' }}>
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              style={{ width: '200px', height: '300px', objectFit: 'cover' }}
            />
            <p>Image ID: {image.id}</p>
          </div>
        ))}
      </div>
      <BackgroundChanger/>
    </div>
  );
}

const getData = async () => {
  // Generate image IDs (1 to 10)
  const imageIds = Array.from({ length: 10 }, (_, index) => index + 1);

  // Map over the IDs to create image data
  const imageData = imageIds.map((id) => ({
    id,
    url: `https://picsum.photos/id/${id}/200/300`, // Generate image URL
  }));

  // Return the image data
  return imageData;
}

export const dynamic = 'force-dynamic'; 
export default ImagePage;
