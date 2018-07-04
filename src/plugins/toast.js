/* 
*@actionName Toast
*
*
*@param msg string/component/code
*
*
*
*
*
*
*/
import toast from './toast.vue'
let Toast = {
    install(Vue, options) {
        console.log(Vue);
        console.log(options)
        let mixin = [
            {
                created(){
                    console.log('toast created')
                }
            }
        ]
        toast.mixins = mixin;
        //全局组件
        Vue.component('Toast',toast)
    }
}
export default Toast;