const express = require('express');
const { convertArray, findMean, findMedian, findMode } = require('./operations');
const ExpressError = require('./expressError')

const app = express();

app.get('/mean', function (req, res){
    let nums = convertArray(req);

    let result = {
        operation: "mean",
        value: findMean(nums)
    }

    return res.send(result);
})

app.get('/median', function (req, res){
    let nums = convertArray(req);

    let result = {
        operation: "median",
        value: findMedian(nums)
    }    

    return res.send(result)
})

app.get('/mode', function (req, res){
    let nums = convertArray(req);
    let result = {
        operation: "median",
        value: findMode(nums)
    }    

    return res.send(result)    
})

// 404 handler
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found enter /mean, /median, or /median", 404);
    return next(err)
  });
  

//500 handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: "use ?nums=" + err.message
    });
  });

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });
  