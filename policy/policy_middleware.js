// contains middleware that will check some condition before giving acces to other
const ERROR_TYPE = require('./errorType');

const policies = {   
    /**
     * Check if the required parameters are existing
     * @param expectedParameter: a table of all expected parameters
     * @returns {Function}
     */
    checkParameters: function check(expectedParameter) {
        // make sure that I don't make multiple copies of the same function
        return check[expectedParameter] || (check[expectedParameter] = function (req, res, next) {
            let conform = true
            let appendParameterMissing = '';
            for (let i = 0; i < expectedParameter.length; i++) {
                if (req.body[expectedParameter[i]] === undefined &&
                    req.query[expectedParameter[i]] === undefined
                    && req.params[expectedParameter[i]] === undefined) { // the parameter doesn't exist
                    conform = false;
                    appendParameterMissing += expectedParameter[i] + ';'; 
                }

                if (req.body[expectedParameter[i]] === "" ||
                    req.query[expectedParameter[i]] === ""
                    || req.params[expectedParameter[i]] === "") { // the parameter doesn't exist
                    conform = false
                    appendParameterMissing += expectedParameter[i] + ';'; 
                }
            }
            if (conform) next();
            else {
                next(ERROR_TYPE.MISSING_PARAMETER);
                console.log('Paramètres manquants : ' + appendParameterMissing);
            };
        });
    },
}

module.exports = policies