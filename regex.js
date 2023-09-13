const _teny=require('./array')
const regexMilay=new RegExp(`\\b(${_teny.join('|')})\\b`, 'i');
module.exports=regexMilay