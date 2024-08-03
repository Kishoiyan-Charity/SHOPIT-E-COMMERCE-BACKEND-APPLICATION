const  mongoose  = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    }, 
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },

    ratins: {
        type: Number,
        default: 0,
    },

    images: [
        {
        public_id:{
            type:String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }, 
],
category: {
    type: String,
    required: [true, 'Please select product category'],
    enum:{
        values: [
            'Electronics',
            'Cameras',
            'Headphones',
            'Laptops',
            'Accessories',
            'Food',
            'Books',
            'Clothes/Shoes',
            'Beauty/Health',
            'Sports',
            'Outdoor',
            'Home'
        ],
        message: 'Please select correct category for product'
    
    },
    seller: {
        type: String,
        required: [true, 'Please eneter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please eneter product stock'],
        maxLength: [5, 'product cannot exceed 5 characters']
    },
    numOfReviews: {
        type: Number,
        default: 0
    }, 
    reviews: [
        {
          name:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        comment:{
            type: Number,
            required: true,
        },
    }
],
user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true

},
   createdAt: {
    type: Date,
    default: Date.now

   }
},
    

})

module.exports = mongoose.model('Product', productSchema)