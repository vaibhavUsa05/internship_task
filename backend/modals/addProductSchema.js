const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/QuickShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB database connection successful to add Products');
}).catch((error) => {
  console.log('MongoDB database connection error: ', error);
});

const AddProducts = new mongoose.Schema({
 ImageLink: {
    type: String
    },
    Name: {
    type: String,
    required: true
    },
     Description: {
      type: String,
      required: true
     },
    Price: {
    type: Number,
    
    },
    Discount: {
    type: Number,

    },
    SKU_Number: {
    type: String,
    required: true
    },
   Available_Quantity: {
        type: Number
        }
    });
    
    const AddProductsModel= mongoose.model('Sillections', AddProducts);
    module.exports = AddProductsModel;