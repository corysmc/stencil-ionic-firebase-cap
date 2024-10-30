import { Component, ComponentInterface, Host, h } from "@stencil/core";
import { logEvent } from "firebase/analytics";
import { analytics, signInWithEmail } from "../../global/firebase";

@Component({
  tag: "demo-login",
  styleUrl: "login.scss",
})
export class Login implements ComponentInterface {
  componentDidLoad(): void {
    logEvent(analytics, "page_view");
  }

  private async signIn() {
    await signInWithEmail({
      email: "corytest@mailinator.com",
      password: "testing123",
    });
    console.log("signed in!");
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Login Page</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-button onClick={() => this.signIn()}>Sign In</ion-button>
        </ion-content>
      </Host>
    );
  }
}
