const mongoose =require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    featured:{
        type:Boolean,
        default:true,
    },
    rating: {
        type: Number,
        default:4.9,
    },
    company: {
        type: String,
        enum:{
            values:['apple','samsung','vivo','mi']
        }
    }
  }
);

module.exports = mongoose.model("Products", productSchema);