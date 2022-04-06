let express=require('express');
let router=express.Router();
let {getData,postData}=require('../controllers/product')

router.route('/').get(getData)
router.route('/').post(postData)
exports.module=router;
