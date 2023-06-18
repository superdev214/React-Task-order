import React, { useState } from "react";
import "./Uploader.scss";

export default function UploaderComponent({ renderBtn }) {
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    let images_url = images ? [...images] : [];
    Object.entries(event.target.files).forEach(async (element) => {
      let file = element[1];
      if (
        !file.type.match("image/png") &&
        !file.type.match("image/jpeg") &&
        !file.type.match("image/jpg")
      )
        return;
      images_url.push({ path: URL.createObjectURL(file) });
      setImages(images_url);
    });
  };

  const remove = (index) => {
    let tempImages = [...images];
    tempImages.splice(index, 1);
    setImages(tempImages);
    // this.forceUpdate();
  };

  const clear = () => {
    setImages([]);
  };

  return (
    <>
      <div className="position-relative">
        {images && images.length > 0 && (
          <div className="attachment-task">
            {images.map((image, key) => {
              return (
                <div className="area-img pt-md" key={key}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image.path}
                    alt=""
                  />
                  <button className="close position-absolute bg-transparent border-0">
                    <img
                      src="./assets/images/icons/close.svg"
                      alt="close"
                      onClick={() => remove(key)}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="uploader">
        {renderBtn ? (
          renderBtn()
        ) : (
          <button className="d-block btn btn-gray btn-w-350 mt-3">
            <img
              src="./assets/images/icons/attachment.svg"
              alt="close"
              className="mr-10"
            />
            Add attachment
          </button>
        )}
        <input
          id="file-upload"
          onChange={(e) => handleChange(e)}
          className="input file-upload-input"
          type="file"
          accept="image/*"
          multiple
        />
      </div>
    </>
  );
}
