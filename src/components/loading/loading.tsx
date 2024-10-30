import { Component, Host, h, ComponentInterface } from "@stencil/core";
@Component({
  tag: "demo-loading",
  styleUrl: "loading.scss",
})
export class Loading implements ComponentInterface {
  render() {
    return (
      <Host>
        <ion-spinner />
      </Host>
    );
  }
}
