import http from '../untils/http'

//首页
export const HomeData=()=>http.get('index/index');

//分类导航
export const Catenav=()=>http.get('category/categoryNav?id=1005000')

// 分类详情
export const CateList=(id)=>http.get(`goods/goodsList?categoryId=${id.categoryId}`);

//商品详情
export const Detaillist=(id)=>http.get('goods/detailaction?openId=13216484256&id='+id)
