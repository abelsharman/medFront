<template>
  <div class="container">
    <h1 class="pagename">Персонал</h1>
    <div class="subheader">
      <p class="road">
        <span class="from">MedApp</span>
        <img src="../assets/images/arrow-right.svg" alt="">
        <span class="to">Персонал</span>
      </p>

      <button class="create">
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
  components: {DoctorList, FilterDoctors}
}
</script>

<style scoped lang="sass">

.container
  padding-bottom: 53px
  width: 100%
  margin-left: 20px
  .pagename
    font-family: Proxima Nova, sans-serif
    font-style: normal
    font-weight: 600
    font-size: 24px
    line-height: 29px
    display: flex
    align-items: center
    color: #437FD7
  .subheader
    display: flex
    justify-content: space-between
    padding-right: 4.458333333333335VW
    .road
      font-style: normal
      font-weight: 600
      font-size: 16px
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
        font-size: 16px
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
      font-size: 14px
      line-height: 17px
      color: #437FD7
      img
        margin-right: 10.05px

  .sub_container
    padding-top: 30px
    display: flex

</style>
