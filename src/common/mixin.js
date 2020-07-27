import {debounce} from "./utils"

export const itemListenerMixin = {
    data(){
        return{
            itemImgLister:null
        }
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.itemImgLister = () =>{
            refresh()
        }
        this.$bus.$on('itemImageLoad',this.itemImgLister)
    }
}