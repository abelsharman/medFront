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
          <img src="../assets/images/notifications.png" alt="">
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
  height: 80px;
  display: flex;
  .cont1{
    width: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cont2{
    display: flex;
    width: calc(100vw - 275px);
    justify-content: space-between;
    .search{
      display: flex;
      align-items: center;
      .search_input{
        margin: 0 37px 0 20px;
        height: 30px;
        width: 258px;
        >img {
          position: absolute;
          padding: 7.07px 14.5px;
        }
        >input{
          background: #FFFFFF;
          /* Shadow */

          box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
          border-radius: 4px;
          border: none;
          outline: none;
          padding: 4px 44px;
        }
      }
      .notification{
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        >span {
          width: 35px;
          height: 13px;
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
      width: 210px;
      margin-right: 60px;
      display: flex;
      align-items: center;
      >div{
        margin-left: 20px;
        color: #FFFFFF;
        >p{
          font-size: 20px;
          line-height: 24px;
          margin: 0;
        }
        >span{
          font-size: 16px;
          line-height: 19px;
          font-weight: bold;
        }
      }
      >img{
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
