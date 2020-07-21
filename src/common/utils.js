export function debounce(func,delay){
    //防抖函数 不断初始化timer，直到到达delay阈值，执行func
    let timer = null

    return function(...args){
        if(timer)clearTimeout(timer)

        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}