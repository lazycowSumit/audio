var mongoose = require('mongoose');
var img= new mongoose.Schema({
    name:{ type: String },
    email:{ type: String },
    hobbies: { type: String },
    image: { type: String },
    video: { type: String, default: 'active' },
	created_date:{ type: Date, default: Date.now  },
	updated_date:{ type: Date, default: Date.now  },
    
});

module.exports = mongoose.model('imges', img);
