import React, { useState } from 'react';

function FlightSearch() {
    const [flights, setFlights] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const from = formData.get('from');
      const to = formData.get('to');
      const departureTime = formData.get('departureTime');
      const arrivalTime = formData.get('arrivalTime');
      
      fetch(`https://my.api.mockaroo.com/flights.json?key=099170f0`)
        .then(response => response.json())
        .then(data => {
          const filteredFlights = data.filter(flight => 
            flight.departureDestination.toLowerCase() === from.toLowerCase() &&
            flight.arrivalDestination.toLowerCase() === to.toLowerCase()
          );
          setFlights(filteredFlights);
        })
        .catch(error => console.error(error));
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="from">From:</label>
          <input type="text" name="from" placeholder="Enter departure city" />
  
          <label htmlFor="to">To:</label>
          <input type="text" name="to" placeholder="Enter arrival city"/>
  
          <button type="submit">Search</button>
        </form>
  
        {flights.length > 0 ? (
          <ul>
            {flights.map(flight => (
              <li key={flight.route_id}>
                {flight.itineraries.map(itinerary => (
                  <div key={itinerary.itinerary_id}>
                    <h3>{flight.departureDestination} - {flight.arrivalDestination}</h3>
                    <p>Departure: {new Date(itinerary.departureAt).toLocaleDateString()}</p>
                    <p>Arrival: {new Date(itinerary.arrivalAt).toLocaleDateString()}</p>
                    <p>Price: {itinerary.prices.adult}</p>
                    <p>Available seats: {itinerary.availableSeats}</p>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
  
export default FlightSearch;
