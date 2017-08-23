//homebaner图接口
var HomebannerApi="/v4/api/billboard/home?__t=1503111815062";
//头部地址api
var AddressApi='/v4/api/city?__t=1503128959853'
//主页列表
var HomeList="/v4/api/film/now-playing?__t=1503299063591&page=1&count=5"
//主页列表二
var HomeList2="/v4/api/film/coming-soon?__t=1503304234339&page=1&count=3"
//详情数据
var  particularsApi='/v4/api/film/3591?__t=1503370688825'
//电影列表
var MovielistApi='/v4/api/film/now-playing?page=1&count=7'
//电影列表二
var MovieComingApi ='/v4/api/film/coming-soon?page=1&count=7'
//影院
var CinemaApi='/v4/api/cinema?__t=1503407354055'
//电影院详情
var  CinemaparticularsApi='/v4/api/cinema/3280?__t=1503478365810'

export default{
    HomebannerApi,
    AddressApi,
    HomeList,
    HomeList2,
    particularsApi,
    MovielistApi,
    MovieComingApi,
    CinemaApi,
    CinemaparticularsApi
}