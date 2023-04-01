const Mongoose=require("mongoose")


let rSchema=Mongoose.Schema(
    {
        productId:String,
        productName:String,
        modelNumber:String,
        MRP:String,
        Image:String
    }
)
let rModel=Mongoose.model("products",rSchema)
module.exports=rModel