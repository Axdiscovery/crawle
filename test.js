const foodoperation = require("./operation/foodoperation");

    let pro = new foodoperation();
var proObj = {
    title:"xx",
    price:"1.1",
    photo:"xxx"
}
pro.addfood(proObj,(error,result)=>{
    console.log(result);
})