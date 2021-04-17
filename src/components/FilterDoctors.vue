<template>
  <div class="filter_doctors">
    <p class="title">
      <img src="../assets/images/settings.svg" alt="">
      Фильтры
    </p>
    <p class="clear">Очистить</p>

    <div class="type_of_p">
      <p class="title title_of_p">Тип персонала</p>

      <div class="type_of_p_buttons">
        <div class="c_btn">
          <input type="radio" id="all" name="personal" value="all">
          <label for="all"><span>Все</span> </label><br>


          <input type="radio" id="doctors" name="personal" value="doctors">
          <label for="doctors"><span>Врачи</span></label><br>


          <input type="radio" id="state" name="personal" value="state">
          <label for="state"><span>Штат</span></label>
        </div>
      </div>
    </div>
    <p class="title title_of_p sort_by">Сортировать по</p>

    <select class="select" name="" id="">
      <option class="option" value="">Отделу</option>
      <option class="option" value="">Отделу</option>
      <option class="option" value="">Отделу</option>
    </select>
    <p class="title title_of_p sort_by">Вид</p>
    <div class="vid_btns">
      <input type="radio" id="cards" name="personal_vid" value="cards">
      <label for="cards">Карточки</label>

      <input type="radio" id="list" name="personal_vid" value="list">
      <label for="list"><span>Списком</span></label><br>

    </div>
    <p class="title title_of_p ">Отдел</p>
    <div class="c_btn">
      <input type="radio" id="cardio" name="personal_otdel" value="all">
      <label for="cardio"><span>Кардиология</span> </label><br>


      <input type="radio" id="ginecolog" name="personal_otdel" value="doctors">
      <label for="ginecolog"><span>Гинекология</span></label><br>


      <input type="radio" id="trambo" name="personal_otdel" value="state">
      <label for="trambo"><span>Травмотология</span></label><br>

      <input type="radio" id="xirurg" name="personal_otdel" value="state">
      <label for="xirurg"><span>Хирургия</span></label><br>

      <input type="radio" id="uxo" name="personal_otdel" value="state">
      <label for="uxo"><span>Ухо, горло, нос</span></label>
    </div>
    <p class="clear ewe">Ещё 15 <img src="../assets/images/arrow-right(gray).svg" alt=""></p>

    <p class="title title_of_p ">По дате добавления</p>
    <div class="date">
      <div class="from_date">
        <p class="title title_of_p ">C</p>
        <div class="date_btn">Любая дата</div>
      </div>
      <div class="to_date">
        <p class="title title_of_p ">По</p>
        <div class="date_btn">Любая дата</div>
      </div>
    </div>

    <div class="footer_btns">
      <button class="apply">Применить</button>
      <button class="reset">Сбросить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterDoctors"
}
</script>

<style scoped lang="sass">
.filter_doctors
  padding: 1.0416666666666665VW 1.0416666666666665VW 2.083333333333333VW 1.0416666666666665VW
  width: 13.020833333333334VW
  height: 100%
  background: #FFFFFF
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
  border-radius: 10px
  .title
    display: flex
    margin: 0
    align-items: center
    font-style: normal
    font-weight: 600
    font-size: 0.8333333333333334VW
    line-height: 19px
    display: flex
    align-items: center
    color: #437FD7
    img
      margin-right: 20px
  .clear
    font-style: normal
    font-weight: bold
    font-size: 0.625VW
    line-height: 15px
    margin: 0
    margin-top: 20px
    color: #828282
  .title_of_p
    font-weight: normal
    font-size: 0.8333333333333334VW
    margin-top: 20px
  .type_of_p
    margin-top: 20px
    .type_of_p_buttons
    .c_btn
      align-items: center
      font-weight: normal
      font-size: 0.7291666666666666VW
      height: 90px
      line-height: 17px
      color: #333333
  .sort_by
    margin-top: 25px
    margin-bottom: 20px
  input
    padding: 0
    margin-top: 10px

    cursor: pointer
  input[type="radio"]
    -webkit-appearance: none
    -moz-appearance: none
    outline: none
    appearance: none
    width: 15px
    height: 15px
    margin: 0
    margin-top: 15px
    background-clip: content-box
    border: 2px solid #EB5757
    border-radius: 50%
    margin-bottom: -2px
  input[type="radio"]:checked
    background-color: #EB5757
    outline: none

  label
    margin-left: 10px
    font-weight: normal
    font-size: 0.7291666666666666VW
    line-height: 17px
    color: #333333
    cursor: pointer
    span
      margin-bottom: 15px !important

  .select
    width: 10.9375VW
    height: 30px
    padding: 0 10px
    background: #FFFFFF
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
    border-radius: 5px
    border: none
    color: #437FD7
    outline: none
    .option
      font-weight: 600
      outline: none

      font-size: 0.7291666666666666VW
      line-height: 17px
  input#cards, input#list
    margin-top: 0
    margin-bottom: -2px
  input#list
    margin-left: 20px
  .ewe
    cursor: pointer
    img
      margin-left: 8px
  .date
    display: flex
    justify-content: space-between
    .from_date
      .title
        font-size: 0.625VW
    .to_date
      .title
        font-size: 0.625VW
    .date_btn
      background: transparent
      margin-top: 10px
      padding-left: 10px
      font-weight: 600
      font-size: 0.625VW
      line-height: 15px
      display: flex
      align-items: center
      color: #437FD7
      background: #FFFFFF
      width: 4.6875VW
      height: 1.5625VW
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
      border-radius: 5px
      cursor: pointer

  .footer_btns
    display: flex
    margin-top: 2.083333333333333VW
    justify-content: space-between

    .apply
      font-weight: 600
      font-size: 0.7291666666666666VW
      border: none
      outline: none
      width: 5.208333333333334VW
      height: 1.40625VW
      padding: 0.26041666666666663VW 0.703125VW
      background: #437FD7
      color: #FFFFFF
      border-radius: 5px
    .reset
      border: none
      width: 5.208333333333334VW
      height: 1.40625VW
      outline: none
      padding: 0.26041666666666663VW 0.9635416666666667VW
      background: #D9E8FF
      border-radius: 5px
      color: #333333
      font-weight: 600
      font-size: 0.7291666666666666VW
</style>
