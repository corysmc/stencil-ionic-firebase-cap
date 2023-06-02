import { Component, Host, State, h } from "@stencil/core";
import { getCurrentUser, signOut } from "../../global/firebase";
import { User } from "@capacitor-firebase/authentication";

@Component({
  tag: "demo-profile",
  styleUrl: "profile.scss",
})
export class Profile {
  @State() user: User | null = null;

  async componentDidLoad() {
    this.user = await getCurrentUser();
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-menu-button />
            </ion-buttons>
            <ion-title>Profile</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <h2 class="ion-text-center">Logged in!</h2>
          <ion-button onClick={() => signOut()}>Sign Out</ion-button>

          {this.user ? (
            <ion-list>
              {Object.keys(this.user).map((key) => (
                <ion-item>
                  <ion-label>{key}</ion-label>
                  {/* @ts-ignore */}
                  {this.user?.[key]}
                </ion-item>
              ))}
            </ion-list>
          ) : (
            <ion-spinner />
          )}
        </ion-content>
      </Host>
    );
  }
}
