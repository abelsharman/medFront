<template>
  <div class="clients_list">
    <div class="list">
      <div class="vfor">
        <table>
          <tr>
            <th><input :checked="selectAll" @click="toggleSelect" type="checkbox"></th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Почта</th>
            <th>Дата регистрации</th>
            <th></th>
          </tr>

          <tr :class="{'isChecked': c.isChecked}" v-for="(c,i) in clients" :key="i">
            <td><input @click="isChecked()" :value="i" v-model="c.isChecked" :v-model="checkedClients" type="checkbox"></td>
            <td>{{ c.clientname }}</td>
            <td>{{ c.phone }}</td>
            <td>{{ c.email }}</td>
            <td>{{ c.data_reg }}</td>
            <td>Подробнее</td>
          </tr>
        </table>
      </div>
      {{ checkedClients }}
      <div class="selected_modal" v-show="this.checkedClients.length !== 0">
        <div class="modal_cont">
          <p>Выбрано</p>
          <div class="num_of_selected">{{ this.checkedClients.length }}</div>
          <button class="delete_selected">
            Удалить
          </button>
          <button @click="close" class="close"><img src="../assets/images/close.svg" alt=""></button>
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
  name: "ClientsList",
  data() {
    return{
      count: null,
      clients: [
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },
        {
          clientname: "Джонатан Доу",
          phone: "+7 (777) 777 - 77 - 77",
          email: "johnatan@example.com",
          data_reg: "01.03.2021",
          isChecked: false,
        },


      ],
      checkedClients: []
    }
  },
  methods: {
    isChecked(){
      for(let i = 0; i<this.clients.length; i++){
        if(this.clients[i].isChecked === true){
          this.checkedClients.push(this.clients[i])
        }
      }

    },
    close(){
      this.checkedClients = []
      console.log(this.checkedClients.length)
    },
    checkAll(){

    },
    toggleSelect: function() {
      const select = this.selectAll;
      this.clients.forEach(function(client) {
        client.isChecked = !select;
      });
      this.selectAll = !select;
    },
  },
  computed: {
    selectAll: function() {
      return this.clients.every(function(client){
        return client.isChecked;
      });
    }
  },



}
</script>

<style scoped lang="sass">
.clients_list
  height: 100%
  margin-left: 1.0416666666666665VW
  .list
    display:  flex
    flex-wrap: wrap
    width: 65.0083333333334VW
    .vfor
      table
        background: #FFFFFF
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1)
        border-radius: 10px
        width: 66.0083333333334VW
        padding-top: 1.1979166666666667VW
        border-spacing: 0
        tr
          font-size: 1.0416666666666665VW
          line-height: 1.25VW
          display:  flex
          align-items: center
          margin-bottom: 0
          padding: 15px 0
          padding-left: 1.5625VW
          input
            margin-right: 3.322916666666667VW
            cursor: pointer
          th
            font-weight: bold
            float: left
            color: #437FD7
          th:nth-child(2)
            margin-right: 0.9375VW
            text-align: left
            width: 13.020833333333334VW
          th:nth-child(n+3)
            margin-right: 1.9270833333333335VW
            text-align: left
            width: 12.135416666666666VW
          th:nth-child(5)
            margin-right: 0.3645833333333333VW
          th:last-child
            width:  .25VW
          td
            float: left
            width: 12.135416666666666VW
            margin-right: 1.9270833333333335VW
          td:nth-child(2)
            width: 13.020833333333334VW
            margin-right: 0.9375VW
          td:first-child
            margin-right: 0
            width: auto
          td:nth-child(5)
            width: 100px
            margin-right: 4.0375VW
          td:last-child
            width: auto
            margin-right: 0
            color: #437FD7
            font-weight: 600
        tr:nth-child(n+2):hover
          background: rgba(67, 127, 215, 0.1)
        tr:last-child
          border-bottom-left-radius: 10px
          border-bottom-right-radius: 10px
        .isChecked
          border-left: 5px solid #437FD7
          padding-left: 19px
    .selected_modal
      margin: 0 auto
      padding: 1.0416666666666665VW 1.40625VW
      background: #437FD7
      border-radius: 10px
      display: flex
      align-items: center
      justify-content: center
      margin-top: 0.5208333333333333VW

      .modal_cont
        display:  flex
        align-items: center
        p
          color: #FFFFFF
          font-weight: 600
          font-size: 0.8333333333333334VW
          line-height: 0.9895833333333333VW
          margin-right: 1.5625VW
        .num_of_selected
          background: #FFFFFF
          border-radius: 5px
          padding: 0.26041666666666663VW 0.5208333333333333VW
          color: #437FD7
          font-weight: 600
          font-size: 0.78125VW
          line-height: 0.9375VW
          margin-right: 3.125VW
        .delete_selected
          background: #EB5757
          border-radius: 5px
          color: #fff
          font-weight: 600
          font-size: 0.7291666666666666VW
          line-height: 0.8854166666666666VW
          border: none
          outline: none
          cursor: pointer
          width: 5.260416666666667VW
          height: 1.5625VW
          margin-right: 1.6145833333333335VW
        .close
          border: none
          outline: none
          background: transparent
          color: #fff
          cursor: pointer
    .list_num
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      margin: 0 auto
      margin-top: 20px
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
        cursor: not-allowed
      .next
        margin-left: 10px
        background: #437FD7
        color: #FFFFFF

</style>
