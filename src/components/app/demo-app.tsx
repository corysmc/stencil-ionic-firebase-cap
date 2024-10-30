import { Component, ComponentInterface, State, h } from "@stencil/core";
import { firebaseAuth } from "../../global/firebase";
import { User } from "firebase/auth";

@Component({
  tag: "demo-app",
  styleUrl: "app.scss",
})
export class DemoApp implements ComponentInterface {
  @State() loading: boolean = true;
  @State() user: User | null = null;
  @State() authLoaded = false;

  componentDidLoad() {
    console.log("loading demo app");
    firebaseAuth.onAuthStateChanged((user) => {
      this.user = user;
      this.authLoaded = true;
    });
  }

  render() {
    console.log("render demo-app", this.user);
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route
            url="/"
            component={
              this.authLoaded
                ? this.user
                  ? "demo-profile"
                  : "demo-login"
                : "demo-loading"
            }
          />
        </ion-router>
        <ion-router-outlet />
      </ion-app>
    );
  }
}
