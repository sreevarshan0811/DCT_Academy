import mongoose from 'mongoose'
const{Schema,model }= mongoose
const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

const Category = model('Category1', categorySchema)

export default Category
