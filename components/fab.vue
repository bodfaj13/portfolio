<template>
    <div class="fab" 
      :class="{moveUp: showSideContact, stayDown: !showSideContact}">
      <button @click="toggleSideContact">
          Hit me up!
      </button>
    </div>
</template>
<script>
export default {
    data () {
      return {
        showSideContact: false
      }
    },
    methods: {
      toggleSideContact () {
      this.showSideContact = !this.showSideContact
      this.$emit('toggleSideContact', this.showSideContact)
    }
  }
}
</script>

<style lang="scss" scoped>
  .moveUp {
    bottom: 461px;
  }
  .stayDown {
    bottom: 0px;
  }
  .fab {
      width: 90px;
      height: 240px;
      position: fixed;
      right: -14px;
      z-index: 1000;

      button {
        width: 370px;
        height: 35px;
        background: #4CAF50;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        right: 0;
        bottom: 0;
        position: absolute;
        margin-right: 16px;
        margin-bottom: 16px;
        border: none;
        outline: none;
        color: #FFF;
        font-size: 36px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: .3s;
        cursor: pointer;
        text-align: left;
        font-size: 1.2rem;
        line-height: 1.6rem;
        cursor: pointer;
      }
  }
</style>
