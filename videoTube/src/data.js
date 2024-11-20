export const API_KEY = 'AIzaSyAwWYi5nCXTqaEOzdI9mYp_o2Q2lxiHZ2I';

export const valueConverter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M'
    }else if(value>=1000){
        return Math.floor(value/1000)+'K'
    }else {
        return value;
    }
}