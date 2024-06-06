

const { error } = require('console')
//const{pool} = require('./db2')
const { promises } = require('dns')
const { resolve } = require('path')
const { rejects } = require('assert')

const{pool} = require('./db2')
//Certainly! Below are the functions for managing flights in a MySQL database using the `mysql2` library in Node.js:
/*

// Function to get all flights
async function getAllFlights() {
  const [rows, fields] = await pool.execute('SELECT * FROM flights');
  return rows;
}

// Function to get a flight by its ID
async function getFlightById(id) {
  const [rows, fields] = await pool.execute('SELECT * FROM flights WHERE id = ?', [id]);
  return rows[0];
}

// Function to add a new flight
async function addFlight(flight) {
  const { airline, origin, destination, departureTime, arrivalTime } = flight;
  const [result] = await pool.execute('INSERT INTO flights (airline, origin, destination, departureTime, arrivalTime) VALUES (?, ?, ?, ?, ?)', [airline, origin, destination, departureTime, arrivalTime]);
  return result.insertId;
}

// Function to update an existing flight
async function updateFlight(id, updatedFlight) {
  const { airline, origin, destination, departureTime, arrivalTime } = updatedFlight;
  await pool.execute('UPDATE flights SET airline = ?, origin = ?, destination = ?, departureTime = ?, arrivalTime = ? WHERE id = ?', [airline, origin, destination, departureTime, arrivalTime, id]);
}

// Function to remove a flight
async function removeFlight(id) {
  await pool.execute('DELETE FROM flights WHERE id = ?', [id]);
}

// Function to get flights by airline
async function getFlightsByAirline(airline) {
  const [rows, fields] = await pool.execute('SELECT * FROM flights WHERE airline = ?', [airline]);
  return rows;
}

// Example usage
(async () => {
  try {
    // Fetch all flights
    const allFlights = await getAllFlights();
    console.log('All Flights:', allFlights);

    // Fetch flight by ID
    const flightById = await getFlightById(1);
    console.log('Flight by ID:', flightById);

    // Add a new flight
    const newFlightId = await addFlight({
      airline: 'Sample Airlines',
      origin: 'City A',
      destination: 'City B',
      departureTime: '2024-05-20 08:00:00',
      arrivalTime: '2024-05-20 10:00:00'
    });
    console.log('Newly added flight ID:', newFlightId);

    // Update an existing flight
    await updateFlight(1, {
      airline: 'Updated Airlines',
      origin: 'City C',
      destination: 'City D',
      departureTime: '2024-05-21 09:00:00',
      arrivalTime: '2024-05-21 11:00:00'
    });

    // Remove a flight
    await removeFlight(2);

    // Fetch flights by airline
    const flightsByAirline = await getFlightsByAirline('Sample Airlines');
    console.log('Flights by Airline:', flightsByAirline);
  } catch (error) {
    console.error('Error:', error);
  }
})();
module.exports={
    getAllFlights , getFlightById , getFlightsByAirline , addFlight , updateFlight , removeFlight , 
}

//Make sure you have a table named `flights` with columns `id`, `airline`, `origin`, `destination`, `departureTime`, and `arrivalTime`. And as before, replace placeholder credentials accordingly.
*/
const getAllflights=()=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM flights;',(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

////////////////////////////////////////////////////////////////////////////
const getFlightsByID= (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM flights WHERE id = ?', [id],(error,resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////
const addFlight =(airline_company_id, origin_country_id, destination_country_id, departure_Time, landing_time,remaning_tickets)=>{
    return new Promise((resolve,reject)=>{
        pool.query('INSERT INTO flights airline_company_id, origin_country_id, destination_country_id, departure_Time, landing_time,remaning_tickets) VALUES (?, ?, ?, ?, ?,?)', [airline_company_id, origin_country_id, destination_country_id, departure_Time, landing_time,remaning_tickets],(error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
const UpdateFlights =()=>{
    return new Promise((resolve, rejects)=>{
        pool.query('UPDATE flights SET airline = ?, origin = ?, destination_country_id = ?, departureTime = ?, landing_time = ? WHERE id = ?', [airline_company_id, origin_country_idigin, destination_country_id, departure_Time, landing_time, id] , (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        } )
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
const removeFlight =(id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('DELETE FROM flights WHERE id = ?', [id] , (error ,resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
const getFlightByAirLine=(airline_company_id)=>{
    return new Promise((resolve,rejects)=>{
        pool.query(`
        SELECT 
          flights.*,
          airline_comoanies.name AS airline_name,
          origin_country.name AS origin_country_name,
          destination_country.name AS destination_country_name
        FROM flights
        JOIN airline_comoanies ON airline_comoanies.id = flights.airline_company_id
        JOIN country AS origin_country ON origin_country.id = flights.origin_country_id
        JOIN country AS destination_country ON destination_country.id = flights.destination_country_id
        WHERE flights.airline_company_id = ?
      `, [airline_company_id], (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}
module.exports={
    getFlightByAirLine,
    getAllflights,
    removeFlight,
    UpdateFlights,
    addFlight,
    getFlightsByID,
}



