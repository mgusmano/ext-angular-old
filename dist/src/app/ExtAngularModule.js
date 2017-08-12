"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var button_1 = require("./button");
var calendar_event_1 = require("./calendar_event");
var calendar_form_add_1 = require("./calendar_form_add");
var calendar_form_edit_1 = require("./calendar_form_edit");
var calendar_daysheader_1 = require("./calendar_daysheader");
var calendar_weeksheader_1 = require("./calendar_weeksheader");
var calendar_list_1 = require("./calendar_list");
var calendar_day_1 = require("./calendar_day");
var calendar_days_1 = require("./calendar_days");
var calendar_month_1 = require("./calendar_month");
var calendar_1 = require("./calendar");
var calendar_week_1 = require("./calendar_week");
var calendar_weeks_1 = require("./calendar_weeks");
var calendar_dayview_1 = require("./calendar_dayview");
var calendar_daysview_1 = require("./calendar_daysview");
var calendar_monthview_1 = require("./calendar_monthview");
var calendar_multiview_1 = require("./calendar_multiview");
var calendar_weekview_1 = require("./calendar_weekview");
var calendar_weeksview_1 = require("./calendar_weeksview");
var carousel_1 = require("./carousel");
var cartesian_1 = require("./cartesian");
var interaction_1 = require("./interaction");
var polar_1 = require("./polar");
var spacefilling_1 = require("./spacefilling");
var component_1 = require("./component");
var container_1 = require("./container");
var d3_canvas_1 = require("./d3_canvas");
var d3_heatmap_1 = require("./d3_heatmap");
var d3_pack_1 = require("./d3_pack");
var d3_partition_1 = require("./d3_partition");
var d3_sunburst_1 = require("./d3_sunburst");
var d3_treemap_1 = require("./d3_treemap");
var dataview_1 = require("./dataview");
var indexbar_1 = require("./indexbar");
var list_1 = require("./list");
var nestedlist_1 = require("./nestedlist");
var draw_1 = require("./draw");
var surface_1 = require("./surface");
var checkboxfield_1 = require("./checkboxfield");
var datepickerfield_1 = require("./datepickerfield");
var datepickernativefield_1 = require("./datepickernativefield");
var emailfield_1 = require("./emailfield");
var field_1 = require("./field");
var filefield_1 = require("./filefield");
var fileinput_1 = require("./fileinput");
var hiddenfield_1 = require("./hiddenfield");
var input_1 = require("./input");
var numberfield_1 = require("./numberfield");
var passwordfield_1 = require("./passwordfield");
var pickerfield_1 = require("./pickerfield");
var radiofield_1 = require("./radiofield");
var searchfield_1 = require("./searchfield");
var selectfield_1 = require("./selectfield");
var singlesliderfield_1 = require("./singlesliderfield");
var sliderfield_1 = require("./sliderfield");
var spinnerfield_1 = require("./spinnerfield");
var textfield_1 = require("./textfield");
var textareafield_1 = require("./textareafield");
var textareainput_1 = require("./textareainput");
var textinput_1 = require("./textinput");
var togglefield_1 = require("./togglefield");
var urlfield_1 = require("./urlfield");
var fieldset_1 = require("./fieldset");
var formpanel_1 = require("./formpanel");
var grid_1 = require("./grid");
var headercontainer_1 = require("./headercontainer");
var pagingtoolbar_1 = require("./pagingtoolbar");
var tree_1 = require("./tree");
var label_1 = require("./label");
var treelist_1 = require("./treelist");
var loadmask_1 = require("./loadmask");
var mask_1 = require("./mask");
var media_1 = require("./media");
var menu_1 = require("./menu");
var messagebox_1 = require("./messagebox");
var navigationview_1 = require("./navigationview");
var panel_1 = require("./panel");
var panelheader_1 = require("./panelheader");
var paneltitle_1 = require("./paneltitle");
var datepicker_1 = require("./datepicker");
var picker_1 = require("./picker");
var pickerslot_1 = require("./pickerslot");
var pivotgrid_1 = require("./pivotgrid");
var pivotrangeeditor_1 = require("./pivotrangeeditor");
var segmentedbutton_1 = require("./segmentedbutton");
var sheet_1 = require("./sheet");
var slider_1 = require("./slider");
var thumb_1 = require("./thumb");
var toggleslider_1 = require("./toggleslider");
var spacer_1 = require("./spacer");
var tabbar_1 = require("./tabbar");
var tabpanel_1 = require("./tabpanel");
var tab_1 = require("./tab");
var tooltip_1 = require("./tooltip");
var title_1 = require("./title");
var titlebar_1 = require("./titlebar");
var toolbar_1 = require("./toolbar");
var gauge_1 = require("./gauge");
var video_1 = require("./video");
var viewport_1 = require("./viewport");
var widget_1 = require("./widget");
var ExtAngularModule = (function () {
    function ExtAngularModule() {
    }
    return ExtAngularModule;
}());
ExtAngularModule = __decorate([
    core_1.NgModule({
        exports: [
            button_1.button,
            calendar_event_1.calendar_event,
            calendar_form_add_1.calendar_form_add,
            calendar_form_edit_1.calendar_form_edit,
            calendar_daysheader_1.calendar_daysheader,
            calendar_weeksheader_1.calendar_weeksheader,
            calendar_list_1.calendar_list,
            calendar_day_1.calendar_day,
            calendar_days_1.calendar_days,
            calendar_month_1.calendar_month,
            calendar_1.calendar,
            calendar_week_1.calendar_week,
            calendar_weeks_1.calendar_weeks,
            calendar_dayview_1.calendar_dayview,
            calendar_daysview_1.calendar_daysview,
            calendar_monthview_1.calendar_monthview,
            calendar_multiview_1.calendar_multiview,
            calendar_weekview_1.calendar_weekview,
            calendar_weeksview_1.calendar_weeksview,
            carousel_1.carousel,
            cartesian_1.cartesian,
            interaction_1.interaction,
            polar_1.polar,
            spacefilling_1.spacefilling,
            component_1.component,
            container_1.container,
            d3_canvas_1.d3_canvas,
            d3_heatmap_1.d3_heatmap,
            d3_pack_1.d3_pack,
            d3_partition_1.d3_partition,
            d3_sunburst_1.d3_sunburst,
            d3_treemap_1.d3_treemap,
            dataview_1.dataview,
            indexbar_1.indexbar,
            list_1.list,
            nestedlist_1.nestedlist,
            draw_1.draw,
            surface_1.surface,
            checkboxfield_1.checkboxfield,
            datepickerfield_1.datepickerfield,
            datepickernativefield_1.datepickernativefield,
            emailfield_1.emailfield,
            field_1.field,
            filefield_1.filefield,
            fileinput_1.fileinput,
            hiddenfield_1.hiddenfield,
            input_1.input,
            numberfield_1.numberfield,
            passwordfield_1.passwordfield,
            pickerfield_1.pickerfield,
            radiofield_1.radiofield,
            searchfield_1.searchfield,
            selectfield_1.selectfield,
            singlesliderfield_1.singlesliderfield,
            sliderfield_1.sliderfield,
            spinnerfield_1.spinnerfield,
            textfield_1.textfield,
            textareafield_1.textareafield,
            textareainput_1.textareainput,
            textinput_1.textinput,
            togglefield_1.togglefield,
            urlfield_1.urlfield,
            fieldset_1.fieldset,
            formpanel_1.formpanel,
            grid_1.grid,
            headercontainer_1.headercontainer,
            pagingtoolbar_1.pagingtoolbar,
            tree_1.tree,
            label_1.label,
            treelist_1.treelist,
            loadmask_1.loadmask,
            mask_1.mask,
            media_1.media,
            menu_1.menu,
            messagebox_1.messagebox,
            navigationview_1.navigationview,
            panel_1.panel,
            panelheader_1.panelheader,
            paneltitle_1.paneltitle,
            datepicker_1.datepicker,
            picker_1.picker,
            pickerslot_1.pickerslot,
            pivotgrid_1.pivotgrid,
            pivotrangeeditor_1.pivotrangeeditor,
            segmentedbutton_1.segmentedbutton,
            sheet_1.sheet,
            slider_1.slider,
            thumb_1.thumb,
            toggleslider_1.toggleslider,
            spacer_1.spacer,
            tabbar_1.tabbar,
            tabpanel_1.tabpanel,
            tab_1.tab,
            tooltip_1.tooltip,
            title_1.title,
            titlebar_1.titlebar,
            toolbar_1.toolbar,
            gauge_1.gauge,
            video_1.video,
            viewport_1.viewport,
            widget_1.widget
        ],
        declarations: [
            button_1.button,
            calendar_event_1.calendar_event,
            calendar_form_add_1.calendar_form_add,
            calendar_form_edit_1.calendar_form_edit,
            calendar_daysheader_1.calendar_daysheader,
            calendar_weeksheader_1.calendar_weeksheader,
            calendar_list_1.calendar_list,
            calendar_day_1.calendar_day,
            calendar_days_1.calendar_days,
            calendar_month_1.calendar_month,
            calendar_1.calendar,
            calendar_week_1.calendar_week,
            calendar_weeks_1.calendar_weeks,
            calendar_dayview_1.calendar_dayview,
            calendar_daysview_1.calendar_daysview,
            calendar_monthview_1.calendar_monthview,
            calendar_multiview_1.calendar_multiview,
            calendar_weekview_1.calendar_weekview,
            calendar_weeksview_1.calendar_weeksview,
            carousel_1.carousel,
            cartesian_1.cartesian,
            interaction_1.interaction,
            polar_1.polar,
            spacefilling_1.spacefilling,
            component_1.component,
            container_1.container,
            d3_canvas_1.d3_canvas,
            d3_heatmap_1.d3_heatmap,
            d3_pack_1.d3_pack,
            d3_partition_1.d3_partition,
            d3_sunburst_1.d3_sunburst,
            d3_treemap_1.d3_treemap,
            dataview_1.dataview,
            indexbar_1.indexbar,
            list_1.list,
            nestedlist_1.nestedlist,
            draw_1.draw,
            surface_1.surface,
            checkboxfield_1.checkboxfield,
            datepickerfield_1.datepickerfield,
            datepickernativefield_1.datepickernativefield,
            emailfield_1.emailfield,
            field_1.field,
            filefield_1.filefield,
            fileinput_1.fileinput,
            hiddenfield_1.hiddenfield,
            input_1.input,
            numberfield_1.numberfield,
            passwordfield_1.passwordfield,
            pickerfield_1.pickerfield,
            radiofield_1.radiofield,
            searchfield_1.searchfield,
            selectfield_1.selectfield,
            singlesliderfield_1.singlesliderfield,
            sliderfield_1.sliderfield,
            spinnerfield_1.spinnerfield,
            textfield_1.textfield,
            textareafield_1.textareafield,
            textareainput_1.textareainput,
            textinput_1.textinput,
            togglefield_1.togglefield,
            urlfield_1.urlfield,
            fieldset_1.fieldset,
            formpanel_1.formpanel,
            grid_1.grid,
            headercontainer_1.headercontainer,
            pagingtoolbar_1.pagingtoolbar,
            tree_1.tree,
            label_1.label,
            treelist_1.treelist,
            loadmask_1.loadmask,
            mask_1.mask,
            media_1.media,
            menu_1.menu,
            messagebox_1.messagebox,
            navigationview_1.navigationview,
            panel_1.panel,
            panelheader_1.panelheader,
            paneltitle_1.paneltitle,
            datepicker_1.datepicker,
            picker_1.picker,
            pickerslot_1.pickerslot,
            pivotgrid_1.pivotgrid,
            pivotrangeeditor_1.pivotrangeeditor,
            segmentedbutton_1.segmentedbutton,
            sheet_1.sheet,
            slider_1.slider,
            thumb_1.thumb,
            toggleslider_1.toggleslider,
            spacer_1.spacer,
            tabbar_1.tabbar,
            tabpanel_1.tabpanel,
            tab_1.tab,
            tooltip_1.tooltip,
            title_1.title,
            titlebar_1.titlebar,
            toolbar_1.toolbar,
            gauge_1.gauge,
            video_1.video,
            viewport_1.viewport,
            widget_1.widget
        ]
    })
], ExtAngularModule);
exports.ExtAngularModule = ExtAngularModule;
