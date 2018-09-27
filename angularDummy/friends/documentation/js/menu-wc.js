'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">friends documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-4cc3973b32fc7974e98c71e45b3f6e93"' : 'data-target="#xs-components-links-module-AppModule-4cc3973b32fc7974e98c71e45b3f6e93"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-4cc3973b32fc7974e98c71e45b3f6e93"' : 'id="xs-components-links-module-AppModule-4cc3973b32fc7974e98c71e45b3f6e93"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRouting.html" data-type="entity-link">AppRouting</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' : 'data-target="#xs-components-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' : 'id="xs-components-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SignupComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponentComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' : 'data-target="#xs-directives-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' : 'id="xs-directives-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' }>
                                        <li class="link">
                                            <a href="directives/PasswordEqualValidatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordEqualValidatorDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' : 'id="xs-injectables-links-module-AuthenticationModule-2d7a37c220931691552f23d3c60e9986"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationServiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthenticationServiceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UserService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link">AuthenticationRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CommonModuleModule.html" data-type="entity-link">CommonModuleModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CommonModuleModule-5ebf239a42c450253e71452f5905c3bc"' : 'data-target="#xs-components-links-module-CommonModuleModule-5ebf239a42c450253e71452f5905c3bc"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CommonModuleModule-5ebf239a42c450253e71452f5905c3bc"' : 'id="xs-components-links-module-CommonModuleModule-5ebf239a42c450253e71452f5905c3bc"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ErrorAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorAlertComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CommonModuleRoutingModule.html" data-type="entity-link">CommonModuleRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/UserModuleModule.html" data-type="entity-link">UserModuleModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UserModuleModule-0098e78bb7a86f343b5eb42a42637147"' : 'data-target="#xs-components-links-module-UserModuleModule-0098e78bb7a86f343b5eb42a42637147"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UserModuleModule-0098e78bb7a86f343b5eb42a42637147"' : 'id="xs-components-links-module-UserModuleModule-0098e78bb7a86f343b5eb42a42637147"' }>
                                        <li class="link">
                                            <a href="components/EditDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserFriendsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserFriendsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UserRoutingModule.html" data-type="entity-link">UserRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/UtilModuleModule.html" data-type="entity-link">UtilModuleModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-UtilModuleModule-071a35cc9aa7a731ae9597e80cc49276"' : 'data-target="#xs-pipes-links-module-UtilModuleModule-071a35cc9aa7a731ae9597e80cc49276"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-UtilModuleModule-071a35cc9aa7a731ae9597e80cc49276"' : 'id="xs-pipes-links-module-UtilModuleModule-071a35cc9aa7a731ae9597e80cc49276"' }>
                                        <li class="link">
                                            <a href="pipes/FirstpipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FirstpipePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/FriendsDatePipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FriendsDatePipePipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/EditDetails.html" data-type="entity-link">EditDetails</a>
                    </li>
                    <li class="link">
                        <a href="classes/Friend.html" data-type="entity-link">Friend</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthenticationServiceService.html" data-type="entity-link">AuthenticationServiceService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FriendsService.html" data-type="entity-link">FriendsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/GuradConditionService.html" data-type="entity-link">GuradConditionService</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
