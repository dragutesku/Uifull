import { 
  Component, 
  Host, 
  Prop, 
  State, 
  h 
} from '@stencil/core';


@Component({
  tag: 'uifull-header',
  styleUrl: 'uifull-header.scss',
  shadow: true,
})
export class WcHeader {
  @Prop() company: string = '';
  @Prop() logourl: string;
  @Prop() userlogourl: string;

  @State() toggled: boolean = false;

  constructor() {
    
  }

  private handleClick = (): boolean => this.toggled = !this.toggled;

  // Show dropdown menu
  private showUserNav = () => {
    if(this.toggled) {
      return (
        <div class="menu__nav">
          <slot name="user-link"></slot>
        </div>
      )
    }
  }

  private showBrandingSection = () => {
    return (
      <div class="branding">
        <img 
          class="branding__logo"
          src={this.logourl}
          alt="Workflow"
        />
        <a class="branding__name" href="/">{this.company}</a>
      </div>
    )
  }

  private showNavigationSection = () => {
    return (
      <nav class="navigation">
        <div class="navigation__list">
            <slot name="navigation-link"></slot>
        </div>
      </nav>
    )
  }

  private showUserSection = () => {
    return (
      <div class="user">
        <div class="menu">
          <a 
            class={{ 'menu__profile': true, 'menu__profile--active': this.toggled}} 
            onClick={() => this.handleClick()}>
            <img 
              class="branding__logo"
              src={this.userlogourl}
              alt="Workflow"
            />
          </a>
          {this.showUserNav()}
        </div>
      </div>
    )
  }


  render() {
    return (
      <Host>
        <header class="header">
          {/* Branding Section */}
          {this.showBrandingSection()}
          {/* Navigation Section */}
          {this.showNavigationSection()}
          {/* User Section */}
          {this.showUserSection()}
        </header>
      </Host>
    );
  }
}
