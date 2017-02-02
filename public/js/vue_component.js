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

// set components properties and methods of components

var objList = [
    //1
    {
        texts : [],
        isWhite : false,
        background_image : "../images/olympic.png",
        top : true
    },
    //2
    {
        background_image : "",
        noBackground : true,
        isWhite : true,
        texts : [
        {
            text : '',
            type : 'etc'
        },
        {
            text : '이번에도 우승한 김연경',
            from : 'duck',
            type : 'text'
        },
        {
            text : '이게 뭐가 대단한 건가 <br/>싶은 배알못들을 위해...<br/> 내가 왔다!!',
            from : 'duck',
            type : 'text'
        }],
        hasVideo : true,
        isDuck : 'happy',
        videoSrc : "YK_win_w.mp4",
        top : true,
        hasSound : true,
        soundSrc : ["sound/YK_win_sound.webm", "sound/YK_win_sound.mp3"]
    },
    // 4번째 페이지
    {
        texts : [
            {text:"그래서 배구를 그만둘까 생각하기도 했다능...", from:"duck"}
        ],
        isWhite : true,
        isDuck : "sad",
          main_text : "김연경은 초등학교 4학년 때 배구를 시작했다.<br/> 그러나 작은 키 때문에 6년 가까이 제대로 시합 한 번 뛰지 못했다."

    },
    //5번째 페이지
    {
        texts : [
            {text:"나같으면 포기 했을 텐데...", from: 'duck'}],
        isWhite : true,
        isDuck : "happy",
        main_text : "그러나 김연경은 포기하지 않았다. 세터든 리베로든 자신을 불러주는 포지션이면 가리지 않았다."
    },
    //5
    {
        texts : [
            {text:"190cm의 큰 키에 강하게 찍어내리는 스파이크", from:'duck'},
            {text: "지금의 베스트스파이커 김연경은 바로 이때 탄생했다.", from: 'duck'}
            ],
        isWhite : true,
        isDuck : "happy",
        main_text : "키가 크지 않을 거라는 우려와 달리 고등학생이 되면서 20CM 넘게 키가 자랐다.  힘든 시기를 버텨내고 찾아온 기회! 공격수 포지션인 레프트로 시합에 뛰기 시작했다."
    },
    //6
    {
        texts : [
            { 
                text : '190cm의 큰 키에 강하게 찍어내리는 스파이크',
                from : 'duck'
            },
            { 
                text : '지금의 베스트 스파이커 김연경은 바로 이때 탄생했다!',
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
        texts : [ ],
        hasVideo : true,
        isDuck : 'happy',
        videoId : "video2",
    },
    //8
    {
        isWhite : true,
        texts : [
        {
            text : '경기를 못 뛰었다니 맴찢...'     ,
            from : 'duck'
        }],
        hasVideo : true,
        isDuck : 'sad',
        videoId : "video2",
        main_text : "경쟁에서 멀어지면서 신체조건도 안좋았던거 같고.. 그래서 경기를 제대로 뛰질 못했어요.."
    },
    //9
    {
        isWhite : true,
        texts : [
        {
            text : '힘든 시기에도 포기하지 않았던 게 이렇게 빛을 발한다능!'     ,
            from : 'duck'
        }],
        isDuck : 'happy',
        hasVideo : true,
        videoId : "video3",
        main_text : "공격수 김연경에게는 특별한 것이 있었다. 그것은 다양한 포지션에서 겪으며 익힌 기본기 였다."
    },
    //10
    {
        isWhite : true,
        texts : [],
        hasVideo : true,
        videoId : "video4"
    },
    //11
    {
        isWhite : true,
        texts : [
        {
            text: '',
            type : 'etc'
        },
        {
            text : '공격/수비 모두 잘하기로 유명한 세계적인 신예 주팅과 비교해도 크으...' ,
            from : 'duck'
        },
        {
            text : '도대체 뭘 어떻게 하길래 이렇게 잘하냐고?' ,
            from : 'duck'
        }],
        isDuck : 'happy',
        hasVideo : true,
        videoId : "video4"
    },
    //12
    {
        texts : []
    },
    // 13
    {
        texts : [
            {text : "공격+수비 완전체로 성장한 연경 선수", from : "duck"} ,
            {text : "어느 무대에서든 노력이 빛을 발하기 시작!", from : "duck"} 
        ]
    },
    // 14
    {
        texts : [{
            text : "김연경의 실제 스파이크 속도야", from : "duck"
        }, 
            {
                text : "원하는만큼 반복할 수 있도록 해놨음!(버튼 클릭!)", from : "duck" 
            }
        ] ,
        isDuck : 'happy'
    },
    // 15
    {
        texts : [
            { text : "핡.. 김연경 대체 뭐야 ㅠㅠ", from : "duck"}
        ],
        isDuck : 'happy',
        hasVideo : true,
        videoId : "video5",
        main_text : "힘들어도 포기하지 않고 꿋꿋하게 노력한 김연경"
    },
    // 16
    {
        texts : [
            { text : "심쿵", from : "duck"} 
        ],
        isduck : 'sad',
        hasVideo : true,
        videoId : "video6",
        main_text : "제 자신을 제가 믿는 게 중요한 것 같아요."
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
        },
    }, 
    template : `<section>
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
                    <span v-html="talk.text"></span>
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
        },
    }
});

// set data and methods of Vue app

var imgAssets = ["bg0", "", "bg1", "bg2", "bg1", "bg1", "bg2", "bg2", "bg2", "bg2", "bg2"];
var videoAssets = ["video1","video2","video3","video4","video5", "video6"];

var options = {
    el : '#mw-app',
    data : {
        muted : false,
    },
    methods : {
        toggle : function() {
            this.muted ? false : true;
            if (sound) sound.mute();
        }
    },
    computed : {
        sound : function() {
            var muted_icon = "images/mute-icon.png";
            var unmuted_icon = "images/phones-speaker-icon.png";
            return this.muted ? muted_icon : unmuted_icon;
        }
    }
}
for (var i = 0; i < videoAssets.length; i++) {
    videoAssets[i] = {
        mp4 : "video/" + videoAssets[i] + postfix + ".mp4",
        webm : "video/" + videoAssets[i] + postfix + ".webm"
    }
}

options.data["videos"] = videoAssets;

for(var i = 0; i < objList.length; i++) {
    var curOption = objList[i];

    if (!curOption.noBackground) curOption.background_image = "images/" + imgAssets[i] + postfix + ".png";

    options.data["obj" + (i+1)] = curOption;
}

// get data from 
var app = new Vue(options);

