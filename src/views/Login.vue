<template>
  <div class="login">
    <div class="login_form">
      <img src="../assets/logo.png" alt="cool logo">
        <div>
          <p>Почта</p>
          <input type="mail" name="" value="" placeholder="Почта">
          <p>Пароль</p>
          <input type="password" name="" value="" placeholder="Пароль">
          <router-link to="/main"><button>Войти</button></router-link>
          
          <div class="login_checkbox">
            <label class="login_checkbox_label"><span class="login_checkbox_text">Запомнить меня</span>
              <input type="checkbox">
              <span></span>
            </label> 
            <a class="login_checkbox_right">Забыли пароль?</a>
          </div>


          <p class="login_create">Нет учетной записи? <router-link to="/register">Создайте аккаунт</router-link> и пользуйтесь нашей системой. </p>
        </div>
    </div>


    <div class="login_slider">
      <div class="login_slider_carousel">
        <div class="login_slider_item login_slider_item_1" v-show="i == 1" id="i1"> 
          <img src="../assets/macbook_pro.png" alt="">
          <h1>Lorem ipsum 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc vestibulum vivamus mauris metus, scelerisque cursus.</p>
        </div>

        <div class="login_slider_item login_slider_item_2" v-show="i == 2" id="i2"> 
          <img src="../assets/macbook_pro.png" alt="">
          <h1>Lorem ipsum 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc vestibulum vivamus mauris metus, scelerisque cursus.</p>
        </div>

        <div class="login_slider_item login_slider_item_3" v-show="i == 3" id="i3"> 
          <img src="../assets/macbook_pro.png" alt="">
          <h1>Lorem ipsum 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc vestibulum vivamus mauris metus, scelerisque cursus.</p>
        </div>

        <div class="login_slider_item login_slider_item_4" v-show="i == 4" id="i4"> 
          <img src="../assets/macbook_pro.png" alt="">
          <h1>Lorem ipsum 4</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc vestibulum vivamus mauris metus, scelerisque cursus.</p>
        </div>

        <div class="login_slider_item login_slider_item_5" v-show="i == 5" id="i5"> 
          <img src="../assets/macbook_pro.png" alt="">
          <h1>Lorem ipsum 5</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis nunc vestibulum vivamus mauris metus, scelerisque cursus.</p>
        </div>
      </div>
      
      <div class="login_slider_nav">
        <div v-bind:class="{login_slider_nav_active: i == 1}" @click="carosel" id="1"></div>
        <div v-bind:class="{login_slider_nav_active: i == 2}" @click="carosel" id="2"></div>
        <div v-bind:class="{login_slider_nav_active: i == 3}" @click="carosel" id="3"></div>
        <div v-bind:class="{login_slider_nav_active: i == 4}" @click="carosel" id="4"></div>
        <div v-bind:class="{login_slider_nav_active: i == 5}" @click="carosel" id="5"></div>
      </div>

    </div>

    

  </div>
</template>

<script async>
export default {
  name: 'Login',
  data(){
    return{
      i: 1,

    }
  },
  methods:{
    carosel(event){
      if(this.i == 1){
        if(this.i != event.target.id){
          document.querySelector("#i1").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i = event.target.id;
          }, 500);
        }
      }
      else if(this.i == 2){
        if(this.i != event.target.id){
          document.querySelector("#i2").style.opacity = 0
          document.querySelector("#i1").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i = event.target.id;
          }, 500);
        }
      }
      else if(this.i == 3){
        if(this.i != event.target.id){
          document.querySelector("#i3").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i1").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i = event.target.id;
          }, 500);
        }
      }
      else if(this.i == 4){
        if(this.i != event.target.id){
          document.querySelector("#i4").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i1").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i = event.target.id;
          }, 500);
        }
      }
      else if(this.i == 5){
        if(this.i != event.target.id){
          document.querySelector("#i5").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i1").style.opacity = 1
          setTimeout(() => {
            this.i = event.target.id;
          }, 500);
        }
      }
    },
    caroselAuto(){
      if(this.i == 1){
          document.querySelector("#i1").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i++
          }, 500);
      }
      else if(this.i == 2){
          document.querySelector("#i2").style.opacity = 0
          document.querySelector("#i1").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i++
          }, 500);
      }
      else if(this.i == 3){
          document.querySelector("#i3").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i1").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i++
          }, 500);
      }
      else if(this.i == 4){
          document.querySelector("#i4").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i1").style.opacity = 1
          document.querySelector("#i5").style.opacity = 1
          setTimeout(() => {
            this.i++
          }, 500);
      }
      else if(this.i == 5){
          document.querySelector("#i5").style.opacity = 0
          document.querySelector("#i2").style.opacity = 1
          document.querySelector("#i3").style.opacity = 1
          document.querySelector("#i4").style.opacity = 1
          document.querySelector("#i1").style.opacity = 1
          setTimeout(() => {
            this.i = 1
          }, 500);
      }
    }
  },
  mounted(){
    setInterval(() => {
      this.caroselAuto()
    }, 4000);
  }
}
</script>


<style lang="sass">
body
  margin: 0
*
  font-family: Proxima Nova, sans-serif
  font-style: normal
@keyframes opacitySlider
  0%
    opacity: 0
  100% 
    opacity: 1
@media screen and (min-width: 456px)
  .login
    .login_form
      width: 29vw
      vertical-align: top
      background-color: white
      display: inline-block
      height: 100vh
      padding-left: 16vw
      img
        margin-left: 11.5vw
        margin-top: 19vh
        width: 4vw
        user-select: none
      div
        width: 27vw
        p
          font-weight: 600
          font-size: 1.25vw
          line-height: 1.0416666666666665vw
          margin: 20px 0 10px 0
          color: #437FD7
        input[type="mail"], input[type="password"]
          width: calc(100% - 0.8vw)
          border: 0px
          background: #FFFFFF
          box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)
          border-radius: 4px
          height: 4vw
          outline: none
          color: #333333
          font-size: 0.9770833333333334vw
          padding: 0
          padding-left: 0.8vw
          transition: box-shadow 0.5s ease
        input::placeholder
          font-weight: normal
          font-size: 0.6770833333333334vw
          line-height: 1.0416666666666665vw
          color: rgba(17, 17, 17, 0.48)
          position: relative
          top: 0px
          user-select: none
          transition: top 0.5s ease
        input:focus
            box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24)
            &::placeholder
              top: -1.4vw
        button
          width: 100%
          user-select: none
          text-align: center
          border: 0px
          color: white
          background: #437FD7
          border-radius: 4px
          outline: none
          padding: 1.2vw 0
          font-weight: 600
          font-size: 0.9375vw
          margin-top: 1.0416666666666665vw
          cursor: pointer
          transition: 0.5s background-color ease
          &:hover
            background-color: rgb(57,107,205)






      .login_checkbox
        width: 100%
        a
          display: inline-block
          font-weight: normal
          font-size: 0.8333333333333334vw //16px
          line-height: 1.25vw //24px
          color: #437FD7
          cursor: pointer
        .login_checkbox_right
          padding-top: 23px
          float: right


        .login_checkbox_label
          display: block
          position: relative
          top: 20px
          cursor: pointer
          -webkit-user-select: none
          -moz-user-select: none
          -ms-user-select: none
          user-select: none
          input
            position: absolute
            opacity: 0
            cursor: pointer
            height: 0
            width: 0
          span
            position: absolute
            top: 0
            left: 0
            height: 1.3vw
            width: 1.3vw
            background-color: white
            border: 1px solid #437FD7
            border-radius: 0.3vw
          input:checked ~ span 
            background-color: #437FD7
          span:after
            content: ""
            position: absolute
            display: none
          input:checked ~ span:after 
            display: block
          span:after 
            left: 0.4vw
            top: 0.13vw
            width: 0.3vw
            height: 0.6vw
            border: solid white
            border-width: 0 0.3vw 0.3vw 0
            -webkit-transform: rotate(45deg)
            -ms-transform: rotate(45deg)
            transform: rotate(45deg)
          .login_checkbox_text
            width: 8vw
            border: 0px
            padding-left: 2.2vw
            padding-top: 2px
            font-weight: normal
            font-size: 0.8333333333333334vw //16px
            line-height: 1.25vw //24px
            margin: 0
            color: #437FD7




      .login_create
        width: 100%
        text-align: center
        font-size: 0.7291666666666666vw //14px
        font-weight: normal
        line-height: 1.25vw //24px
        padding-top: 22vh
        a
          color: rgb(235,87,87)
          text-decoration: none








    .login_slider
      width: 55vw
      vertical-align: top
      background-color: #437FD7
      display: inline-block
      height: 100vh
      .login_slider_carousel
        position: relative
      .login_slider_item
        width: 29vw
        margin-top: 27vh
        margin-left: 11vw
        text-align: center
        color: white
        transition: 0.5s all ease
        animation: opacitySlider 0.5s 
        h1
          margin: 10px 0 20px 0
          font-weight: bold
          font-size: 1.875vw //36px
          line-height: 2.2916666666666665vw //44px
        p
          margin: 0
          font-weight: normal
          font-size: 1.0416666vw //16px
          line-height: 1.25vw //24px
        img
          user-select: none
          width: 29vw


      .login_slider_nav
        margin-top: 7vh
        margin-left: 22.8vw
        

        div
          width: 6px
          display: inline-block
          height: 6px
          background-color: #D9E8FF
          border-radius: 10px
          margin-right: 0.97vw
          cursor: pointer
        .login_slider_nav_active
          background-color: #EB5757





</style>