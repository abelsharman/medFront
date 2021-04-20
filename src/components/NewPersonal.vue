<template>
  <div class="container">
    <h1 class="pagename">Персонал</h1>
    <div class="subheader">
      <p class="road">
        <span class="from old">MedApp</span>
        <i class="fas fa-chevron-right old"></i>
        <span class="to old">Персонал</span>
        <i class="fas fa-chevron-right"></i>
        <span class="to">Добавление нового персонала</span>
      </p>

    </div>

    <div class="sub_container">
      <div class="forms">
        <div class="fullname divs">
          <label for="username">ФИО</label>
          <input type="text" placeholder="Имя" id="username">
        </div>
        <div class="password">
          <div class="p1 divs">
            <label for="p1">Пароль</label>
            <input placeholder="Пароль" type="password" id="p1">
          </div>
          <div class="p2 divs">
            <label for="p2">Подтвердите пароль</label>
            <input placeholder="Подтвердите пароль" type="password" id="p2">
          </div>
        </div>
        <div class="bdate_email">
          <div class="bdate divs">
            <label for="bdate">Дата рождения</label>
            <input placeholder="01/01/2021" type="date" id="bdate">
          </div>
          <div class="email divs">
            <label for="email">Почта</label>
            <input type="email" id="email" placeholder="Почта">
          </div>
        </div>
        <div class="sex_phone">
          <div class="sex divs">
            <label for="sex">Пол</label>
            <select name="sex" id="sex">
              <option value="sex">Пол</option>
              <option value="male">M</option>
              <option value="female">F</option>
            </select>
          </div>
          <div class="phone divs">
            <label for="phone">Номер телефона</label>
            <input id="phone" type="tel" placeholder="+7 (777) 777 - 77 - 77">
          </div>
        </div>
        <div class="department_rights">
          <div class="dep divs">
            <label for="dep">Отдел</label>
            <input type="text" id="dep">
          </div>
          <div class="rights divs">
            <label for="rights">Права</label>
            <input type="text" id="rights">
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="apply">Применить</button>
        <button class="cancel">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPersonal",
}
</script>

<style scoped lang="sass">
@keyframes appearingBlock
  0%
    opacity: 0
  50%
    opacity: 0.5
  100%
    opacity: 1

.container
  padding-bottom: 53px
  width: 100%
  margin-left: 20px
  animation: 0.5s appearingBlock
  .pagename
    font-family: Proxima Nova, sans-serif
    font-style: normal
    font-weight: 600
    font-size: 1.25VW
    line-height: 29px
    display: flex
    align-items: center
    color: #437FD7

  .subheader
    display: flex
    justify-content: space-between
    padding-right: 4.733333333333332VW

    .road
      font-style: normal
      font-weight: 600
      font-size: 0.8333333333333334VW
      line-height: 19px
      display: flex
      align-items: center
      color: #A6C8FF

      i
        margin-left: 16px
        margin-right: 16px
        color: #437FD7
      .old
        color: #A6C8FF !important

      .to
        color: #437FD7
        font-style: normal
        font-weight: 600
        font-size: 0.8333333333333334VW
        line-height: 19px





  .sub_container
    padding-top: 1.5625VW
    display: flex
    flex-flow: column
    .forms
      label
        color: #437FD7
        font-weight: 600
        font-size: 0.9375VW
        line-height: 22px
      input
        background: #FFFFFF
        outline: none
        margin-top: 10px
        margin-bottom: 20px
        border: none
        padding: 16px
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)
        border-radius: 4px
      .divs
        display:  flex
        flex-flow: column
      .divs:first-child
        margin-right: 1.0416666666666665VW
      .fullname
        input
          width: 29.083333333333332VW
      .password
        display: flex
        input
          width: 13.020833333333334VW
      .bdate_email
        display: flex
        input
          width: 13.020833333333334VW
      .sex_phone
        display: flex
        .sex
          select
            padding: 16px
            padding-right: 20px
            box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)
            border-radius: 4px
            width: 15.020833333333334VW
            border: none
            margin-right: 0.1416666666666665VW
            background: #FFFFFF
            outline: none
            margin-top: 10px
            margin-bottom: 20px
        input
          width: 13.020833333333334VW
      .department_rights
        display: flex
        input
          width: 13.020833333333334VW
    .buttons
      margin-top: 1.5625VW
      button
        outline: none
        border: none
        cursor: pointer
      .apply
        background: #437FD7
        border-radius: 5px
        font-weight: 600
        font-size: 1.0416666666666665VW
        line-height: 1.25VW
        color: #FFFFFF
        padding: 0.5208333333333333VW 1.5625VW
        margin-right: 1.5625VW
      .cancel
        border-radius: 5px
        background: #D9E8FF
        color: #333333
        font-weight: 600
        font-size: 1.0416666666666665VW
        line-height: 1.25VW
        padding: 0.5208333333333333VW 1.3020833333333335VW

</style>
