<template>
  <div>
    <div class="demo-wrapper">
      <p>Cards are surfaces containing informations or actions regarding a single subject.</p>
      <p>
        What makes the cards really useful is the concept of a premade layout which can be populated through JSON inside the
        <span
          class="code-word"
        >data</span> prop.
      </p>
      <p>The idea behind JSON population is pretty simple, properties reflect the name of the component and are followed by a progressive number. Here is a list of properties that are currently used/supported:</p>
      <br />
      <span class="code-word">button</span> contains an object reflecting props of
      <a
        href="https://ketchup.smeup.com/ketchup-showcase/#/button"
      >kup-button</a>.
      <br />
      <span class="code-word">color</span> contains a CSS color string.
      <br />
      <span class="code-word">image</span> contains an object reflecting props of
      <a
        href="https://ketchup.smeup.com/ketchup-showcase/#/image"
      >kup-image</a>.
      <br />
      <span class="code-word">progressBar</span> contains an object reflecting props of
      <a
        href="https://ketchup.smeup.com/ketchup-showcase/#/progressbar"
      >kup-progress-bar</a>.
      <br />
      <span class="code-word">text</span> contains a string to be displayed as generic text.
      <br />
      <br />

      <p>
        The layouts can be set using a combination of
        <span class="code-word">layoutFamily</span> and
        <span class="code-word">layoutNumber</span> props. Currently, the following layouts families are available:
        <br />
        <br />
        <span class="code-word">material</span>, which look was inspired by Material Design (4 layouts).
        <br />
        <span class="code-word">custom</span>, which covers niche use cases (3 layouts).
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBasic',
  data() {
    return {
      markupBasic: '<kup-card></kup-card>',
    };
  },
};
</script>