<template>
  <div class="header">
    <Topcontent></Topcontent>
    <div class="par">
      <Scree class="a"></Scree>
      <Navbar class="pcnav"></Navbar>
      <Message class="b"></Message>
      <Footer class="c"></Footer>
    </div>
  </div>
</template>

<script>
  import Navbar from './HeaderContent/Navbar.vue';
  import Scree from './HeaderContent/Scree.vue';
  import Topcontent from '../View/Topcontent.vue';
  import Message from './HeaderContent/Message.vue';
  import Footer from '../Footer/Footer.vue'
  export default {
    components: {
      Navbar,
      Scree,
      Message,
      Topcontent,
      Footer
    }
  };
</script>


<style scoped="scoped" lang="css">
.par{
  position: relative;
}
  .b {
    width: 80%;
    position: absolute;
    top: 45%;
    left: 54%;
    transform: translate(-50%,-50%);
  }
  @media screen and (max-width: 1024px) {
    .b {
      width: 100%;
      position: relative;
      left: 0%;
      transform: translate(0%,0%);
    }
  }

  @media screen and (max-width: 960px) {
    .b {
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0%,0%);
    }
  }

  @media screen and (max-width: 800px) {
    .b {
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0%,0%);
    }
  }
</style>
