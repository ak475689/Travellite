import mongoose from 'mongoose';


const connection =async(username,password)=>{

    const URL=`mongodb+srv://${username}:${password}@ecommerceweb.iqtmn.mongodb.net/eCommerceWeb?retryWrites=true&w=majority`;

    try{
         await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true});
         console.log("Database successfully connected");
    }catch(error){
        console.log(error.message);
    }
    
}

export default connection;