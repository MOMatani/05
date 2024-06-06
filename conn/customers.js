//const { error } = require('console')
const{pool} = require('./db2')
//const { promises } = require('dns')
//const { resolve } = require('path')
//const { rejects } = require('assert')

const GetAllCustomers=()=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM flights_projact.customers; ',(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}
module.exports={
    GetAllCustomers
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


const getCustomerById= (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM customers WHERE id = ?', [id],(error,resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
}
module.exports={
    getCustomerById
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////



const addCustomer =(first_name,last_name,phone_no,password, user_name , address ,id )=>{
    return new Promise((resolve,reject)=>{
        pool.query('INSERT INTO customers (first_name,last_name,phone_no,password, user_name , address , id ) VALUES (?, ?, ?,?,?,?,?)', [first_name,last_name,phone_no,password, user_name , address , id],(error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
    
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UpdateCustomer =(username, password , first_name ,last_name ,phone_no , address)=>{
    return new Promise((resolve, rejects)=>{
        pool.query(` UPDATE customers SET 
        first_name = ?,
        last_name = ?,
        phone_no = ?,
        address =? ,
        user_name =? ,
        password=?
        WHERE 
            id = ?
    `, [ username, password , first_name ,last_name ,phone_no , address], (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        } )
    })
}
module.exports={
    UpdateCustomer
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const removeCustomer =(id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('DELETE FROM customers WHERE id = ?', [id] , (error ,resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
        })
    })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getCustomerByUserName=(username)=>{
    return new Promise((resolve,rejects)=>{
        pool.query('SELECT * FROM customers WHERE user_name = ?', [username], (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}
module.exports={
    getCustomerByUserName
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getTicketsByUserName=()=>{
    return new Promise((resolve,rejects)=>{
        pool.query(`
        SELECT tickets.* FROM tickets 
        JOIN customers  ON tickets.customer_id = customers.id  WHERE customers.user_name = ?
    ` , (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}
module.exports={
    getTicketsByUserName,
    GetAllCustomers,
    getCustomerById,
    addCustomer,
    removeCustomer,
    getCustomerByUserName,
    UpdateCustomer

}
/*

// Function to get all customers
async function getAllCustomers() {
  const [rows, fields] = await pool.execute('SELECT * FROM customers');
  return rows;
}

// Function to get a customer by their ID
async function getCustomerById(id) {
  const [rows, fields] = await pool.execute('SELECT * FROM customers WHERE id = ?', [id]);
  return rows[0];
}

// Function to add a new customer
async function addCustomer(customer) {
  const { name, email, username, password } = customer;
  const [result] = await pool.execute('INSERT INTO customers (name, user_name ) VALUES (?, ?, ?, ?)', [name, email, username, password]);
  return result.insertId;
}

// Function to update an existing customer
async function updateCustomer(id, updatedCustomer) {
  const { name, email, username, password } = updatedCustomer;
  await pool.execute('UPDATE customers SET name = ?, user_name = ?, password = ? WHERE id = ?', [name, user_name, password, id]);
}

// Function to remove a customer
async function removeCustomer(id) {
  await pool.execute('DELETE FROM customers WHERE id = ?', [id]);
}

// Function to get a customer by their username
async function getCustomerByUsername(username) {
  const [rows, fields] = await pool.execute('SELECT * FROM customers WHERE username = ?', [username]);
  return rows[0];
}

// Example usage
(async () => {
  try {
    // Fetch all customers
    const allCustomers = await getAllCustomers();
    console.log('All Customers:', allCustomers);

    // Fetch customer by ID
    const customerById = await getCustomerById(1);
    console.log('Customer by ID:', customerById);

    // Add a new customer
    const newCustomerId = await addCustomer({
      name: 'John Doe',
      email: 'john@example.com',
      username: 'johndoe',
      password: 'password123'
    });
    console.log('Newly added customer ID:', newCustomerId);

    // Update an existing customer
    await updateCustomer(1, { name: 'Jane Smith', email: 'jane@example.com', username: 'janesmith', password: 'newpassword' });

    // Remove a customer
    await removeCustomer(2);

    // Fetch customer by username
    const customerByUsername = await getCustomerByUsername('johndoe');
    console.log('Customer by Username:', customerByUsername);
  } catch (error) {
    console.error('Error:', error);
  }
})();
module.exports={
    addCustomer , updateCustomer , removeCustomer , getAllCustomers , getCustomerById , getCustomerByUsername
}
*/
