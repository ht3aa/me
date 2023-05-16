<!-- taken from:  https://codinhood.com/micro/10-dropdown-menu-animations-css-transform -->

<script setup>
defineProps({
  title: String,
  items: Array,
});
</script>

<template>
  <ul>
    <li class="dropdown dropdown-7">
      {{ title }}
      <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-7">
        <router-link v-for="item in items" :key="item" :to="item.path"
          ><li>{{ item.text }}</li></router-link
        >
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.dropdown {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #c06162;
  background: #34495e;
  position: relative;
  font-size: 18px;
  perspective: 1000px;
  z-index: 100;
}
.dropdown:hover {
  background: #2980b9;
  cursor: pointer;
}
.dropdown:hover .dropdown_menu li {
  display: block;
}
.dropdown_menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  perspective: 1000px;
  z-index: -1;
}
.dropdown_menu li {
  display: none;
  color: #fff;
  background-color: #34495e;
  padding: 10px 20px;
  font-size: 16px;
  opacity: 0;
}
.dropdown_menu li:hover {
  background-color: #2980b9;
}
.dropdown:hover .dropdown_menu--animated {
  display: block;
}
.dropdown_menu--animated {
  display: none;
}
.dropdown_menu--animated li {
  display: block;
  opacity: 1;
}
.dropdown_menu-7 {
  animation: rotateMenu 400ms ease-in-out forwards;
  transform-origin: top center;
}

@-moz-keyframes rotateMenu {
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
@-webkit-keyframes rotateMenu {
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
@-o-keyframes rotateMenu {
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes rotateMenu {
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
