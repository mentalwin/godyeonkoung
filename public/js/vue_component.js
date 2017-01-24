Vue.filter('reverse', function(value){
    return value.slice().reverse();
});
Vue.component('slide-element', {
    props : {
        properties : {
            type : Object,
            default : function() {
                return {
                    next : []
                    texts : [],
                    isWhite : false,
                    isDuck : "",
                    hasVideo : false,
                    videoId : null,
                }
            }
        }
    }, 
    template : `<section>
        <slot name='main'></slot>
        <div class="card-container">
            <transition-group name="list">
                <div class='card' v-bind:class="{other : talk.from != 'duck'}" v-for="talk in talks" :key="talk">
                    {{ talk.text }}
                </div>
            </transition-group>
        </div>
        <slot name='sub'></slot>
        <!-- duck -->
        <div class="duck-container">
            <img v-if="properties.isDuck === 'happy'" src="images/love_icon.png" alt="">
            <img v-if="properties.isDuck === 'sad'" src="images/cry_icon.png" alt="">
            <div v-else></div>
        </div>
        <!-- arrow prev & next -->
        <div class="arrow" >
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
            return this.properties.isWhite ? gray : white;
        }
    },
    methods : {
        next_step : function() {
            var prop = this.properties;
            if (prop.texts && prop.texts.length > 0) {
                this.talks.push(prop.texts.shift());
            } else {
                mySwiper.slideNext();
            }
        }, 
        prev_step : function() {
            var prop = this.properties;
            if (this.talks.length > 0) {
                prop.texts.splice(0, 0, this.talks.pop());
            } else {
                mySwiper.slidePrev();
            }
        }
    }
});

var objList = [
    {
        texts : [],
        isWhite : false,
        isDuck : 'happy'
    },
    {
        isWhite : false,
        texts : [
        {
            text : ''
        },
        {
            text : '#CEV컵, 챔피언스리그, 터키리그까지 전관왕 휩쓴 사기캐 우리 연경 선수',
            from : 'duck'
        }],
        hasVideo : true,
        isDuck : 'happy',
        videoId : "video1"
    },
    {
        texts : [
            {text:"#아아... 태어날 때부터 스파이크 때렸을 것 같은 언니지만...", from:"sdf"},
            {text:"#처음부터 배구를 잘한 건 아니었덕...", from:"duck"}
        ],
        isWhite : true,
        isDuck : "sad"
    },
    {
        texts : [
            {text:"#그래도 좌절하지 않은 연경언니."},
            {text:"#시합은 많이 뛰지 못했지만 더 열심히 연습했덕.."}],
        isWhite : true,
        isDuck : "happy"
    },
    {
        texts : [
            {text:"# 이때 배구의 기본기를 튼튼하게 다졌지요!"}],
        isWhite : true,
        isDuck : "happy"
    }

]


var options = {
    el : '#mw-app',
    data : {}
}
for(var i = 0; i < objList.length; i++) {
    options.data["obj" + (i+1)] = objList[i];
}
// get data from 
var app = new Vue(options);


