import React from "react";
import "./Uploader.scss";

export default class UploaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  handleChange = (event) => {
    let images_url = this.state.images ? [...this.state.images] : [];
    Object.entries(event.target.files).forEach(async (element) => {
      let file = element[1];
      if (
        !file.type.match("image/png") &&
        !file.type.match("image/jpeg") &&
        !file.type.match("image/jpg")
      )
        return;
      images_url.push({ path: URL.createObjectURL(file) });
      this.setState({ images: images_url });
    });
  };

  remove = (index) => {
    let tempImages = [...this.state.images];
    tempImages.splice(index, 1);

    this.setState({ images: tempImages });
    this.forceUpdate();
  };

  clear = () => {
    this.setState({ images: [] });
  };

  render() {
    const { images } = this.state;

    return (
      <div className="uploader">
        <div>
          <div>
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
                          src="./assets/images/close.png"
                          alt="close"
                          onClick={() => this.remove(key)}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <div className="area">
              {this.props.renderBtn ? (
                this.props.renderBtn()
              ) : (
                <button className="d-block btn btn-gray btn-w-350 mt-3">
                  <img
                    src="./assets/images/attachment.png"
                    alt="close"
                    className="mr-10"
                  />
                  Add attachment
                </button>
              )}
              <input
                id="file-upload"
                onChange={this.handleChange}
                className="input file-upload-input"
                type="file"
                accept="image/*"
                multiple
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
