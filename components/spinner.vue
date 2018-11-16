<template>
  <div class="spinner">
  </div>
</template>
<style lang="scss" scoped>
.spinner {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 34px;
  height: 34px;
  border-radius: 64px;
}
.spinner::before {
  position: absolute;
  content: "";
  width: 34px;
  height: 34px;
  border-radius: 34px;
  color: #323b40;
  box-shadow: inset -5px 0 0 5px currentColor;
  clip: rect(0, 34px, 12px, 0);
  animation: rotator 1s infinite linear;
}
@keyframes rotator{
  0% {
    transform: rotate(0deg);
    box-shadow: inset -2px 0 0 2px currentColor;
  }
  50% {
    transform: rotate(180deg);
    box-shadow: inset -1px 0 0 1px currentColor;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: inset -1px 0 0 1px currentColor;
  }
}
</style>
