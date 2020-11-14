import { Component, h } from '@stencil/core';

@Component({
  tag: 'iws-side-drawer',
})
export class SideDrawer {
  render() {
    return (
      <div style={{ color: 'red' }}>
        <h1>The Side Drawer</h1>
      </div>
    );
  }
}
