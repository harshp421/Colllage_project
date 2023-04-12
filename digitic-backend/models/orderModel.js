const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      require:true
    },
    shippingInfo:{
      firstName:{
        type:String,
        required:true,

      },
      lastName:{
        type:String,
        required:true,
      },
      address:{
        type:String,
        required:true,
      },
      city:{
        type:String,
        required:true,
      },
      state:{
        type:String,
        required:true,
      },
      other:{
        type:String,
        required:true
      },
      Pincode:{
        type:Number,
        required:true,
      }

    },
    paymentInfo:{
      razorpayOrderId:{
        type:String,
        required:true
      },
      razorpayPaymentId:{
        type:String,
        required:true
      },
    },
    orderItem:[
      {
          product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            require:true

          },
          color:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Color",
            require:true
          },
          Quantity:{
            type:Number,
            require:true
          },
          price:{
            type:Number,
            required:true
          }
      }
    ],
    paidAt:{
      type:Date,
      default:Date.now()

    },
    totalPrice:{
      type:Number,
      require:true,
    },
    totalPriceAfterDiscount:{
      type:Number,
      require:true,
    },
    orderStatus:{
       type:String,
      default:"Ordered"
    }

  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
