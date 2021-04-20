<template>
  <div class="sidebar">
    <div class="item" v-for="(item,index) in items" :key="index">
      <div @click="isSelect(index)">
        <div class="li" :class="{'li-active': item.isSelected}" @click="selectNav(item.to)" >
          <img :src="item.icon" alt="">
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data(){
    return {
      items: [
        {
          title: "Профиль",
          to: "0",
          icon: require("../assets/images/profile.png"),
          isSelected: true,
        },
        {
          title: "Главная",
          to: "1",
          icon: require("../assets/images/main.png"),
          isSelected: false,
        },
        {
          title: "Персонал",
          to: "2",
          icon: require("../assets/images/personal.png"),
          isSelected: false,
        },
        {
          title: "Статистика",
          to: "3",
          icon: require("../assets/images/statistics.png"),
          isSelected: false,
        },
        {
          title: "Журнал",
          to: "4",
          icon: require("../assets/images/journal.png"),
          isSelected: false,
        },
        {
          title: "Клиенты",
          to: "5",
          icon: require("../assets/images/clients.png"),
          isSelected: false,
        },
        {
          title: "Услуги",
          to: "6",
          icon: require("../assets/images/services.png"),
          isSelected: false,
        },
        {
          title: "Финансы",
          to: "7",
          icon: require("../assets/images/finance.png"),
          isSelected: false,
        },
        {
          title: "Ивенты",
          to: "8",
          icon: require("../assets/images/event.png"),
          isSelected: false,
        },
        {
          title: "Настройки",
          to: "9",
          icon: require("../assets/images/settings.png"),
          isSelected: false,
        },
        {
          title: "Выйти",
          to: "/logout",
          icon: require("../assets/images/logout.png"),

        },
      ]
    }
  },
  methods: {
    isSelect(i){
      for(let i=0; i<this.items.length; i++){
        this.items[i].isSelected = false;
      }
      this.items[i].isSelected = true;
    },
    selectNav(i){
      this.$store.state.navItem = i
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar{
  background: #ffffff;
  width: 14.322916666666666VW;
  display: flex;
  flex-flow: column;
  height: 100vh;
  padding-top: 3.6458333333333335VW;
  filter: drop-shadow(3px 4px 25px rgba(0, 0, 0, 0.1));
  .item {
    font-family: Proxima Nova, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.0416666666666665VW;
    line-height: 24px;
    color: #437FD7;
    >div{
      .li{
        display: flex;
        width: 14.0625VW;
        align-items: center;
        float: right;
        height: 40px;
        cursor: pointer;
        >img{
          width: 16.67px;
          height: 16.67px;
          padding: 0 15px 0 20px;
        }
        >span{
          color: #437FD7 !important;
          text-decoration: none !important;
        }
      }
      .li:hover{
        background: rgba(67, 127, 215, 0.2);
        width: 14.0625VW;
        border-left: 5px solid rgba(67, 127, 215, 0.0);
      }
      .li-active{
        border-left: 5px solid #437FD7 !important;
        background: rgba(67, 127, 215, 0.2);
      }
    }
  }
}
</style>
