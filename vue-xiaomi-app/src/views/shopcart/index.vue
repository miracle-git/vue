<template>
  <div class="shopcart-page">
    <nav-bar/>
    <m2-scroll class="content" ref="scroll" @scroll="scrollContent">
      <ul>
        <li>1-测试页面滚动条目</li>
        <li>2-测试页面滚动条目</li>
        <li>3-测试页面滚动条目</li>
        <li>4-测试页面滚动条目</li>
        <li>5-测试页面滚动条目</li>
        <li>6-测试页面滚动条目</li>
        <li>7-测试页面滚动条目</li>
        <li>8-测试页面滚动条目</li>
        <li>9-测试页面滚动条目</li>
        <li>10-测试页面滚动条目</li>
        <li>11-测试页面滚动条目</li>
        <li>12-测试页面滚动条目</li>
        <li>13-测试页面滚动条目</li>
        <li>14-测试页面滚动条目</li>
        <li>15-测试页面滚动条目</li>
        <li>16-测试页面滚动条目</li>
        <li>17-测试页面滚动条目</li>
        <li>18-测试页面滚动条目</li>
        <li>19-测试页面滚动条目</li>
        <li>20-测试页面滚动条目</li>
        <li>21-测试页面滚动条目</li>
        <li>22-测试页面滚动条目</li>
        <li>23-测试页面滚动条目</li>
        <li>24-测试页面滚动条目</li>
        <li>25-测试页面滚动条目</li>
        <li>26-测试页面滚动条目</li>
        <li>27-测试页面滚动条目</li>
        <li>28-测试页面滚动条目</li>
        <li>29-测试页面滚动条目</li>
        <li>30-测试页面滚动条目</li>
        <li>31-测试页面滚动条目</li>
        <li>32-测试页面滚动条目</li>
        <li>33-测试页面滚动条目</li>
        <li>34-测试页面滚动条目</li>
        <li>35-测试页面滚动条目</li>
        <li>36-测试页面滚动条目</li>
        <li>37-测试页面滚动条目</li>
        <li>38-测试页面滚动条目</li>
        <li>39-测试页面滚动条目</li>
        <li>40-测试页面滚动条目</li>
        <li>41-测试页面滚动条目</li>
        <li>42-测试页面滚动条目</li>
        <li>43-测试页面滚动条目</li>
        <li>44-测试页面滚动条目</li>
        <li>45-测试页面滚动条目</li>
        <li>46-测试页面滚动条目</li>
        <li>47-测试页面滚动条目</li>
        <li>48-测试页面滚动条目</li>
        <li>49-测试页面滚动条目</li>
        <li>50-测试页面滚动条目</li>
        <li>51-测试页面滚动条目</li>
        <li>52-测试页面滚动条目</li>
        <li>53-测试页面滚动条目</li>
        <li>54-测试页面滚动条目</li>
        <li>55-测试页面滚动条目</li>
        <li>56-测试页面滚动条目</li>
        <li>57-测试页面滚动条目</li>
        <li>58-测试页面滚动条目</li>
        <li>59-测试页面滚动条目</li>
        <li>60-测试页面滚动条目</li>
        <li>61-测试页面滚动条目</li>
        <li>62-测试页面滚动条目</li>
        <li>63-测试页面滚动条目</li>
        <li>64-测试页面滚动条目</li>
        <li>65-测试页面滚动条目</li>
        <li>66-测试页面滚动条目</li>
        <li>67-测试页面滚动条目</li>
        <li>68-测试页面滚动条目</li>
        <li>69-测试页面滚动条目</li>
        <li>70-测试页面滚动条目</li>
        <li>71-测试页面滚动条目</li>
        <li>72-测试页面滚动条目</li>
        <li>73-测试页面滚动条目</li>
        <li>74-测试页面滚动条目</li>
        <li>75-测试页面滚动条目</li>
        <li>76-测试页面滚动条目</li>
        <li>77-测试页面滚动条目</li>
        <li>78-测试页面滚动条目</li>
        <li>79-测试页面滚动条目</li>
        <li>80-测试页面滚动条目</li>
        <li>81-测试页面滚动条目</li>
        <li>82-测试页面滚动条目</li>
        <li>83-测试页面滚动条目</li>
        <li>84-测试页面滚动条目</li>
        <li>85-测试页面滚动条目</li>
        <li>86-测试页面滚动条目</li>
        <li>87-测试页面滚动条目</li>
        <li>88-测试页面滚动条目</li>
        <li>89-测试页面滚动条目</li>
        <li>90-测试页面滚动条目</li>
        <li>91-测试页面滚动条目</li>
        <li>92-测试页面滚动条目</li>
        <li>93-测试页面滚动条目</li>
        <li>94-测试页面滚动条目</li>
        <li>95-测试页面滚动条目</li>
        <li>96-测试页面滚动条目</li>
        <li>97-测试页面滚动条目</li>
        <li>98-测试页面滚动条目</li>
        <li>99-测试页面滚动条目</li>
        <li>100-测试页面滚动条目</li>
      </ul>
    </m2-scroll>
    <m2-back-top @click.native="backTopClick" v-show="isShowBacktop"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { NavBar } from './children'

  export default {
    computed: {
      ...mapGetters(['cartLength'])
    },
    methods: {
      scrollContent(position) {
        this.showBacktop(-position.y)
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
