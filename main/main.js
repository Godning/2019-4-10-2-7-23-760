module.exports = function main(inputs) {
    // write your code here...
    var dis = inputs.distance;
    var pt = inputs.parkTime;
    var pre_price = 0.8;
    var out = dis>8 ? dis-8 : 0;
    var pt_price = pt * 0.25;
    var price;
    if(dis<=2){
        price = 6 + pt_price;
    }else{
        price = 6 + (dis-2) * pre_price + out * pre_price * 0.5 + pt_price;
    }
    return Math.round(price);
};
