/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

 

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date(); // Get the current date

 

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

 

  // Your calendar rendering logic goes here

 

  return (
<div>
<h2>Calendar Microfrontend</h2>
<p>Today's Date: {today.toDateString()}</p>
      {/* Render the calendar here */}
</div>
  );
};

 

export default Calender;