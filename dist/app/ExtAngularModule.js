var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { button } from './button';
import { calendar_event } from './calendar_event';
import { calendar_form_add } from './calendar_form_add';
import { calendar_form_edit } from './calendar_form_edit';
import { calendar_daysheader } from './calendar_daysheader';
import { calendar_weeksheader } from './calendar_weeksheader';
import { calendar_list } from './calendar_list';
import { calendar_day } from './calendar_day';
import { calendar_days } from './calendar_days';
import { calendar_month } from './calendar_month';
import { calendar } from './calendar';
import { calendar_week } from './calendar_week';
import { calendar_weeks } from './calendar_weeks';
import { calendar_dayview } from './calendar_dayview';
import { calendar_daysview } from './calendar_daysview';
import { calendar_monthview } from './calendar_monthview';
import { calendar_multiview } from './calendar_multiview';
import { calendar_weekview } from './calendar_weekview';
import { calendar_weeksview } from './calendar_weeksview';
import { carousel } from './carousel';
import { cartesian } from './cartesian';
import { interaction } from './interaction';
import { polar } from './polar';
import { spacefilling } from './spacefilling';
import { component } from './component';
import { container } from './container';
import { d3_canvas } from './d3_canvas';
import { d3_heatmap } from './d3_heatmap';
import { d3_pack } from './d3_pack';
import { d3_partition } from './d3_partition';
import { d3_sunburst } from './d3_sunburst';
import { d3_treemap } from './d3_treemap';
import { dataview } from './dataview';
import { indexbar } from './indexbar';
import { list } from './list';
import { nestedlist } from './nestedlist';
import { draw } from './draw';
import { surface } from './surface';
import { checkboxfield } from './checkboxfield';
import { datepickerfield } from './datepickerfield';
import { datepickernativefield } from './datepickernativefield';
import { emailfield } from './emailfield';
import { field } from './field';
import { filefield } from './filefield';
import { fileinput } from './fileinput';
import { hiddenfield } from './hiddenfield';
import { input } from './input';
import { numberfield } from './numberfield';
import { passwordfield } from './passwordfield';
import { pickerfield } from './pickerfield';
import { radiofield } from './radiofield';
import { searchfield } from './searchfield';
import { selectfield } from './selectfield';
import { singlesliderfield } from './singlesliderfield';
import { sliderfield } from './sliderfield';
import { spinnerfield } from './spinnerfield';
import { textfield } from './textfield';
import { textareafield } from './textareafield';
import { textareainput } from './textareainput';
import { textinput } from './textinput';
import { togglefield } from './togglefield';
import { urlfield } from './urlfield';
import { fieldset } from './fieldset';
import { formpanel } from './formpanel';
import { grid } from './grid';
import { headercontainer } from './headercontainer';
import { pagingtoolbar } from './pagingtoolbar';
import { tree } from './tree';
import { label } from './label';
import { treelist } from './treelist';
import { loadmask } from './loadmask';
import { mask } from './mask';
import { media } from './media';
import { menu } from './menu';
import { messagebox } from './messagebox';
import { navigationview } from './navigationview';
import { panel } from './panel';
import { panelheader } from './panelheader';
import { paneltitle } from './paneltitle';
import { datepicker } from './datepicker';
import { picker } from './picker';
import { pickerslot } from './pickerslot';
import { pivotgrid } from './pivotgrid';
import { pivotrangeeditor } from './pivotrangeeditor';
import { segmentedbutton } from './segmentedbutton';
import { sheet } from './sheet';
import { slider } from './slider';
import { thumb } from './thumb';
import { toggleslider } from './toggleslider';
import { spacer } from './spacer';
import { tabbar } from './tabbar';
import { tabpanel } from './tabpanel';
import { tab } from './tab';
import { tooltip } from './tooltip';
import { title } from './title';
import { titlebar } from './titlebar';
import { toolbar } from './toolbar';
import { gauge } from './gauge';
import { video } from './video';
import { viewport } from './viewport';
import { widget } from './widget';
var ExtAngularModule = (function () {
    function ExtAngularModule() {
    }
    return ExtAngularModule;
}());
ExtAngularModule = __decorate([
    NgModule({
        exports: [
            button,
            calendar_event,
            calendar_form_add,
            calendar_form_edit,
            calendar_daysheader,
            calendar_weeksheader,
            calendar_list,
            calendar_day,
            calendar_days,
            calendar_month,
            calendar,
            calendar_week,
            calendar_weeks,
            calendar_dayview,
            calendar_daysview,
            calendar_monthview,
            calendar_multiview,
            calendar_weekview,
            calendar_weeksview,
            carousel,
            cartesian,
            interaction,
            polar,
            spacefilling,
            component,
            container,
            d3_canvas,
            d3_heatmap,
            d3_pack,
            d3_partition,
            d3_sunburst,
            d3_treemap,
            dataview,
            indexbar,
            list,
            nestedlist,
            draw,
            surface,
            checkboxfield,
            datepickerfield,
            datepickernativefield,
            emailfield,
            field,
            filefield,
            fileinput,
            hiddenfield,
            input,
            numberfield,
            passwordfield,
            pickerfield,
            radiofield,
            searchfield,
            selectfield,
            singlesliderfield,
            sliderfield,
            spinnerfield,
            textfield,
            textareafield,
            textareainput,
            textinput,
            togglefield,
            urlfield,
            fieldset,
            formpanel,
            grid,
            headercontainer,
            pagingtoolbar,
            tree,
            label,
            treelist,
            loadmask,
            mask,
            media,
            menu,
            messagebox,
            navigationview,
            panel,
            panelheader,
            paneltitle,
            datepicker,
            picker,
            pickerslot,
            pivotgrid,
            pivotrangeeditor,
            segmentedbutton,
            sheet,
            slider,
            thumb,
            toggleslider,
            spacer,
            tabbar,
            tabpanel,
            tab,
            tooltip,
            title,
            titlebar,
            toolbar,
            gauge,
            video,
            viewport,
            widget
        ],
        declarations: [
            button,
            calendar_event,
            calendar_form_add,
            calendar_form_edit,
            calendar_daysheader,
            calendar_weeksheader,
            calendar_list,
            calendar_day,
            calendar_days,
            calendar_month,
            calendar,
            calendar_week,
            calendar_weeks,
            calendar_dayview,
            calendar_daysview,
            calendar_monthview,
            calendar_multiview,
            calendar_weekview,
            calendar_weeksview,
            carousel,
            cartesian,
            interaction,
            polar,
            spacefilling,
            component,
            container,
            d3_canvas,
            d3_heatmap,
            d3_pack,
            d3_partition,
            d3_sunburst,
            d3_treemap,
            dataview,
            indexbar,
            list,
            nestedlist,
            draw,
            surface,
            checkboxfield,
            datepickerfield,
            datepickernativefield,
            emailfield,
            field,
            filefield,
            fileinput,
            hiddenfield,
            input,
            numberfield,
            passwordfield,
            pickerfield,
            radiofield,
            searchfield,
            selectfield,
            singlesliderfield,
            sliderfield,
            spinnerfield,
            textfield,
            textareafield,
            textareainput,
            textinput,
            togglefield,
            urlfield,
            fieldset,
            formpanel,
            grid,
            headercontainer,
            pagingtoolbar,
            tree,
            label,
            treelist,
            loadmask,
            mask,
            media,
            menu,
            messagebox,
            navigationview,
            panel,
            panelheader,
            paneltitle,
            datepicker,
            picker,
            pickerslot,
            pivotgrid,
            pivotrangeeditor,
            segmentedbutton,
            sheet,
            slider,
            thumb,
            toggleslider,
            spacer,
            tabbar,
            tabpanel,
            tab,
            tooltip,
            title,
            titlebar,
            toolbar,
            gauge,
            video,
            viewport,
            widget
        ]
    })
], ExtAngularModule);
export { ExtAngularModule };
