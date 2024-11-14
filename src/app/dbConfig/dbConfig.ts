import mongoose from 'mongoose';
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('User connected successfully');
          });
          connection.on('error',(err)=>{
            console.log('Something went Wrong!! '+err);
            process.exit();
          })

    }
    catch(err){
        console.log("Some error occurred ! "+err); 
    }
}