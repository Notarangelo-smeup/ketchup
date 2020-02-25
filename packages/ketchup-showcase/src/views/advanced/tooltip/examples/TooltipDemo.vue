<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoData="demoData"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { bornToDie, imageUrls } from '@/mock/tooltip';

export default {
  components: {
    Demo,
  },
  name: 'TooltipDemo',
  data() {
    return {
      images: {
        ...imageUrls,
      },
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
        },
      ],
      demoComp:
        '<kup-tooltip id="demo-component"><div>Move the mouse over me!</div></wup-tooltip>',
      demoProps: [
        {
          prop: 'data',
          description:
            'Object array containing the data of the radio list: value, label to be shown and status (if checked or not).',
          type: 'TooltipData',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'detailData',
          description: 'Data for the detail.',
          type: 'TooltipDetailData',
          try: '{}',
          default: 'json',
        },
        {
          prop: 'detailDataTimeout',
          description: 'Timeout for loadDetail.',
          type: 'number',
          default: '800',
          try: 'field',
        },
        {
          prop: 'layout',
          description: 'Layout used to display the items.',
          type: 'string',
          default: '1',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupTooltipLoadData',
          type: 'custom',
        },
        {
          name: 'kupTooltipLoadDetail',
          type: 'custom',
        },
        {
          name: 'kupActionCommandClicked',
          type: 'click',
        },
      ],
      demoData: [
        {
          prop: 'data',
          value: {
            image: 'images/lana-born-to-die.jpg',
            title: 'Born to die',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2012,
              },
            },
          },
        },
      ],
    };
  },
};
</script>
