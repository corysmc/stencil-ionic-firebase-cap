/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DemoApp {
    }
    interface DemoLoading {
    }
    interface DemoLogin {
    }
    interface DemoProfile {
    }
}
declare global {
    interface HTMLDemoAppElement extends Components.DemoApp, HTMLStencilElement {
    }
    var HTMLDemoAppElement: {
        prototype: HTMLDemoAppElement;
        new (): HTMLDemoAppElement;
    };
    interface HTMLDemoLoadingElement extends Components.DemoLoading, HTMLStencilElement {
    }
    var HTMLDemoLoadingElement: {
        prototype: HTMLDemoLoadingElement;
        new (): HTMLDemoLoadingElement;
    };
    interface HTMLDemoLoginElement extends Components.DemoLogin, HTMLStencilElement {
    }
    var HTMLDemoLoginElement: {
        prototype: HTMLDemoLoginElement;
        new (): HTMLDemoLoginElement;
    };
    interface HTMLDemoProfileElement extends Components.DemoProfile, HTMLStencilElement {
    }
    var HTMLDemoProfileElement: {
        prototype: HTMLDemoProfileElement;
        new (): HTMLDemoProfileElement;
    };
    interface HTMLElementTagNameMap {
        "demo-app": HTMLDemoAppElement;
        "demo-loading": HTMLDemoLoadingElement;
        "demo-login": HTMLDemoLoginElement;
        "demo-profile": HTMLDemoProfileElement;
    }
}
declare namespace LocalJSX {
    interface DemoApp {
    }
    interface DemoLoading {
    }
    interface DemoLogin {
    }
    interface DemoProfile {
    }
    interface IntrinsicElements {
        "demo-app": DemoApp;
        "demo-loading": DemoLoading;
        "demo-login": DemoLogin;
        "demo-profile": DemoProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-app": LocalJSX.DemoApp & JSXBase.HTMLAttributes<HTMLDemoAppElement>;
            "demo-loading": LocalJSX.DemoLoading & JSXBase.HTMLAttributes<HTMLDemoLoadingElement>;
            "demo-login": LocalJSX.DemoLogin & JSXBase.HTMLAttributes<HTMLDemoLoginElement>;
            "demo-profile": LocalJSX.DemoProfile & JSXBase.HTMLAttributes<HTMLDemoProfileElement>;
        }
    }
}
