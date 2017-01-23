Vue.filter('reverse', function(value){
    return value.slice().reverse();
});
Vue.component('slide-element', {
    props : ['texts', 'isWhite', 'isDuck'],
    template : `<section>
        <slot name='main'></slot>
        <div class="card-container">
            <transition-group name="list">
                <div class='card' v-for="talk in talks" :key="talk">
                    {{ talk.text }}
                </div>
            </transition-group>
        </div>
        <slot name='sub'></slot>
        <!-- duck -->
        <div class="duck-container">
            <img v-if="isDuck == 'happy'" src="images/love_icon.png" alt="">
            <img v-if="isDuck == 'sad'" src="images/cry_icon.png" alt="">
            <div v-else></div>
        </div>
        <!-- arrow prev & next -->
        <div class="arrow">
            <div class="swiper-prev">
                <div v-on:click="prev_step" class="up_arrow">
                    <img :src="arrow[0]" alt="arrowup"> 
                </div>
            </div>
            <div class="swiper-next">
                <div v-on:click="next_step" class="down_arrow">
                    <img :src="arrow[1]" alt="arrowdown">
                </div>
            </div>
        </div>
    </section>`,
    data : function() {
        return {
            talks : [],
        }
    },
    computed : {
        arrow : function() {
            var gray = ['assets/up_arrow_gray.png', 'assets/main_arrowdown_gray.gif'];
            var white = ['assets/up_arrow.png', 'assets/main_arrowdown.gif'];
            return this.isWhite ? gray : white;
        }
    },
    methods : {
        next_step : function() {
            if (this.texts && this.texts.length > 0) {
                this.talks.push(this.texts.shift());
            } else {
                mySwiper.slideNext();
            }
        }, 
        prev_step : function() {
            if (this.talks.length > 0) {
                this.texts.splice(0, 0, this.talks.pop());
            } else {
                mySwiper.slidePrev();
            }
        }
    }
});

var app = new Vue({
    el : '#mw-app'

});
