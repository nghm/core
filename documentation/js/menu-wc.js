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
            <a href="index.html" data-type="index-link">nghm documentation</a>
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
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-9612d0079540a847bfa5d7731c2881ef"' : 'data-target="#xs-components-links-module-AppModule-9612d0079540a847bfa5d7731c2881ef"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-9612d0079540a847bfa5d7731c2881ef"' : 'id="xs-components-links-module-AppModule-9612d0079540a847bfa5d7731c2881ef"' }>
                                        <li class="link">
                                            <a href="components/AppRootComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppRootComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/BinderModule.html" data-type="entity-link">BinderModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-bd2444d3e95798ce72f5133f5fe83499"' : 'data-target="#xs-components-links-module-CoreModule-bd2444d3e95798ce72f5133f5fe83499"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-bd2444d3e95798ce72f5133f5fe83499"' : 'id="xs-components-links-module-CoreModule-bd2444d3e95798ce72f5133f5fe83499"' }>
                                        <li class="link">
                                            <a href="components/AppRootComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppRootComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CoreModule-2cca012e1419d85809025061faec0689-1"' : 'data-target="#xs-injectables-links-module-CoreModule-2cca012e1419d85809025061faec0689-1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CoreModule-2cca012e1419d85809025061faec0689-1"' : 'id="xs-injectables-links-module-CoreModule-2cca012e1419d85809025061faec0689-1"' }>
                                        <li class="link">
                                            <a href="injectables/ActionExecutorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ActionExecutorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ComponentInstantiationInterceptor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ComponentInstantiationInterceptor</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CssQueryFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CssQueryFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LifetimeEvents.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LifetimeEvents</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MetaBinder.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MetaBinder</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResolverService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ResolverService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResourcePathNormalizer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ResourcePathNormalizer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UrlInterpolator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UrlInterpolator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UrlScopeTrimmer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UrlScopeTrimmer</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FormsModule.html" data-type="entity-link">FormsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' : 'data-target="#xs-components-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' : 'id="xs-components-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' }>
                                        <li class="link">
                                            <a href="components/FieldConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldConfigurationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' : 'data-target="#xs-directives-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' : 'id="xs-directives-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' }>
                                        <li class="link">
                                            <a href="directives/FieldErrorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FieldLabelDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldLabelDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FieldOutletDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldOutletDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FormSubmitDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormSubmitDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverrideFieldNamedDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverrideFieldNamedDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' : 'data-target="#xs-injectables-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' : 'id="xs-injectables-links-module-FormsModule-f33ddd2f3942b8b85e60706276147c4f"' }>
                                        <li class="link">
                                            <a href="injectables/FormControlFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FormControlFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InputComponentFactoryResolver.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>InputComponentFactoryResolver</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProxyInjectorFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProxyInjectorFactory</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HomeModule-85583968ab92070705a53377547728d1"' : 'data-target="#xs-components-links-module-HomeModule-85583968ab92070705a53377547728d1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HomeModule-85583968ab92070705a53377547728d1"' : 'id="xs-components-links-module-HomeModule-85583968ab92070705a53377547728d1"' }>
                                        <li class="link">
                                            <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialDevpageModule.html" data-type="entity-link">MaterialDevpageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MaterialDevpageModule-36e7719b34199c8baae93a29bc23b4cd"' : 'data-target="#xs-components-links-module-MaterialDevpageModule-36e7719b34199c8baae93a29bc23b4cd"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MaterialDevpageModule-36e7719b34199c8baae93a29bc23b4cd"' : 'id="xs-components-links-module-MaterialDevpageModule-36e7719b34199c8baae93a29bc23b4cd"' }>
                                        <li class="link">
                                            <a href="components/ActionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionDialogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DevpageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DevpageComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EntityOutletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntityOutletComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialFieldsModule.html" data-type="entity-link">MaterialFieldsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' : 'data-target="#xs-components-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' : 'id="xs-components-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' }>
                                        <li class="link">
                                            <a href="components/FieldConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldConfigurationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' : 'data-target="#xs-directives-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' : 'id="xs-directives-links-module-MaterialFieldsModule-05fc445de9fdd621cf99637238507962"' }>
                                        <li class="link">
                                            <a href="directives/FieldErrorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FieldLabelDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldLabelDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FieldOutletDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldOutletDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FormSubmitDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormSubmitDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OverrideFieldNamedDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverrideFieldNamedDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RouterModule.html" data-type="entity-link">RouterModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-RouterModule-541c3881178b16afbd35fe5cd7935a94"' : 'data-target="#xs-directives-links-module-RouterModule-541c3881178b16afbd35fe5cd7935a94"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-RouterModule-541c3881178b16afbd35fe5cd7935a94"' : 'id="xs-directives-links-module-RouterModule-541c3881178b16afbd35fe5cd7935a94"' }>
                                        <li class="link">
                                            <a href="directives/LinkDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CheckboxInputComponent.html" data-type="entity-link">CheckboxInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DatepickerInputComponent.html" data-type="entity-link">DatepickerInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PasswordInputComponent.html" data-type="entity-link">PasswordInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectInputComponent.html" data-type="entity-link">SelectInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextInputComponent.html" data-type="entity-link">TextInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextareaInputComponent.html" data-type="entity-link">TextareaInputComponent</a>
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
                        <a href="classes/ActionBinder.html" data-type="entity-link">ActionBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionBoundMetadata.html" data-type="entity-link">ActionBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionListenerBinder.html" data-type="entity-link">ActionListenerBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionListenerBoundMetadata.html" data-type="entity-link">ActionListenerBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionsBinder.html" data-type="entity-link">ActionsBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionsBoundMetadata.html" data-type="entity-link">ActionsBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/Book.html" data-type="entity-link">Book</a>
                    </li>
                    <li class="link">
                        <a href="classes/ClassesBinder.html" data-type="entity-link">ClassesBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/ClassesBoundMetadata.html" data-type="entity-link">ClassesBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/CurrentHypermediaRef.html" data-type="entity-link">CurrentHypermediaRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntitiesBinder.html" data-type="entity-link">EntitiesBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntitiesBoundMetadata.html" data-type="entity-link">EntitiesBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityBinder.html" data-type="entity-link">EntityBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityBoundMetadata.html" data-type="entity-link">EntityBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/ExplorableEntitiy.html" data-type="entity-link">ExplorableEntitiy</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldComponent.html" data-type="entity-link">FieldComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldConfiguration.html" data-type="entity-link">FieldConfiguration</a>
                    </li>
                    <li class="link">
                        <a href="classes/HypermediaAdapter.html" data-type="entity-link">HypermediaAdapter</a>
                    </li>
                    <li class="link">
                        <a href="classes/HypermediaRef.html" data-type="entity-link">HypermediaRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkBinder.html" data-type="entity-link">LinkBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinkBoundMetadata.html" data-type="entity-link">LinkBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinksBinder.html" data-type="entity-link">LinksBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/LinksBoundMetadata.html" data-type="entity-link">LinksBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/PropertiesBinder.html" data-type="entity-link">PropertiesBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/PropertiesBoundMetadata.html" data-type="entity-link">PropertiesBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/PropertyBinder.html" data-type="entity-link">PropertyBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/PropertyBoundMetadata.html" data-type="entity-link">PropertyBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/RefBinder.html" data-type="entity-link">RefBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/RefBoundMetadata.html" data-type="entity-link">RefBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="classes/RootEntityBinder.html" data-type="entity-link">RootEntityBinder</a>
                    </li>
                    <li class="link">
                        <a href="classes/RootEntityBoundMetadata.html" data-type="entity-link">RootEntityBoundMetadata</a>
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
                                <a href="injectables/ActionBinderFactory.html" data-type="entity-link">ActionBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ActionExecutorService.html" data-type="entity-link">ActionExecutorService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ActionListenerFactory.html" data-type="entity-link">ActionListenerFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ActionsBinderFactory.html" data-type="entity-link">ActionsBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ClassesBinderFactory.html" data-type="entity-link">ClassesBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ComponentInstantiationInterceptor.html" data-type="entity-link">ComponentInstantiationInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CssQueryFactory.html" data-type="entity-link">CssQueryFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EntitiesBinderFactory.html" data-type="entity-link">EntitiesBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EntityBinderFactory.html" data-type="entity-link">EntityBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FormControlBinder.html" data-type="entity-link">FormControlBinder</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FormControlFactory.html" data-type="entity-link">FormControlFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/InputComponentFactoryResolver.html" data-type="entity-link">InputComponentFactoryResolver</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LifetimeEvents.html" data-type="entity-link">LifetimeEvents</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LinkBinderFactory.html" data-type="entity-link">LinkBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LinksBinderFactory.html" data-type="entity-link">LinksBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MetaBinder.html" data-type="entity-link">MetaBinder</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PropertiesBinderFactory.html" data-type="entity-link">PropertiesBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PropertyBinderFactory.html" data-type="entity-link">PropertyBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProxyInjectorFactory.html" data-type="entity-link">ProxyInjectorFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RefBinderFactory.html" data-type="entity-link">RefBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ResolverService.html" data-type="entity-link">ResolverService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ResourcePathNormalizer.html" data-type="entity-link">ResourcePathNormalizer</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RootEntityBinderFactory.html" data-type="entity-link">RootEntityBinderFactory</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UrlInterpolator.html" data-type="entity-link">UrlInterpolator</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UrlScopeTrimmer.html" data-type="entity-link">UrlScopeTrimmer</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ActionEvent.html" data-type="entity-link">ActionEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Binder.html" data-type="entity-link">Binder</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ComponentRegistration.html" data-type="entity-link">ComponentRegistration</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FieldBoundMetadata.html" data-type="entity-link">FieldBoundMetadata</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HypermediaNode.html" data-type="entity-link">HypermediaNode</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InputConfiguration.html" data-type="entity-link">InputConfiguration</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MetaBinderFactory.html" data-type="entity-link">MetaBinderFactory</a>
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
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
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
