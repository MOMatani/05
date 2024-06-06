

const{pool} = require('./db2');
const getAllTickets=()=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM flights_projact.tickets;',(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}

//////////////////////////////////////////////////////////////////////////////////////////////
const getTicketsByID= (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM tickets WHERE id = ?', [id],(error,resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////
const addTickets =(id , flight_id , customer_id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('INSERT INTO tickets (id , flight_id , customer_id) VALUES (?, ?, ?)', [id , flight_id , customer_id],(error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
const UpdateTickets =(customer_id , flight_Id, id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('UPDATE tickets SET customer_id = ?, flight_Id = ?,WHERE id = ?', [customer_id , flight_Id, id] , (error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        } )
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const removeTickets =(id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('DELETE FROM tickets WHERE id = ?', [id], (error ,resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        })
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
const getTicketsByUserName=(user_name)=>{
    return new Promise((resolve,rejects)=>{
pool.query('SELECT * FROM tickets WHERE user_Id IN (SELECT id FROM customers WHERE user_name = ?)', [user_name], (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getTicketsByUserID =(customer_id)=>{
    return new Promise((resolve,rejects)=>{
        pool.query('SELECT * FROM tickets WHERE customer_id = ?', [customer_id] , (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}
module.exports={
    getTicketsByUserID,
    getAllTickets,
    getTicketsByUserName,
    removeTickets,
    UpdateTickets,
    addTickets,
    getTicketsByID
}

/*
// Function to get all tickets
async function getAllTickets() {
    const [rows, fields] = await pool.execute('SELECT * FROM tickets');
    return rows;
  }
  
  // Function to get a ticket by its ID
  async function getTicketById(id) {
    const [rows, fields] = await pool.execute('SELECT * FROM tickets WHERE id = ?', [id]);
    return rows[0];
  }
  
  // Function to add a new ticket
  async function addTicket(ticket) {
    const { userId, flightId, seatNumber, price } = ticket;
    const [result] = await pool.execute('INSERT INTO tickets (userId, flightId, seatNumber, price) VALUES (?, ?, ?, ?)', [userId, flightId, seatNumber, price]);
    return result.insertId;
  }
  
  // Function to update an existing ticket
  async function updateTicket(id, updatedTicket) {
    const { userId, flightId, seatNumber, price } = updatedTicket;
    await pool.execute('UPDATE tickets SET userId = ?, flightId = ?, seatNumber = ?, price = ? WHERE id = ?', [userId, flightId, seatNumber, price, id]);
  }
  
  // Function to remove a ticket
  async function removeTicket(id) {
    await pool.execute('DELETE FROM tickets WHERE id = ?', [id]);
  }
  
  // Function to get tickets by user ID
  async function getTicketsByUserID(userId) {
    const [rows, fields] = await pool.execute('SELECT * FROM tickets WHERE userId = ?', [userId]);
    return rows;
  }
  
  // Function to get tickets by username
  async function getTicketsByUserName(username) {
    const [rows, fields] = await pool.execute('SELECT * FROM tickets WHERE userId IN (SELECT id FROM customers WHERE username = ?)', [username]);
    return rows;
  }
  
  // Example usage
  (async () => {
    try {
      // Fetch all tickets
      const allTickets = await getAllTickets();
      console.log('All Tickets:', allTickets);
  
      // Fetch ticket by ID
      const ticketById = await getTicketById(1);
      console.log('Ticket by ID:', ticketById);
  
      // Add a new ticket
      const newTicketId = await addTicket({
        userId: 1,
        flightId: 1,
        seatNumber: 'A1',
        price: 100
      });
      console.log('Newly added ticket ID:', newTicketId);
  
      // Update an existing ticket
      await updateTicket(1, {
        userId: 2,
        flightId: 2,
        seatNumber: 'B2',
        price: 150
      });
  
      // Remove a ticket
      await removeTicket(2);
  
      // Fetch tickets by user ID
      const ticketsByUserId = await getTicketsByUserID(1);
      console.log('Tickets by User ID:', ticketsByUserId);
  
      // Fetch tickets by username
      const ticketsByUserName = await getTicketsByUserName('johndoe');
      console.log('Tickets by User Name:', ticketsByUserName);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
  module.exports={
    getAllTickets , getTicketById , getTicketsByUserID , getTicketsByUserName, addTicket, updateTicket , removeTicket
  }
  */