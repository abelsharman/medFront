<template>
  <div class="container">
    <h1 class="pagename">Персонал</h1>
    <div class="subheader">
      <p class="road">
        <span class="from">MedApp</span>
        <img src="../assets/images/arrow-right.svg" alt="">
        <span class="to">Персонал</span>
      </p>

      <button class="create" @click="selectNav('new-personal')">
        <img src="../assets/images/create.svg" alt="">
        Добавить
      </button>
    </div>

    <div class="sub_container">
      <FilterDoctors />
      <DoctorList />

    </div>
  </div>
</template>

<script>
import FilterDoctors from "@/components/FilterDoctors";
import DoctorList from "@/components/DoctorList";
export default {
  name: "Personal",
  components: {DoctorList, FilterDoctors},
  methods: {
    selectNav(){
      this.$store.state.navItem = 'new-personal'
    }
  }
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
  animation: 0.5s appearingBlock
  padding-left: 00px
  width: 85vw
  margin-left: 15.7vw
  margin-top: 70px
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
      img
        margin-left: 16px
        margin-right: 16px
      .to
        color: #437FD7
        font-style: normal
        font-weight: 600
        font-size: 0.8333333333333334VW
        line-height: 19px
    .create
      display: flex
      justify-content: center
      cursor: pointer
      outline: none
      align-items: center
      padding: 0
      background-color: transparent
      border: none
      font-style: normal
      font-weight: 600
      font-size: 0.7291666666666666VW
      line-height: 17px
      color: #437FD7
      img
        width: 0.78125VW
        margin-right: 10.05px

  .sub_container
    padding-top: 1.5625VW
    display: flex

</style>
