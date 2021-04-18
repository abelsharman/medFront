<template>
  <div class="doctor_list">
    <div class="list">
      <div class="vfor" v-for="(c,i) in cards" :key="i">
        <div class="card">
          <img src="../assets/images/Userprofile.png" alt="">
          <div class="userinfo">
            <p class="username">Каиргельды Жолдасбеков</p>

            <div class="df">
              <button class="btn">Гинеколог</button>
              <button class="btn">Ординатор</button>
            </div>
          </div>
          <img src="../assets/images/details.svg" class="details" alt="">
        </div>
      </div>
      <div class="list_num">
        <button class="list_btn prev">Назад</button>

        <button class="num_of_list">1</button>
        <button class="num_of_list disable">2</button>
        <button class="num_of_list disable">3</button>

        <button class="list_btn next">Вперед</button>

      </div>



    </div>


  </div>
</template>

<script>
export default {
  name: "DoctorList",
  data() {
    return{
      cards: [
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },
        {
          username: "Каиргельды Жолдасбеков",
          icon: require("../assets/images/Userprofile.png")
        },

      ]
    }
  }

}
</script>

<style scoped lang="sass">
.doctor_list
  height: 100%
  margin-left: 20px
  .list
    display:  flex
    width: 64.239583333333336VW
    flex-wrap: wrap
    .vfor
      .card
        width: 18.052083333333336VW
        position: relative
        height: 6.508333333333334VW
        background: #FFFFFF
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1)
        border-radius: 10px
        display: flex
        padding: 1.0416666666666665VW
        margin-bottom: 1.0416666666666665VW
        margin-right: 1.0416666666666665VW
        .details
          position: absolute
          right: 20px
          top: 0px
          width: 4.33px
        img
          width: 3.6458333333333335VW
          height: 3.6458333333333335VW
        .userinfo
          margin-left: 1.5625VW
          .username
            font-weight: 600
            font-size: 1.25VW
            line-height: 29px
            display: flex
            align-items: center
            color: #437FD7
            margin: 0
          .df
            .btn
              width: 4.635416666666667VW
              height: 1.40625VW
              margin-top: 1.1979166666666667VW
              color: #FFFFFF
              border: none
              outline: none
              cursor: pointer
              background: #EE5396
              border-radius: 5px
              font-size: 0.7291666666666666VW
            .btn:first-child
              background: #007D79
              margin-right: 10px
    .list_num
      display: flex
      align-items: center
      justify-content: center
      width: 100%
        margin: 0 auto
      margin-top: 40px
      .list_btn
        width: 61px
        height: 30px
        border-radius: 5px
        padding: 5px 10px
        border: none
        outline: none
        cursor: pointer
        font-weight: 600
        font-size: 0.7291666666666666VW
        line-height: 17px
      .prev
        color: #333333
        background: #D9E8FF
        margin-right: 30px
      .num_of_list
        color: #437FD7
        font-weight: 600
        font-size: 0.7291666666666666VW
        line-height: 17px
        border: 1px solid #437FD7
        box-sizing: border-box
        background: transparent
        border-radius: 5px
        width: 30px
        height: 30px
        outline: none
        cursor: pointer
        margin-right: 20px
      .num_of_list.disable
        border: 1px solid #D9E8FF
        color: #D9E8FF
      .next
        margin-left: 10px
        background: #437FD7
        color: #FFFFFF

</style>
