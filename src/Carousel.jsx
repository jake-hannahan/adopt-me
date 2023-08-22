import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="mt-2 flex h-5/6 items-center justify-around">
        <img
          className="max-h-5/6 max-w-[45%] rounded-3xl"
          src={images[active]}
          alt="animal"
        />
        <div className="w-1/2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className="m-4 inline-block h-24 w-24 cursor-pointer rounded-full border-2 border-solid border-[#333] hover:opacity-30 active:opacity-60"
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
