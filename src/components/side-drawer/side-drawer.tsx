import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'iws-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) title: string;

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
        </header>
        <my-component first="Craig"></my-component>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
