import BackTop from 'components/content/backTop/BackTop'
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

export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return{
            isShowBackTop: false,
        }
    },
    methods:{
        backClick(){
            // console.log('back to top');
            this.$refs.scroll.scrollTo(0, 0)
        },
    }
}