
const { error } = require('console')
const{pool} = require('./db2')
const { promises } = require('dns')
const { resolve } = require('path')
const { rejects } = require('assert')



////////////////////////////////////////////////////////////////////////////////////

const getAllAdmins=()=>{
    return new Promise((resolve , reject)=>{
        pool.query('SELECT * FROM flights_projact.administrators;',(error,resulte)=>{
            if(error){
              reject(error)
            }
            resolve(resulte)
        })
    })
  
}
module.exports={
    getAllAdmins
}

/////////////////////////////////////////////////////////////////////////////////////////
const getAdminByID= (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM administrators WHERE id = ?', [id],(error,resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const addAdmin =(first_name,last_name,password, user_name , id )=>{
    return new Promise((resolve,reject)=>{
        pool.query('INSERT INTO administrators (first_name,last_name,password, user_name, id ) VALUES (?, ?, ?,?)', [first_name,last_name,phone_no,password, user_name , address, id],(error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        })
    })
    
}
    


/////////////////////////////////////////////////////////////////////////////////////////////////////
const UpdateAdmin =(name,  username, password, id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('UPDATE administrators SET name = ?, user_name = ?, password = ? WHERE id = ?', [name,  username, password, id] , (error , resulte)=>{
            if(error){
                reject(error)
            }
            resolve(resulte)
        } )
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
const removeAdmin =(id)=>{
    return new Promise((resolve, rejects)=>{
        pool.query('DELETE FROM administrators WHERE id = ?', [id], (error ,resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte )
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
const getAdminByUserName=(username)=>{
    return new Promise((resolve,rejects)=>{
        pool.query('SELECT * FROM administrators WHERE user_name = ?', [username] , (error , resulte)=>{
            if(error){
                rejects(error)
            }
            resolve(resulte)
         
        })
      
    })
}
module.exports={
    getAdminByUserName,
    getAllAdmins,
    getAdminByID,
    addAdmin,
    UpdateAdmin,
    removeAdmin,
}
/*
// Function to get all admins
async function getAllAdmins() {
    const [rows, fields] = await pool.execute('SELECT * FROM administrators');
    return rows;
  }
  
  // Function to get an admin by their ID
  async function getAdminById(id) {
    const [rows, fields] = await pool.execute('SELECT * FROM administrators WHERE id = ?', [id]);
    return rows[0];
  }
  
  // Function to add a new admin
  async function addAdmin(admin) {
    const { name, email, username, password } = admin;
    const [result] = await pool.execute('INSERT INTO administrators (name, email, username, password) VALUES (?, ?, ?, ?)', [name, email, username, password]);
    return result.insertId;
  }
  
  // Function to update an existing admin
  async function updateAdmin(id, updatedAdmin) {
    const { name, email, username, password } = updatedAdmin;
    await pool.execute('UPDATE administrators SET name = ?, email = ?, username = ?, password = ? WHERE id = ?', [name, email, username, password, id]);
  }
  
  // Function to remove an admin
  async function removeAdmin(id) {
    await pool.execute('DELETE FROM administrators WHERE id = ?', [id]);
  }
  
  // Function to get an admin by their username
  async function getAdminByUsername(username) {
    const [rows, fields] = await pool.execute('SELECT * FROM administrators WHERE username = ?', [username]);
    return rows[0];
  }
  
  // Example usage
  (async () => {
    try {
      // Fetch all admins
      const allAdmins = await getAllAdmins();
      console.log('All administrators:', allAdmins);
  
      // Fetch admin by ID
      const adminById = await getAdminById(1);
      console.log('administrators by ID:', adminById);
  
      // Add a new admin
      const newAdminId = await addAdmin({
        name: 'Admin Name',
        email: 'admin@example.com',
        username: 'adminuser',
        password: 'adminpassword'
      });
      console.log('Newly added admin ID:', newAdminId);
  
      // Update an existing admin
      await updateAdmin(1, { name: 'Updated Admin Name',  username: 'updatedadminuser', password: 'newadminpassword' });
  
      // Remove an admin
      await removeAdmin(2);
  
      // Fetch admin by username
      const adminByUsername = await getAdminByUsername('adminuser');
      console.log('administrators by Username:', adminByUsername);
    } catch (error) {
      console.error('Error:', error);
    }
  })();
module.exports={
    getAllAdmins , getAdminById , getAdminByUsername , addAdmin , removeAdmin , 
}  

*/
