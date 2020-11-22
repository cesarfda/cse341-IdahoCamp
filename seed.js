var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Idaho Falls River Walk - Greenbelt Trail", 
        image: "https://www.idahofallsidaho.gov/ImageRepository/Document?documentID=2442",
        description: "Expansive green space on the banks of the river, offering benches, sculptures & views of the falls.",
		rateAvg: 5,
  		rateCount: 3,
		location: "525 River Pkwy, Idaho Falls, ID 83402",
		  lat: "43.496960",
		  lng: "-112.044170",
		phone: "(208) 529-1200",
		price: 0,
		booking: {
			start: "Open 24hs",
			end: "",
		}
    },
    
	{
        name: "Sawtooth Lake", 
        image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5615998029001/d15f1234-5ccf-4655-a1c3-a410d357ac04/6b096c72-b69b-4321-973c-6955c6b59c53/1280x720/match/image.jpg",
        description: "Sawtooth Lake is a 10 mile heavily trafficked out and back trail located near Stanley, Idaho that features a river and is rated as difficult. The trail is primarily used for hiking, camping, snowshoeing, and backpacking and is best used from June until September. Dogs are also able to use this trail but must be kept on leash.",
		rateAvg: 4,
  		rateCount: 0,
		location: "Lowman Idaho",
		  lat: "44.19851",
		  lng: "-115.01304",
		phone: "N",
		price: 0,
		booking: {
			start: "1st july",
			end: "augst",
		}
    },
    {
        name: "Eagle Park Campground", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "This nature space along the Teton River has 24 sites for tent camping, restrooms & potable water.",
		rateAvg: 5,
  		rateCount: 3,
		location: "Eagle Park Campground, Rexburg, ID 83440",
		  lat: "43.837038",
		  lng: "-111.796368",
		phone: "(208) 359-3020",
		price: 0,
		booking: {
			start: "24hs",
			end: "",
		}
    },
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great!!",
                                author: "Homer",
								rating:5
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;