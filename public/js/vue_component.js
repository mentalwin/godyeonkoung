Vue.component('slide-element', {
    props : ['texts', 'isWhite'],
    template : `<section>
        <slot name='main'></slot>
        <div class='card' v-for="talk in talks">
            {{ talk }}
        </div>
        <slot name='sub'></slot>

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
    el : '#mw-app',
});
