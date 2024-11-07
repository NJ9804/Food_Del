import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://jnandana04:Nandu2004@cluster0.q5zgc.mongodb.net/FoodDel').then(()=>console.log("DB Connected"));
   
}


