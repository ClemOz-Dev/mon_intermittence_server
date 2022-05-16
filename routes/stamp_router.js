const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');

const stampHelpers = require('../helpers/stamp_helper');

router.use(function timeLog(req, res, next) {
  console.log('req: ', "Stamp router");
  next();
});

router.post('/quick_simulation',
    // policy.checkParameters(['hour', 'salary']),
    async function (req, res, next) {   
      console.log('HERE QS')
        let data = {            
            hours: req.body.hours,
            salary: req.body.salary
        }
       let quickResult = stampHelpers.getQuickResult(data);
       console.log(quickResult);
       
    }
);

router.get('/ping',   
    async function (req, res, next) {   
      console.log('HERE PING')      
    }
);

module.exports = router;