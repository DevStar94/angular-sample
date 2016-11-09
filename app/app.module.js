import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AgGridModule } from 'ag-grid-ng2/main';
import { AppComponent } from "./app.component";
import { RichGridComponent } from "./rich-grid.component";
import { RichGridDeclarativeComponent } from "./rich-grid-declarative.component";
import { FromComponentComponent } from "./from-component.component";
import { SquareComponent } from "./square.component";
import { ParamsComponent } from "./params.component";
import { CubeComponent } from "./cube.component";
import { FromRichComponent } from "./from-rich.component";
import { ClickableModule } from "./clickable.module";
import { RatioModule } from "./ratio.module";
import { RatioParentComponent } from "./ratio.parent.component";
import { ClickableParentComponent } from "./clickable.parent.component";
import { EditorComponent } from "./editor-component.component";
import { NumericEditorComponent } from "./numeric-editor.component";
import { MoodEditorComponent } from "./mood-editor.component";
import { MoodRendererComponent } from "./mood-renderer.component";
import { WithFloatingRowComponent } from "./floating-row-renderer.component";
import { StyledComponent } from "./styled-renderer.component";
import { WithFullWidthComponent } from "./full-width-renderer.component";
import { NameAndAgeRendererComponent } from "./name-age-renderer.component";
import { MedalRendererComponent } from "./medal-renderer.component";
import { WithGroupRowComponent } from "./group-row-renderer.component";
import { FilterComponentComponent } from "./filter-component.component";
import { PartialMatchFilterComponent } from "./partial-match-filter.component";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        AgGridModule.withComponents([
                            SquareComponent,
                            CubeComponent,
                            ParamsComponent,
                            RatioParentComponent,
                            ClickableParentComponent,
                            // FromTemplateComponent,
                            NumericEditorComponent,
                            MoodEditorComponent,
                            MoodRendererComponent,
                            StyledComponent,
                            NameAndAgeRendererComponent,
                            MedalRendererComponent,
                            PartialMatchFilterComponent
                        ]),
                        RatioModule,
                        ClickableModule,
                        FormsModule
                    ],
                    declarations: [
                        AppComponent,
                        RichGridComponent,
                        RichGridDeclarativeComponent,
                        FromComponentComponent,
                        SquareComponent,
                        CubeComponent,
                        ParamsComponent,
                        FromRichComponent,
                        // FromTemplateComponent
                        EditorComponent,
                        NumericEditorComponent,
                        MoodEditorComponent,
                        MoodRendererComponent,
                        WithFloatingRowComponent,
                        StyledComponent,
                        WithFullWidthComponent,
                        NameAndAgeRendererComponent,
                        WithGroupRowComponent,
                        MedalRendererComponent,
                        FilterComponentComponent,
                        PartialMatchFilterComponent
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map