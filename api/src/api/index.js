const router = require('express').Router();
const fs = require('fs');
const controllerList = fs.readdirSync(__dirname+'/../controllers');
// 개발시 모든 통신을 get을 허용해주기위해 설정 (개발용)
const aggGet = true;
// get 통신을 허용해줄 proc 등록 (개발용)
const aggGetList =[];
let ctr = [];

for(var item of controllerList){
    ctr[item] = require('../controllers/'+item);
}
//알아서 라우트를 거쳐 api/ 이후 첫번째경로를 클래스, 두번째 경로는 함수로 지정 그 이후는 변수
// get
router.get('/:page/:proc?', async (req , res) => {
    if(ctr[req.params.page+'.js']) {
        var params = get_param(req);
        params.authorization = (req.headers.authorization)? req.headers.authorization : '';
        params.headers = (req.headers)? req.headers : '';
        try{
            req.params.proc = (req.params.proc)? req.params.proc : 'index';
            var result = await ctr[req.params.page+'.js'][req.params.proc](params,res);
            // result = (result.data)? result.data : result;
            res.status(200).json(result)
        }catch(e){
            console.log(e);
            res.status(400).json('error')
        }
    }
});

// post
router.post('/:page/:proc', async (req , res) => {
    if(ctr[req.params.page+'.js']) {
        var params = get_param(req);
        params.authorization = (req.headers.authorization)? req.headers.authorization : '';
        params.headers = (req.headers)? req.headers : '';
        try{
            req.params.proc = (req.params.proc)? req.params.proc : 'index';
            var result = await ctr[req.params.page+'.js'][req.params.proc](params,res);
            // result = (result.data)? result.data : result;
            res.status(200).json(result)
        }catch(e){
            console.log(e);
            res.status(400).json('error')
        }
    }
});

// param 빼주기
function get_param(req){
    var params = {};
    // get 값들 전달
    if(Object.keys(req.query).length){
        if(aggGet || aggGetList.indexOf(req.params.proc) >= 0){
            params = req.query;
        }
    }
    // post 값들 전달
    if(Object.keys(req.body).length){
        params = req.body;
    }
    return params;
}
module.exports = router;
