<template>
  <div class="login">
    <div class="login_form">
      <img src="../assets/logo.png" alt="cool logo">
        <div>
          <p>Почта</p>
          <input type="mail" name="" value="" placeholder="Почта">
          <p>Пароль</p>
          <input type="password" name="" value="" placeholder="Пароль">
          <button>Войти</button>
          
          <div class="login_checkbox">
            <label class="login_checkbox_label"><span class="login_checkbox_text">Запомнить меня</span>
              <input type="checkbox">
              <span></span>
            </label> 
            <a class="login_checkbox_right">Забыли пароль?</a>
          </div>


          <p class="login_create">Нет учетной записи? <span>Создайте аккаунт</span> и пользуйтесь нашей системой. </p>
        </div>
    </div>


    <div class="login_slider">
      <h1>пизда</h1>
    </div>
  </div>
</template>

<script async>
export default {
  name: 'Login',
}
</script>


<style lang="sass">
body
  margin: 0
*
  font-family: Proxima Nova, sans-serif
  font-style: normal
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
        padding-left: 11.5vw
        padding-top: 19vh
        width: 4vw
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
          box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24)
          border-radius: 4px
          height: 60px
          outline: none
          color: #333333
          padding: 0
          padding-left: 0.8vw
        input[type="password"]
          box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)
        input::placeholder
          font-weight: normal
          font-size: 0.6770833333333334vw
          line-height: 1.0416666666666665vw
          color: rgba(17, 17, 17, 0.48)
          position: relative
          top: 0px
          transition: top 0.5s ease
        input:focus
            &::placeholder
              top: -18px
        button
          width: 100%
          text-align: center
          border: 0px
          color: white
          background: #437FD7
          border-radius: 4px
          outline: none
          padding: 20px 0
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
          padding-top: 20px
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
            height: 18px
            width: 18px
            background-color: white
            border: 1px solid #437FD7
            border-radius: 4px
          input:checked ~ span 
            background-color: #437FD7
          span:after
            content: ""
            position: absolute
            display: none
          input:checked ~ span:after 
            display: block
          span:after 
            left: 6px
            top: 3px
            width: 4px
            height: 8px
            border: solid white
            border-width: 0 3px 3px 0
            -webkit-transform: rotate(45deg)
            -ms-transform: rotate(45deg)
            transform: rotate(45deg)
          .login_checkbox_text
            width: 160px
            border: 0px
            padding-left: 30px
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
        span
          color: rgb(235,87,87)








    .login_slider
      width: 55vw
      vertical-align: top
      background-color: #437FD7
      display: inline-block
      height: 100vh





</style>