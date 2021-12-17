import React from "react";
import { useState } from "react";

function CreateBookingForm(props) {
  const { artistId, setHideForm, setBookings } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [description, setDescription] = useState("");
  const [pinterestBoard, setPinterestBoard] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setDateAndTime("");
    setDescription("");
    setPinterestBoard("");
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleDateAndTime = (e) => {
    setDateAndTime(e.target.value);
  };

  const handleDescriptionTextArea = (e) => {
    setDescription(e.target.value);
  };

  const handlePinterestBoard = (e) => {
    setPinterestBoard(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customerDetails = {
      name,
      email,
      description,
      dateAndTime,
      pinterestBoard,
      artistId,
    };

    const fetchOptionsBooking = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/bookings`, fetchOptionsBooking)
      .then((res) => res.json())
      .then((newBooking) => {
        console.log("Inside POST response", newBooking);
      });
    clearForm();
    setHideForm(true);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h1>Create Booking</h1>
      <label htmlFor="name-input">Name:</label>
      <input
        id="name-input"
        name="name-input"
        type="text"
        onChange={handleNameInput}
        value={name}
        required
      />
      <label htmlFor="email-input">E-mail Address:</label>
      <input
        id="email-input"
        name="email-input"
        type="email"
        onChange={handleEmailInput}
        value={email}
        required
      />

      <label htmlFor="dateAndTime-input">Date and Time:</label>
      <input
        id="dateAndTime-input"
        name="dateAndTime-input"
        type="text"
        onChange={handleDateAndTime}
        value={dateAndTime}
        required
      />

      <label htmlFor="description-textarea">Tattoo idea:</label>
      <textarea
        id="description-textarea"
        name="description-textarea"
        onChange={handleDescriptionTextArea}
        value={description}
        cols={52}
        placeholder="Please, describe your tattoo idea and placement here."
        required
      />

      <label htmlFor="pinterestBoard-input">Pinterest Board:</label>
      <input
        id="pinterestBoard-input"
        name="pinterestBoard-input"
        type="text"
        onChange={handlePinterestBoard}
        value={pinterestBoard}
        required
      />
      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateBookingForm;
