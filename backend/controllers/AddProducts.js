
 const AddProductsModel = require("../modals/addProductSchema.js");

 // Controller function to add a new product in the database

const AddProductController = async (req, res, next) => {
    console.log("this the add Group")
    const responseObject = { 
        isServerError: false 
    }
    try {
        const { imageLink,name, description, price, discount, sku, availableQuantity} = await req.body.product;
        console.log("data in the backend is getting fetched: " + name + "   " + imageLink)
        console.log(req.body)
            const newProduct = new AddProductsModel({
                ImageLink :imageLink,
                Name : name,
                Description : description,
                Price : price,
                Discount : discount,
                SKU_Number: sku,
                Available_Quantity:availableQuantity
            });
            console.log(newProduct)
            await newProduct.save();
            console.log("product is in db" + newProduct);
            res.status(201).send(responseObject); // Return HTTP 201 Created status
            return;
    } catch (err) {
        console.log(err);
        responseObject.isServerError = true;
        res.status(500).send(responseObject); // Return HTTP 500 Internal Server Error status
    }
};

// Controller function to retreive all products in the home page

const GetAllProductsController=async(req,res)=>{
    console.log(" get all data from backend")
    try{
const allData= await AddProductsModel.find();
res.status(201).send(allData);
    }catch(err){
        res.status(500).send(err);
    }

}
exports.AddProductController=AddProductController;
exports.GetAllProductsController=GetAllProductsController;