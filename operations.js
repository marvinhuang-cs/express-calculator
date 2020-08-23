function convertArray(req) {
    let nums = req.query.nums.split(',').map(Number);
    nums = nums.filter(Boolean)
    
    return nums;
}

function findMean(nums) {
    if (nums.length === 0) {
        return 0
    }
    sum = nums.reduce(function(a,b){
        return a + b
    })

    result = (sum/nums.length)
    return result;
}

function findMedian(nums) {
    if (nums.length === 0) {
        return null;
    }

    let sorted = nums.sort((a,b) => a-b);
    let half = Math.floor(sorted.length/2);

    
    if (sorted.length % 2) {
        return sorted[half];
    }

    return (sorted[half -1] + sorted[half]) /2
}

function findMode(nums) {
    if (nums.length === 0) {
        return null;
    }
    mapping = {};
    counter = 0
    for(var i = 0;i < nums.length; i++){
        if (!mapping[nums[i]]) mapping[nums[i]] = 0;
        mapping[nums[i]] += 1}
    
        return mapping;
}

module.exports = {
    convertArray,
    findMean,
    findMedian,
    findMode
}