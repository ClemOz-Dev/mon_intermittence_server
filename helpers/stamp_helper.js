let stampHelper = {
  getQuickResult: function (data) {
    let partA = (31.36 * (0.42 * data.salary)) / 5000;
    let partB = (31.36 * (0.26 * data.hours)) / 507;
    let partC = 12.54;

    return (partA + partB + partC); 
  },

};

module.exports = stampHelper;
