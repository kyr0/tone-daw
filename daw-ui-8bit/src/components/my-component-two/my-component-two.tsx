import { Component, Host, h } from '@stencil/core';
import { AMSynth } from "tone"

@Component({
  tag: 'my-component-two',
  styleUrl: 'my-component-two.css',
  shadow: true,
})
export class MyComponentTwo {

  render() {

    const ams = new AMSynth();
    return (
      <Host>
        Foooooo tone: {ams.name}
      </Host>
    );
  }

}
