const { Router } = require("express");

const routes = new Router();

function testMid(req,res,next){
    console.log('URL: ', req.url);
    next();
}

routes.get('/' ,testMid, (req,res) => {
    return res.json({message:"hello world"});
});

module.exports = routes;