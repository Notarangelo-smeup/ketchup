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
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'DashDemo',
  data() {
    return {
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
      demoComp: '<kup-dash id="demo-component"></kup-dash>',
      demoProps: [
        {
          prop: 'active',
          description: 'Sets whether the component is clickable or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'fontSize',
          description: 'Set the font size of the component.',
          type: 'string',
          default: '2vw',
          try: 'field',
        },
        {
          prop: 'layout',
          description:
            'Select the layout of the component. 8 layouts available.',
          type: 'string',
          default: '1',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupDashClick',
          type: 'click',
        },
      ],
      demoData: [
        {
          prop: 'innerHTML',
          value:
            '<div slot="descr">Admissions Count</div><div slot="value">34,678</div><div slot="value-int">15,</div><div slot="value-dec">86</div><div slot="unit">%</div><div slot="icon"><i class="mdi mdi-menu-down" style="color: red;" /></div>',
        },
      ],
    };
  },
};
</script>
