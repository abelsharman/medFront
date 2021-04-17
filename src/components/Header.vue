<template>
  <div class="header">
    <div class="cont1">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="cont2">
      <div class="search">
        <div class="search_input">
          <img src="../assets/images/search.png" alt="">
          <input type="text" placeholder="Search" class="search_form">
        </div>
        <button class="notification">
          <img src="../assets/images/ic_twotone-notifications-none.svg" alt="">
          <span class="notification_num">47</span>
        </button>
      </div>
      <div class="user">
        <img src="../assets/images/user.png" alt="">
        <div>
          <p>Джонатан Доу</p>
          <span>CEO</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header{
  background-color: #437FD7;
  height: 4.166666666666666VW;
  display: flex;
  .cont1{
    width: 14.322916666666666VW;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 3.125VW;
      height: 3.125VW;
    }
  }
  .cont2{
    display: flex;
    width: calc(100vw - 14.322916666666666VW);
    justify-content: space-between;
    .search{
      display: flex;
      align-items: center;
      .search_input{
        margin: 0 1.9270833333333335VW 0 1.0416666666666665VW;
        >img {
          position: absolute;
          width: 10px;
          height: 10px;
          padding: 11.07px 14.5px;
        }
        >input{
          background: #FFFFFF;
          height: 22px;
          width: 11.145833333333334VW;
          /* Shadow */

          box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
          border-radius: 4px;
          border: none;
          outline: none;
          padding: 4px 44px;
        }
        >input::placeholder{
          font-family: Roboto, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 24px;
          /* identical to box height, or 200% */

          display: flex;
          align-items: center;

          /* Colors / Gray */

          color: rgba(17, 17, 17, 0.48);
        }
      }
      .notification{
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        padding: 0;
        >span {
          width: 1.8229166666666667VW;
          height: 0.6770833333333334VW;
          padding-top: 4px;

          //padding: 4px 12px 3px 12px;
          position: absolute;
          color: #E80B0B;
          font-weight: bold;
          font-size: 8px;
          background: #FFFFFF;
          border-radius: 5px 5px 5px 0px;
        }
      }
    }
    .user{
      width: 10.9375VW;
      margin-right: 3.125VW;
      display: flex;
      align-items: center;
      >div{
        margin-left: 20px;
        color: #FFFFFF;
        >p{
          font-size: 1.0416666666666665VW;
          line-height: 24px;
          margin: 0;
        }
        >span{
          font-size: 0.8333333333333334VW;
          line-height: 19px;
          font-weight: bold;
        }
      }
      >img{
        width: 2.083333333333333VW;
        height: 2.083333333333333VW;
      }
    }
  }
}
</style>
