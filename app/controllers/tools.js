const { request, response } = require('express');

// @desc Load Tools Menu
// @route GET /api/v1/tools/
// @access Private
const loadTools = async(req=request, res=response) => {
    return res.status(202).send();
}

module.exports = {
    loadTools
}
