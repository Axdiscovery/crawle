const superagent = require("superagent");
const cheerio = require("cheerio");
const foodoperation = require("./operation/foodoperation");



        superagent.get(`http://i.meituan.com/`)
            .end(function (err, res) {
                var $ = cheerio.load(res.text);   //cheerio.load相当于加载所有的html代码
                var listArrs = $(".guess-like").children(".list");
                console.log(listArrs.html());
                // listArrs.each((inx, data) => {
                //     var food = {
                //         title: '',
                //         price: 0,
                //         photo: ''
                //     };
                //     food.title = $(data).find(".dealcard-block-right .dealcard-brand").text();
                //     food.price = $(data).find(".price .strong").text();
                //     let imgUrl = $(data).find(".dealcard-img img").attr("src");
                //     if (imgUrl == null) {
                //         imgUrl = $(data).find(".dealcard-img img").attr("data-lazy-img");
                //     }
                // food.photo = imgUrl;
                // let pro = new foodoperation();
                // pro.addfood(food, (error, result) => {
                //     console.log(result);
                // })
            })
        // });
