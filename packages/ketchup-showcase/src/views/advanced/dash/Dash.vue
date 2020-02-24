<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <dash-demo></dash-demo>
    </template>
    <template v-slot:1>
      <dash-basic></dash-basic>
    </template>
  </comp>
</template>

<script>
import DashDemo from '@/views/advanced/dash/examples/DashDemo';
import DashBasic from '@/views/advanced/dash/examples/DashBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    DashDemo,
    DashBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dash',
      headtitle: 'Dash',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
