Vue.component('slide-element', {
    props : ['text', 'isWhite'],
    template : `<section>
        <main>
            <slot name='main'></slot>
        </main>             
        <div class='card'>
            <slot name='card'>{{text}}</slot>
        </div>
        <div class="arrow">
            <div class="swiper-prev">
                <div class="up_arrow" v-if='isWhite'><img src="assets/up_arrow_gray.png" alt="arrowdown"> </div>
                <div class="up_arrow" v-else><img src="assets/up_arrow.png" alt="arrowdown"></div>    
            </div>
            <div class="swiper-next">
                <div class="down_arrow"  v-if='isWhite'><img src="assets/main_arrowdown_gray.gif" alt="arrowdown"> </div>
                <div class="down_arrow" v-else><img src="assets/main_arrowdown.gif" alt="arrowdown"></div>
            </div>
        </div>
    </section>`
});

var app = new Vue({
    el : '#mw-app',
});
