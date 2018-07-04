<template>
    <div class="toast">
        <transition name="toast">
            <div class="tips" v-for="x in msg" v-show="isActive">{{x}}
                <slot v-if="!x"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import './toast.css'
    export default {
        data() {
            return {
                isActive: false,
                msg: [],
                timeout: 2000,
            }
        },
        props: {
        },
        watch: {
            isActive(n, o) {
                if (n) {
                    setTimeout(() => {
                        this.msg = [];
                        this.isActive = false
                    }, this.timeout)
                }
            }
        },
        methods: {
            active(msg,options) {
                if(options){
                         this.timeout = options.timeout;
                }
           
                this.msg.push(msg);
                this.isActive = true
            }
        }
    }
</script>

<style lang="">

</style>