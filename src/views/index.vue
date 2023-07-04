<template>
  <div class="ksh">
    <!--    <div id="load">-->
    <!--      <div class="load_img">&lt;!&ndash; 加载动画 &ndash;&gt;-->
    <!--        <img class="jzxz1" src="../assets/images/jzxz1.png">-->
    <!--        <img class="jzxz2" src="../assets/images/jzxz2.png">-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="head_top">-->
    <!--      <img class="img-responsive" src="../assets/images/jcdsj_logo.gif">-->
    <!--    </div>-->
    <div class="visual">
      <VisualLeft/>
      <VisualCenter/>
      <VisualRight/>
      <div className="clear"></div>
    </div>
  </div>
</template>

<script>
import VisualLeft from "@/views/visualLeft.vue";
import VisualCenter from "@/views/visualCenter.vue";
import VisualRight from "@/views/visualRight.vue";
import '../assets/js/china.js'

export default {
  name: 'pagesDataV',
  components: {
    VisualLeft,
    VisualCenter,
    VisualRight
  },
  mounted() {
    this.addScript()
  },
  methods: {
    addScript() {
      let scriptSrcList = ['../assets/js/jquery.min.js', '../assets/js/bootstrap.min.js', '../assets/js/swiper.min.js']
      let i = 0
      for (i; i < scriptSrcList.length; i++) {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = scriptSrcList[i]
        document.body.appendChild(script)
      }
    },
  }
}

</script>
