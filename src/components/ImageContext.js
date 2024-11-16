import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [publicImages, setPublicImages] = useState([]);
  const [imageCache, setImageCache] = useState(new Map());

  const updatePublicImages = (images) => {
    setPublicImages(images);

    const newCache = new Map(imageCache);
    images.forEach((img) => {
      newCache.set(img.id_foto, img);
    });
    setImageCache(newCache);
  };

  const addToCache = (image) => {
    setImageCache((prev) => new Map(prev.set(image.id_foto, image)));
  };

  const removeFromCache = (imageId) => {
    setImageCache((prev) => {
      const newCache = new Map(prev);
      newCache.delete(imageId);
      return newCache;
    });
  };

  const clearCache = () => {
    setImageCache(new Map());
    setPublicImages([]);
  };

  return (
    <ImageContext.Provider
      value={{
        publicImages,
        updatePublicImages,
        imageCache,
        addToCache,
        removeFromCache,
        clearCache,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => useContext(ImageContext);
