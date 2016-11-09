/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../app/mood-renderer.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/element');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/metadata/view');
var import9 = require('@angular/core/src/linker/component_factory');
var import10 = require('@angular/core/src/security');
var Wrapper_MoodRendererComponent = (function () {
    function Wrapper_MoodRendererComponent() {
        this.changed = false;
        this.context = new import0.MoodRendererComponent();
    }
    Wrapper_MoodRendererComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_MoodRendererComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_MoodRendererComponent;
}());
exports.Wrapper_MoodRendererComponent = Wrapper_MoodRendererComponent;
var renderType_MoodRendererComponent_Host = null;
var _View_MoodRendererComponent_Host0 = (function (_super) {
    __extends(_View_MoodRendererComponent_Host0, _super);
    function _View_MoodRendererComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MoodRendererComponent_Host0, renderType_MoodRendererComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MoodRendererComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'mood-cell', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MoodRendererComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MoodRendererComponent_0_4 = new Wrapper_MoodRendererComponent();
        this._appEl_0.initComponent(this._MoodRendererComponent_0_4.context, [], compView_0);
        compView_0.create(this._MoodRendererComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MoodRendererComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MoodRendererComponent) && (0 === requestNodeIndex))) {
            return this._MoodRendererComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_MoodRendererComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MoodRendererComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._MoodRendererComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MoodRendererComponent_Host0;
}(import1.AppView));
function viewFactory_MoodRendererComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MoodRendererComponent_Host === null)) {
        (renderType_MoodRendererComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_MoodRendererComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.MoodRendererComponentNgFactory = new import9.ComponentFactory('mood-cell', viewFactory_MoodRendererComponent_Host0, import0.MoodRendererComponent);
var styles_MoodRendererComponent = [];
var renderType_MoodRendererComponent = null;
var _View_MoodRendererComponent0 = (function (_super) {
    __extends(_View_MoodRendererComponent0, _super);
    function _View_MoodRendererComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MoodRendererComponent0, renderType_MoodRendererComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import7.UNINITIALIZED;
    }
    _View_MoodRendererComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'img', new import4.InlineArray2(2, 'width', '20px'), null);
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_MoodRendererComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this.context.imgForMood;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(import10.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MoodRendererComponent0;
}(import1.AppView));
function viewFactory_MoodRendererComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MoodRendererComponent === null)) {
        (renderType_MoodRendererComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_MoodRendererComponent, {}));
    }
    return new _View_MoodRendererComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_MoodRendererComponent0 = viewFactory_MoodRendererComponent0;
//# sourceMappingURL=mood-renderer.component.ngfactory.js.map