<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
    <template v-slot:0>
      <tooltip-demo></tooltip-demo>
    </template>
    <template v-slot:1>
      <tooltip-basic></tooltip-basic>
    </template>
  </comp>
</template>

<script>
import TooltipDemo from '@/views/advanced/tooltip/examples/TooltipDemo';
import TooltipBasic from '@/views/advanced/tooltip/examples/TooltipBasic';
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    TooltipDemo,
    TooltipBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-tooltip',
      headtitle: 'Tooltip',
      titles: ['Playground ', 'Basic usage'],
    };
  },
};
</script>
