import { Component, State, h } from "@stencil/core";
import { firebaseAuth } from "../../global/firebase";
import { User } from "firebase/auth";

@Component({
  tag: "demo-app",
  styleUrl: "app.scss",
})
export class DemoApp {
  @State() loading: boolean = true;
  @State() user: User | null = null;

  componentDidLoad() {
    console.log("loading demo app");
    firebaseAuth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  render() {
    console.log("render demo-app", this.user);
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route
            url="/"
            component={this.user ? "demo-profile" : "demo-login"}
          />
        </ion-router>
        <ion-router-outlet />
      </ion-app>
    );
  }
}
