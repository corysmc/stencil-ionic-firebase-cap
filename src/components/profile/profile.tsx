import {
  Component,
  Host,
  State,
  h,
  ComponentInterface,
  Fragment,
} from "@stencil/core";
import { getCurrentUser, signOut } from "../../global/firebase";
import { User } from "@capacitor-firebase/authentication";

@Component({
  tag: "demo-profile",
  styleUrl: "profile.scss",
})
export class Profile implements ComponentInterface {
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

          {this.user ? (
            <Fragment>
              <ion-list>
                <ion-item-divider />
                {Object.keys(this.user).map((key) => (
                  <ion-item>
                    <ion-label>{key}</ion-label>
                    {/* @ts-ignore */}
                    {this.user?.[key]}
                  </ion-item>
                ))}
              </ion-list>
              <ion-button
                color="danger"
                fill="outline"
                onClick={() => signOut()}
              >
                Sign Out
              </ion-button>
            </Fragment>
          ) : (
            <ion-spinner />
          )}
        </ion-content>
      </Host>
    );
  }
}
