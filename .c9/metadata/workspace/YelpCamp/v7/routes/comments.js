{"filter":false,"title":"comments.js","tooltip":"/YelpCamp/v7/routes/comments.js","undoManager":{"mark":55,"position":55,"stack":[[{"start":{"row":0,"column":0},"end":{"row":39,"column":0},"action":"insert","lines":["","//=========================","//COMMENT ROUTES","//=========================","","app.get(\"/campgrounds/:id/comments/new\", isLoggedIn, function(request, response) {","    //find campground by id","    Campground.findById(request.params.id, function(error, campground){","      if (error) {","          console.log(error);","      } else {","          response.render(\"comments/new\",{campground : campground});","      } ","    });","});","","app.post(\"/campgrounds/:id/comments\", isLoggedIn   ,function(request , response){","   //lookup the campgrounds using ID","   Campground.findById(request.params.id, function(error, campground) {","       if (error){","           console.log(error);","           response.redirect(\"/campground\");","       } else {","           Comment.create(request.body.comment, function(error, comment){","             if(error){","                 console.log(error);","             } else {","                   //create new comment","                   //connect new campground page","                   //redirect","                 campground.comments.push(comment);","                 campground.save();","                 response.redirect(\"/campgrounds/\" + campground._id);","             } ","           });","       }","   });","","});",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["var express = require(\"express\");","var router  = express.router;",""],"id":2}],[{"start":{"row":41,"column":0},"end":{"row":42,"column":24},"action":"insert","lines":["","module.exports = router;"],"id":3}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"remove","lines":["a"],"id":4}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"remove","lines":["p"],"id":5}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"remove","lines":["p"],"id":8}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["r"],"id":9},{"start":{"row":18,"column":1},"end":{"row":18,"column":2},"action":"insert","lines":["o"]},{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":["u"]},{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":["t"]},{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":["e"]},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["a"],"id":10}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["p"],"id":11}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":["p"],"id":12}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["r"],"id":13},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["o"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["u"]},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["t"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["e"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":33},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"],"id":15},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":["a"],"id":16}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["v",""],"id":17}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"],"id":18},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":19},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["C"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["A"]}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"remove","lines":["A"],"id":20}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"],"id":21}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":6},"action":"remove","lines":["Ca"],"id":22},{"start":{"row":2,"column":4},"end":{"row":2,"column":14},"action":"insert","lines":["Campground"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":[" "],"id":23},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[" "],"id":24},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["r"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["e"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["q"]}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":20},"action":"remove","lines":["req"],"id":25},{"start":{"row":2,"column":17},"end":{"row":2,"column":28},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["."],"id":26},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"remove","lines":["/"],"id":27}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["."],"id":28},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["/"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["c"]}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"remove","lines":["c"],"id":29}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["m"],"id":30},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["o"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["d"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["e"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["l"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["s"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["c"],"id":31},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["a"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["m"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["p"]},{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["g"]},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["r"]},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["u"]},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["o"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["u"]}],[{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"remove","lines":["u"],"id":32},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"remove","lines":["o"]},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"remove","lines":["u"]}],[{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["o"],"id":33},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["u"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["n"]},{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"insert","lines":[","],"id":34}],[{"start":{"row":2,"column":49},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":36},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["C"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["o"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["m"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["m"]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["Comm"],"id":37},{"start":{"row":3,"column":4},"end":{"row":3,"column":11},"action":"insert","lines":["Comment"]}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":[" "],"id":38},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":[" "]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":[" "]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":[" "]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":[" "],"id":39},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["r"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["q"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["u"]}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":21},"action":"remove","lines":["requ"],"id":40},{"start":{"row":3,"column":17},"end":{"row":3,"column":28},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["."],"id":41},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["."]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["/"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["m"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["o"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["d"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["e"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["l"]},{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["/"],"id":42},{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":["c"]},{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["o"]},{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"insert","lines":["m"]},{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"insert","lines":["m"]},{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"insert","lines":["e"]},{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"insert","lines":["t"]},{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"remove","lines":["n"],"id":43},{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"remove","lines":["t"]}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"insert","lines":["n"],"id":44},{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"insert","lines":["t"]},{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"insert","lines":["A"],"id":45}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["A"],"id":46}],[{"start":{"row":3,"column":46},"end":{"row":3,"column":47},"action":"insert","lines":[";"],"id":47}],[{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"remove","lines":[","],"id":48}],[{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"insert","lines":[";"],"id":49}],[{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"insert","lines":["s"],"id":50}],[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["s"],"id":51}],[{"start":{"row":41,"column":3},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":52},{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":43,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["function isLoggedIn(request, response, next){","    if(request.isAuthenticated()){","        return next();","    }","    response.redirect(\"/login\");","}",""],"id":53}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"remove","lines":["r"],"id":54}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["R"],"id":55}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":30},"action":"insert","lines":["()"],"id":56}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["f"],"id":57}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["f"],"id":58}]]},"ace":{"folds":[],"scrolltop":496.546875,"scrollleft":0,"selection":{"start":{"row":27,"column":2},"end":{"row":27,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":26,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1546189305445,"hash":"e5370a81bea5ebe2d2fa38affcdbf862a2ace0eb"}