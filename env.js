/**
 * 使用cors或者jsonp方式跨域才会用到这种方式
 * process.env.NODE_ENV 是通过node获取的（mode对应的值） vue-cli-service serve --mode=development
 * 代理的方式需修改vue.conf.js
 */


let baseURL;

switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = "http://dev-setpup.hualala.com";
        break;
    case 'test':
        baseURL = "http://dev-setpup.hualala.com";
        break;
    case 'prev':
        baseURL = "http://dev-setpup.hualala.com";
        break;
    case 'production':
        baseURL = "http://dev-setpup.hualala.com";
        break;
}


export default {
    baseURL
}

