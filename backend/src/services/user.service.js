const userRepository = require('../repository/user.repository.js');
const Admin = require('../models/admin.js')

async function addUser(user){
    console.log(user)
    try{
        // check if user exists with the given email or not
        // if it exists return a custom message and if not add the user data
        const userExists = await userRepository.isUserExits(user.email);
        if(!userExists){
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const userData = new Admin({...user,password:hashedPassword});
            return await userRepository.addUser({...userData, role:"user"});
        }
        return "email is already registered with us";
    }
    catch(err){
        return err
    }
}

async function addEnquiry(data){
    const enquiryData = {user_id:data.email, name:data.name,blood_group:data.bloodGroup, location:data.location, message:data.message }
    return userRepository.addEnquiry(enquiryData)
}

// to be updated not in use, does nothing right now
async function getEnquiries(){
    return await userRepository.getEnquiries()
}

module.exports = {
    addEnquiry,
    getEnquiries,
    addUser
}