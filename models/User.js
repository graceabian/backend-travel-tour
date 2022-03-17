//[SECTION] Dependencies and Modules
const mongoose = require('mongoose');

//[SECTION] Schema
const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'First Name is Required']
	},
	lastName: {
		type: String,
		required: [true, 'Last Name is Required']
	},
	middleName: {
		type:String,
		required:[true, 'Middle Name Is Required']
	},
	email: {
		type: String,
		required: [true, 'Email is Required']
	},
	password: {
		type: String,
		required: [true, 'Password is Required']
	},
	isAdmin : {
		type: Boolean,
		default: false
	},
	bookings: [ 
		{
			bookingId: {
			type: String			
			}
		}
	]
});

//[SECTION] Model
	module.exports = mongoose.model ("User", userSchema);