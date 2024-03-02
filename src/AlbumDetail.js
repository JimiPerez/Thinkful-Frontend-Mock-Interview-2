import React, { useEffect, useState } from "react";

const AlbumDetail = ( {album} ) => {
  
  const [albumId, setAlbumId] = useState(null)
  const [albumImages, setAlbumImages] = useState([]);
  
  const handleClick = (albumId) => {
    setAlbumId(albumId);
  }
  
  useEffect(() => {
    if(albumId){
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((data) => {
      const firstTenImages = data.slice(0,10);
      setAlbumImages(firstTenImages);
    })
      .catch((error) => {
        console.log(error);
      })
    }
  }, [albumId]);
  
  return(
    <div>
      <button onClick={() => handleClick(album.id)}>{album.title}</button>
      {albumId === album.id && albumImages.length > 0 && (
        <div>
          <ol>
              {albumImages.map((image) => (
                <li>
                  <p>{image.title}</p>
                  <img src={image.thumbnailUrl} alt={image.title}/>
                </li>
              ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default AlbumDetail;





