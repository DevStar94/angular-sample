/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/square.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
export var Wrapper_SquareComponent = (function () {
    function Wrapper_SquareComponent() {
        this._changed = false;
        this.context = new import0.SquareComponent();
    }
    Wrapper_SquareComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SquareComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_SquareComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SquareComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SquareComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SquareComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SquareComponent;
}());
var renderType_SquareComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_SquareComponent_Host0 = (function (_super) {
    __extends(View_SquareComponent_Host0, _super);
    function View_SquareComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SquareComponent_Host0, renderType_SquareComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SquareComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'square-cell', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SquareComponent0(this.viewUtils, this, 0, this._el_0);
        this._SquareComponent_0_3 = new Wrapper_SquareComponent();
        this.compView_0.create(this._SquareComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._SquareComponent_0_3.context);
    };
    View_SquareComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SquareComponent) && (0 === requestNodeIndex))) {
            return this._SquareComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SquareComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SquareComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_SquareComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._SquareComponent_0_3.ngOnDestroy();
    };
    View_SquareComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SquareComponent_Host0;
}(import1.AppView));
export var SquareComponentNgFactory = new import7.ComponentFactory('square-cell', View_SquareComponent_Host0, import0.SquareComponent);
var styles_SquareComponent = [];
var renderType_SquareComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_SquareComponent, {});
export var View_SquareComponent0 = (function (_super) {
    __extends(View_SquareComponent0, _super);
    function View_SquareComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SquareComponent0, renderType_SquareComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_1 = import6.UNINITIALIZED;
    }
    View_SquareComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '', null);
        this.init(null, (this.renderer.directRenderer ? null : [this._text_0]), null);
        return null;
    };
    View_SquareComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = import3.inlineInterpolate(1, '', this.context.valueSquared(), '');
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_0, currVal_1);
            this._expr_1 = currVal_1;
        }
    };
    return View_SquareComponent0;
}(import1.AppView));
//# sourceMappingURL=square.component.ngfactory.js.map