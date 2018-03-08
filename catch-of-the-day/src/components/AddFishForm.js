import React, { Component } from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descritionRef = React.createRef();
  imageRef = React.createRef();

  createfish = event => {
    event.preventDefault();
    console.log("making a fish");

    const fish = {
      name: this.nameRef.value.value,
      price: this.priceRef.value.value,
      status: this.statusRef.value.value,
      descriptionRef: this.descriptionRef.value.value,
      image: this.imageRef.value.value
    };
  };

  this.props.addFish(fish)
  //refresh the form itself
event.currentTarget

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
          />

          <input
            name="price"
            ref={this.priceRef}
            type="number"
            placeholder="price"
          />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>

          <textarea name="description" type="text" placeholder="description" />
          <input name="image" type="text" placeholder="image" />
          <button type="submit">+ Add Fish</button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
