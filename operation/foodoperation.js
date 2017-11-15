const foodmodle = require("../modle/foodmodle");
class foodoperation{

    addfood(food,cb){

        var food = new foodmodle(food);
        food.save((error,result)=>{
            cb(error,result);
        });
    }

}
module.exports = foodoperation;