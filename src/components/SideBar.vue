<template>
  <div class="sidebar">
    <div class="item" v-for="(item,index) in items" :key="index">
      <div @click="isSelect(index)">
        <router-link class="li" :class="{'li-active': item.isSelected}" :to="item.to">
          <img :src="item.icon" alt="">
          <span>{{item.title}}</span>
        </router-link>
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
          to: "/profile",
          icon: require("../assets/images/profile.png"),
          isSelected: true,
        },
        {
          title: "Главная",
          to: "/",
          icon: require("../assets/images/main.png"),
          isSelected: false,
        },
        {
          title: "Персонал",
          to: "/personal",
          icon: require("../assets/images/personal.png"),
          isSelected: false,
        },
        {
          title: "Статистика",
          to: "/statistics",
          icon: require("../assets/images/statistics.png"),
          isSelected: false,
        },
        {
          title: "Журнал",
          to: "/journal",
          icon: require("../assets/images/journal.png"),
          isSelected: false,
        },
        {
          title: "Клиенты",
          to: "/clients",
          icon: require("../assets/images/clients.png"),
          isSelected: false,
        },
        {
          title: "Услуги",
          to: "/services",
          icon: require("../assets/images/services.png"),
          isSelected: false,
        },
        {
          title: "Финансы",
          to: "/finance",
          icon: require("../assets/images/finance.png"),
          isSelected: false,
        },
        {
          title: "Ивенты",
          to: "/events",
          icon: require("../assets/images/event.png"),
          isSelected: false,
        },
        {
          title: "Настройки",
          to: "/settings",
          icon: require("../assets/images/settings.png"),
          isSelected: false,
        },
        {
          title: "Выйти",
          to: "/login",
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
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar{
  width: 275px;
  display: flex;
  flex-flow: column;
  height: 100vh;
  padding-top: 70px;
    .item {
      font-size: 20px;
      text-align: center;
      >div{
        .li{
          display: flex;
          width: 270px;
          align-items: center;
          float: right;
          height: 40px;
          >img{
            width: 16.67px;
            height: 16.67px;
            padding: 0 22px 0 27px;
          }
          >span{
            color: #437FD7 !important;
            text-decoration: none !important;
          }
        }
        .li:hover{
          background: rgba(67, 127, 215, 0.2);
          width: 275px;
        }
        .li-active{
          border-left: 5px solid #437FD7 !important;
          background: rgba(67, 127, 215, 0.2);
        }
      }
    }
}
</style>
