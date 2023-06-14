import { Component, Host, h } from "@stencil/core";
import { signInWithASA, signInWithEmail } from "../../global/firebase";

@Component({
  tag: "demo-login",
  styleUrl: "login.scss",
})
export class Login {
  private async signIn() {
    await signInWithEmail({
      email: "test@mailinator.com",
      password: "testing",
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
          <ion-button onClick={() => signInWithASA()}>
            Sign In With ASA
          </ion-button>
        </ion-content>
      </Host>
    );
  }
}
