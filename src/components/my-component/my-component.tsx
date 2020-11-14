import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: './my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string;

  render() {
    return <div>Hello, World! I'm {this.first}</div>;
  }
}
