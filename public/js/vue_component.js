var postfix, mobile_mode;
var mql = matchMedia("(min-aspect-ratio: 1/1)"),
    handler = function(mql) {
        if(mql.matches) {
            // 웹 비디오 리턴
            postfix = "_w";
            mobile_mode = false;
        } else {
            // 모바일 비디오 return
            console.log("!!!!");
            postfix = "_m";
            mobile_mode = true;
        }
    }
handler(mql);

var objList = [
    //1
    {
        texts : [],
        isWhite : false,
        background_image : "../images/olympic.png"
    },
    //2
    {
        isWhite : true,
        texts : [
        {
            text : '',
            type : 'etc'
        },
        {
            text : '#CEV컵, 챔피언스리그, 터키리그까지 전관왕 휩쓴 사기캐 우리 연경 선수',
            from : 'duck',
            type : 'text'
        }],
        hasVideo : true,
        isDuck : 'happy',
        videoId : "video1",
        top : true,
        hasSound : true,
        soundSrc : "sound/dingdong.mp3"
    },
    //3
    {
        texts : [
            {text:"#아아... 태어날 때부터 스파이크 때렸을 것 같은 언니지만...", from:"duck"},
            {text:"#처음부터 배구를 잘한 건 아니었덕...", from:"duck"}
        ],
        isWhite : true,
        isDuck : "sad",
        background_image :"../images/Elementary_Back.png"
    },
    //4
    {
        texts : [
            {text:"#그래도 좌절하지 않은 연경언니.", from:'duck'},
            {text:"#시합은 많이 뛰지 못했지만 더 열심히 연습했덕..", from: 'duck'}],
        isWhite : true,
        isDuck : "happy",
        background_image :"../images/YK_middle.png"
    },
    //5
    {
        texts : [
            {text:"# 이때 배구의 기본기를 튼튼하게 다졌지요!", from:'duck'}],
        isWhite : true,
        isDuck : "happy",
        background_image :"../images/YK_trainning.png"
    },
    //6
    {
        texts : [
            { 
                text : '# 그러다 고등학생 때 키가 20cm 이상 커져 완전체가 된 연경 선수!',
                from : 'duck'
            },
            { 
                text : '# 이게 다 준비가 되어 있었기에 가능한 일이었덕...',
                from : 'duck'
            }
        ]    ,
        isWhite : true,
        isDuck : "happy",
        background_image :"../images/YK_elementary5.png"
    },
    //7
    {
        isWhite : true,
        texts : [
        {
            text : '초/중학교 때부터 기본기를 잘 배우고 올라왔던거 같아요.',
            from : 'notduck'
        }],
        hasVideo : true,
        isDuck : 'happy',
        videoId : "video2",
    },
    //8
    {
        isWhite : true,
        texts : [
        {
            text : '경쟁에서 멀어지면서 신체조건도 안좋았던거 같고...',
            from : 'notduck'
        },{
            text : '#마음이 아프덕...ㅠㅠ'     ,
            from : 'duck'
        }],
        hasVideo : true,
        isDuck : 'sad',
        videoId : "video3"
    },
    //9
    {
        isWhite : true,
        texts : [
        {
            type : 'etc',
            text : '',
            from : 'notduck'
        },{
            text : '#같은 공격수라도 연경 선수만큼 수비할 수는 없덕...'     ,
            from : 'duck'
        }],
        isDuck : 'happy',
        background_image : "../images/YK-vs-ZT.png"
    },
    //10
    {
        isWhite : true,
        texts : [
        {
            text : '#훌륭한 성적으로 세계를 제패한 연경 선수... 정말 감동이덕...'     ,
            from : 'duck'
        }],
        isDuck : 'happy',
        background_image : "../images/mvp_back.png"
    },
    //11
    {
        isWhite : true,
        texts : [
        {
            text : '제 자신을 제가 믿는 게 가장 중요한 거 같아요' ,
            from : 'notduck'
        },
        {
            text : '# 나 방금 심쿵했덕' ,
            from : 'duck'
        }],
        isDuck : 'sad',
        hasVideo : true,
        videoId : "video4"
    },
    //12
    {
        hasVideo : true,
        videoId : "video5",
        texts : []
    },
    // 13
    {
        hasVideo : true,
        videoId : "video6",
        texts : [
            {text : "# 공격+수비 완전체로 성장한 연경 선수", from : "duck"} ,
            {text : "# 어느 무대에서든 노력이 빛을 발하기 시작!", from : "duck"} 
        ]
    }
    
    
];

Vue.filter('reverse', function(value){
    return value.slice().reverse();
});
Vue.component('slide-element', {
    props : {
        properties : {
            type : Object,
            default : function() {
                return {
                    texts : [],
                    isWhite : false,
                    isDuck : "",
                    hasVideo : false,
                    videoId : null,
                    background_image : null
                }
            }
        }
    }, 
    template : `<section>
        <div class="topbar" v-if="properties.top">
            <img class="speaker-button" src="images/phones-speaker-icon.png" alt="speaker">
        </div>
        <div v-if="!properties.hasVideo" class="background" >
            <img :src="properties.background_image" alt=""/>
        </div>
        <slot name='main'>
         
        </slot>
        <div class="etc-container">
            <transition-group name="et">
                <div class="etc" v-for="et in etc" :key="et">
                </div>
            </transition-group>
        </div>
        <div class="card-container">
            <transition-group name="list">
                <div class="card" v-bind:class="{other : talk.from != 'duck'}" v-for="talk in talks" :key="talk">
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
                    <img src="images/arrow_up.png" alt="arrowup"> 
                </div>
            </div>
            <div class="swiper-next">
                <div v-on:click="next_step" class="down_arrow">
                    <img src="images/arrow_down.png" alt="arrowdown">
                </div>
            </div>
        </div>
    </section>`,
    data : function() {
        return {
            talks : [],
            etc : []
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
            if (prop.texts.length > 0) {
                var next_item = prop.texts.shift();
                next_item.type == "etc" ? this.etc.push(next_item) : this.talks.push(next_item);
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

var imgAssets = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8"];
var videoAssets = ["video1","video2","video3","video4","video5", "video6"];

var options = {
    el : '#mw-app',
    data : {}
}
for (var i = 0; i < videoAssets.length; i++) {
    videoAssets[i] = {
        mp4 : "video/" + videoAssets[i] + postfix + ".mp4",
        webm : "video/" + videoAssets[i] + postfix + ".webm"
    }
}

for(var i = 0; i < objList.length; i++) {
    var curOption = objList[i];
    if(!curOption.hasVideo) curOption.background_image = "images/" + imgAssets.shift() + postfix + ".png";
    options.data["obj" + (i+1)] = curOption;
}
options.data["videos"] = videoAssets;
// get data from 
var app = new Vue(options);

