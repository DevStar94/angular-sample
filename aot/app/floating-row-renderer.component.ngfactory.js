/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/floating-row-renderer.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../node_modules/ag-grid-ng2/lib/agGridNg2.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from 'ag-grid-ng2/lib/ng2FrameworkFactory';
import * as import14 from 'ag-grid-ng2/lib/agGridNg2';
export var Wrapper_WithFloatingRowComponent = (function () {
    function Wrapper_WithFloatingRowComponent() {
        this.changed = false;
        this.context = new import0.WithFloatingRowComponent();
    }
    Wrapper_WithFloatingRowComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_WithFloatingRowComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_WithFloatingRowComponent;
}());
var renderType_WithFloatingRowComponent_Host = null;
var _View_WithFloatingRowComponent_Host0 = (function (_super) {
    __extends(_View_WithFloatingRowComponent_Host0, _super);
    function _View_WithFloatingRowComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_WithFloatingRowComponent_Host0, renderType_WithFloatingRowComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_WithFloatingRowComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ag-floating-row-renderer-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_WithFloatingRowComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._WithFloatingRowComponent_0_4 = new Wrapper_WithFloatingRowComponent();
        this._appEl_0.initComponent(this._WithFloatingRowComponent_0_4.context, [], compView_0);
        compView_0.create(this._WithFloatingRowComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_WithFloatingRowComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.WithFloatingRowComponent) && (0 === requestNodeIndex))) {
            return this._WithFloatingRowComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_WithFloatingRowComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._WithFloatingRowComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._WithFloatingRowComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_WithFloatingRowComponent_Host0;
}(import1.AppView));
function viewFactory_WithFloatingRowComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_WithFloatingRowComponent_Host === null)) {
        (renderType_WithFloatingRowComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_WithFloatingRowComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var WithFloatingRowComponentNgFactory = new import9.ComponentFactory('ag-floating-row-renderer-component', viewFactory_WithFloatingRowComponent_Host0, import0.WithFloatingRowComponent);
var styles_WithFloatingRowComponent = [];
var renderType_WithFloatingRowComponent = null;
var _View_WithFloatingRowComponent0 = (function (_super) {
    __extends(_View_WithFloatingRowComponent0, _super);
    function _View_WithFloatingRowComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_WithFloatingRowComponent0, renderType_WithFloatingRowComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_WithFloatingRowComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'style', 'width: 400px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Using Floating Row Renderers', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'ag-grid-ng2', new import4.InlineArray4(4, 'class', 'ag-fresh', 'style', 'width: 100%; height: 200px;'), null);
        this._appEl_5 = new import3.AppElement(5, 0, this, this._el_5);
        var compView_5 = import10.viewFactory_AgGridNg20(this.viewUtils, this.injector(5), this._appEl_5);
        this._AgGridNg2_5_5 = new import10.Wrapper_AgGridNg2(new import12.ElementRef(this._el_5), this._appEl_5.vcRef, this.parentInjector.get(import13.Ng2FrameworkFactory));
        this._query_AgGridColumn_5_0 = new import11.QueryList();
        this._appEl_5.initComponent(this._AgGridNg2_5_5.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        compView_5.create(this._AgGridNg2_5_5.context, [], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_WithFloatingRowComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.AgGridNg2) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._AgGridNg2_5_5.context;
        }
        return notFoundResult;
    };
    _View_WithFloatingRowComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.context.gridOptions;
        this._AgGridNg2_5_5.check_gridOptions(currVal_5_0_0, throwOnChange, false);
        this._AgGridNg2_5_5.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_AgGridColumn_5_0.dirty) {
                this._query_AgGridColumn_5_0.reset([]);
                this._AgGridNg2_5_5.context.columns = this._query_AgGridColumn_5_0;
                this._query_AgGridColumn_5_0.notifyOnChanges();
            }
        }
        this._AgGridNg2_5_5.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AgGridNg2_5_5.context.ngAfterViewInit();
            }
        }
    };
    _View_WithFloatingRowComponent0.prototype.destroyInternal = function () {
        this._AgGridNg2_5_5.context.ngOnDestroy();
    };
    return _View_WithFloatingRowComponent0;
}(import1.AppView));
export function viewFactory_WithFloatingRowComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_WithFloatingRowComponent === null)) {
        (renderType_WithFloatingRowComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_WithFloatingRowComponent, {}));
    }
    return new _View_WithFloatingRowComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=floating-row-renderer.component.ngfactory.js.map