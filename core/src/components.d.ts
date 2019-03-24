/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  SuperTabsConfig,
} from './super-tabs.model';
import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface SuperTabButton {
    'active'?: boolean;
    'disabled'?: boolean;
    'index'?: number;
    'scrollableContainer': boolean;
  }
  interface SuperTabButtonAttributes extends StencilHTMLAttributes {
    'active'?: boolean;
    'disabled'?: boolean;
    'index'?: number;
    'scrollableContainer'?: boolean;
  }

  interface SuperTabIndicator {
    'selectedTabIndex'?: number;
    'toolbarPosition': 'top' | 'bottom';
  }
  interface SuperTabIndicatorAttributes extends StencilHTMLAttributes {
    'selectedTabIndex'?: number;
    'toolbarPosition'?: 'top' | 'bottom';
  }

  interface SuperTab {
    'index'?: number;
  }
  interface SuperTabAttributes extends StencilHTMLAttributes {
    'index'?: number;
  }

  interface SuperTabsContainer {
    'config'?: SuperTabsConfig;
    'moveContainer': (scrollX: number, animate?: boolean | undefined) => Promise<void>;
    'moveContainerByIndex': (index: number, animate?: boolean | undefined) => Promise<void>;
    'swipeEnabled': boolean;
  }
  interface SuperTabsContainerAttributes extends StencilHTMLAttributes {
    'config'?: SuperTabsConfig;
    'onActiveTabChange'?: (event: CustomEvent<HTMLSuperTabElement[]>) => void;
    'onActiveTabIndexChange'?: (event: CustomEvent<number>) => void;
    'onSelectedTabIndexChange'?: (event: CustomEvent<number>) => void;
    'onStTabsChange'?: (event: CustomEvent<HTMLSuperTabElement[]>) => void;
    'swipeEnabled'?: boolean;
  }

  interface SuperTabsToolbar {
    'color': string;
    'config'?: SuperTabsConfig;
    'moveContainer': (scrollX: number, animate?: boolean | undefined) => Promise<void>;
    'onButtonClick': (button: any) => void;
    'scrollable': boolean;
    'setActiveTab': (index: number) => void;
    'setSelectedTab': (index: number) => void;
    'showIndicator': boolean;
    'toolbarPosition': 'top' | 'bottom';
  }
  interface SuperTabsToolbarAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'config'?: SuperTabsConfig;
    'onButtonClick'?: (event: CustomEvent<HTMLSuperTabButtonElement>) => void;
    'scrollable'?: boolean;
    'showIndicator'?: boolean;
    'toolbarPosition'?: 'top' | 'bottom';
  }

  interface SuperTabs {
    /**
    * Initial active tab index
    */
    'activeTabIndex': number;
    /**
    * Global Super Tabs configuration
    */
    'config': SuperTabsConfig;
    /**
    * Set the selected tab. This will move the container and the toolbar to the selected tab.
    */
    'selectTab': (index: number, animate?: boolean) => void;
  }
  interface SuperTabsAttributes extends StencilHTMLAttributes {
    /**
    * Initial active tab index
    */
    'activeTabIndex'?: number;
    /**
    * Global Super Tabs configuration
    */
    'config'?: SuperTabsConfig;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SuperTabButton': Components.SuperTabButton;
    'SuperTabIndicator': Components.SuperTabIndicator;
    'SuperTab': Components.SuperTab;
    'SuperTabsContainer': Components.SuperTabsContainer;
    'SuperTabsToolbar': Components.SuperTabsToolbar;
    'SuperTabs': Components.SuperTabs;
  }

  interface StencilIntrinsicElements {
    'super-tab-button': Components.SuperTabButtonAttributes;
    'super-tab-indicator': Components.SuperTabIndicatorAttributes;
    'super-tab': Components.SuperTabAttributes;
    'super-tabs-container': Components.SuperTabsContainerAttributes;
    'super-tabs-toolbar': Components.SuperTabsToolbarAttributes;
    'super-tabs': Components.SuperTabsAttributes;
  }


  interface HTMLSuperTabButtonElement extends Components.SuperTabButton, HTMLStencilElement {}
  var HTMLSuperTabButtonElement: {
    prototype: HTMLSuperTabButtonElement;
    new (): HTMLSuperTabButtonElement;
  };

  interface HTMLSuperTabIndicatorElement extends Components.SuperTabIndicator, HTMLStencilElement {}
  var HTMLSuperTabIndicatorElement: {
    prototype: HTMLSuperTabIndicatorElement;
    new (): HTMLSuperTabIndicatorElement;
  };

  interface HTMLSuperTabElement extends Components.SuperTab, HTMLStencilElement {}
  var HTMLSuperTabElement: {
    prototype: HTMLSuperTabElement;
    new (): HTMLSuperTabElement;
  };

  interface HTMLSuperTabsContainerElement extends Components.SuperTabsContainer, HTMLStencilElement {}
  var HTMLSuperTabsContainerElement: {
    prototype: HTMLSuperTabsContainerElement;
    new (): HTMLSuperTabsContainerElement;
  };

  interface HTMLSuperTabsToolbarElement extends Components.SuperTabsToolbar, HTMLStencilElement {}
  var HTMLSuperTabsToolbarElement: {
    prototype: HTMLSuperTabsToolbarElement;
    new (): HTMLSuperTabsToolbarElement;
  };

  interface HTMLSuperTabsElement extends Components.SuperTabs, HTMLStencilElement {}
  var HTMLSuperTabsElement: {
    prototype: HTMLSuperTabsElement;
    new (): HTMLSuperTabsElement;
  };

  interface HTMLElementTagNameMap {
    'super-tab-button': HTMLSuperTabButtonElement
    'super-tab-indicator': HTMLSuperTabIndicatorElement
    'super-tab': HTMLSuperTabElement
    'super-tabs-container': HTMLSuperTabsContainerElement
    'super-tabs-toolbar': HTMLSuperTabsToolbarElement
    'super-tabs': HTMLSuperTabsElement
  }

  interface ElementTagNameMap {
    'super-tab-button': HTMLSuperTabButtonElement;
    'super-tab-indicator': HTMLSuperTabIndicatorElement;
    'super-tab': HTMLSuperTabElement;
    'super-tabs-container': HTMLSuperTabsContainerElement;
    'super-tabs-toolbar': HTMLSuperTabsToolbarElement;
    'super-tabs': HTMLSuperTabsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
