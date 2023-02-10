import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import {
  AccordionExample,
  AccordionGroupExample,
  AccordionGroupBorderedExample,
  AccordionGroupMultiselectExample,
  AlertExample,
  AlertCloseExample,
  AlertNoIconExample,
  AlertSlimExample,
  AdvancedTableExample,
  BasicHeaderExample,
  BasicHeaderWithMegaMenuExample,
  BasicHeaderWithoutSearchExample,
  BreadcrumbExample,
  ButtonExample,
  ButtonGroupExample,
  ButtonGroupSegmentedExample,
  CardExample,
  CardFlagExample,
  CardMediaExample,
  CardGroupExample,
  CharacterCountExample,
  CheckboxExample,
  CheckboxTileExample,
  CheckboxGroupExample,
  CheckboxGroupTileExample,
  CollectionCalendarExample,
  CollectionExample,
  CollectionHeadingsOnlyExample,
  CollectionMediaExample,
  ComboBoxExample,
  ComboBoxCustomRendererExample,
  DateInputExample,
  DatePickerExample,
  DatePickerMinMaxExample,
  DatePickerRangeExample,
  DateRangePickerExample,
  DropdownExample,
  DropdownCustomRendererExample,
  DropdownNoSelectExample,
  ExtendedHeaderExample,
  ExtendedHeaderWithMegaMenuExample,
  ExtraPropsSideNavigationExample,
  FileInputExample,
  FooterBigExample,
  FooterMediumExample,
  FooterSlimExample,
  FormExample,
  FormGroupExample,
  GridColExample,
  GridRowExample,
  GridContainerExample,
  HeroExample,
  HeroBackgroundExample,
  HeroNoHeadingExample,
  HeroRightAlignedExample,
  HomePageTemplate,
  IconListExample,
  IndeterminateSpinnerExample,
  InputDefaultExample,
  InputSuccessExample,
  InputTextAreaExample,
  InputPrefixSuffixExample,
  InputCustomWidthExample,
  ModalExample,
  PaginationFewerThan8PagesExample,
  PaginationMoreThan7PagesExample,
  PaginationUnboundedExample,
  ProcessListExample,
  ProcessListCustomSizingExample,
  ProgressCircleExample,
  RadioGroupDefaultExample,
  RadioGroupTileExample,
  RangeExample,
  RichTextEditorExample,
  SearchLargeExample,
  SearchMediumExample,
  SearchSmallExample,
  SectionExample,
  ShowPasswordSingleExample,
  ShowPasswordMultipleExample,
  SingleLevelSideNavigationExample,
  SiteAlertClosableExample,
  SiteAlertEmergencyExample,
  SiteAlertExample,
  SiteAlertWithoutHeadingExample,
  SiteAlertSlimWithoutIconExample,
  SiteAlertSlimExample,
  SiteAlertWithListExample,
  SkipNavExample,
  StepIndicatorCenteredExample,
  StepIndicatorCountersExample,
  StepIndicatorExample,
  StepIndicatorNoLabelsExample,
  StepIndicatorSmallCountersExample,
  SummaryBoxExample,
  TableBorderlessExample,
  TableCompactExample,
  TableExample,
  TableScrollableExample,
  TableStackedExample,
  TableStackedHeaderExample,
  TableStripedExample,
  TagExample,
  TagLargeExample,
  TextLinkExternalExample,
  TextLinkInternalExample,
  TextLinkOpenInANewTabExample,
  ThreeLevelSideNavigationExample,
  TimePickerDefaultExample,
  TimePickerMinMaxExample,
  TimePicker24HrExample,
  TooltipIconExample,
  TooltipExample,
  TwoLevelSideNavigationExample,
  USGovernmentBannerDotGovExample,
  USGovernmentBannerDotMilExample,
  ValidationExample
} from './examples';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* Accordions */}
        <Route path="/accordion-example">
          <AccordionExample />
        </Route>

        <Route path="/accordion-group-example">
          <AccordionGroupExample />
        </Route>

        <Route path="/accordion-group-bordered-example">
          <AccordionGroupBorderedExample />
        </Route>

        <Route path="/accordion-group-multiselect-example">
          <AccordionGroupMultiselectExample />
        </Route>

        {/* Alerts */}
        <Route path="/alert-example">
          <AlertExample />
        </Route>

        <Route path="/alert-close-example">
          <AlertCloseExample />
        </Route>

        <Route path="/alert-no-icon-example">
          <AlertNoIconExample />
        </Route>

        <Route path="/alert-slim-example">
          <AlertSlimExample />
        </Route>

        {/* Buttons */}
        <Route path="/button-example">
          <ButtonExample />
        </Route>

        <Route path="/button-group-example">
          <ButtonGroupExample />
        </Route>

        <Route path="/button-group-segmented-example">
          <ButtonGroupSegmentedExample />
        </Route>

        {/* Cards */}
        <Route path="/card-example">
          <CardExample />
        </Route>

        <Route path="/card-flag-example">
          <CardFlagExample />
        </Route>

        <Route path="/card-media-example">
          <CardMediaExample />
        </Route>

        <Route path="/card-group-example">
          <CardGroupExample />
        </Route>

        {/* Tables */}
        <Route path="/advanced-table-example">
          <AdvancedTableExample />
        </Route>

        {/* Collection */}
        <Route path="/collection-calendar-example">
          <CollectionCalendarExample />
        </Route>

        <Route path="/collection-example">
          <CollectionExample />
        </Route>

        <Route path="/collection-headings-only-example">
          <CollectionHeadingsOnlyExample />
        </Route>

        <Route path="/collection-media-example">
          <CollectionMediaExample />
        </Route>

        {/* Forms */}
        <Route path="/character-count-example">
          <CharacterCountExample />
        </Route>

        <Route path="/checkbox-example">
          <CheckboxExample />
        </Route>

        <Route path="/checkbox-tile-example">
          <CheckboxTileExample />
        </Route>

        <Route path="/checkbox-group-example">
          <CheckboxGroupExample />
        </Route>

        <Route path="/checkbox-group-tile-example">
          <CheckboxGroupTileExample />
        </Route>

        <Route path="/combobox-example">
          <ComboBoxExample />
        </Route>

        <Route path="/combobox-custom-renderer-example">
          <ComboBoxCustomRendererExample />
        </Route>

        <Route path="/date-input-example">
          <DateInputExample />
        </Route>

        <Route path="/date-picker-example">
          <DatePickerExample />
        </Route>

        <Route path="/date-picker-min-max-example">
          <DatePickerMinMaxExample />
        </Route>

        <Route path="/date-picker-range-example">
          <DatePickerRangeExample />
        </Route>

        <Route path="/date-range-picker-example">
          <DateRangePickerExample />
        </Route>

        <Route path="/dropdown-example">
          <DropdownExample />
        </Route>

        <Route path="/dropdown-custom-renderer-example">
          <DropdownCustomRendererExample />
        </Route>

        <Route path="/dropdown-no-select-example">
          <DropdownNoSelectExample />
        </Route>

        <Route path="/file-input-example">
          <FileInputExample />
        </Route>

        <Route path="/form-example">
          <FormExample />
        </Route>

        <Route path="/form-group-example">
          <FormGroupExample />
        </Route>

        <Route path="/input-default-example">
          <InputDefaultExample />
        </Route>

        <Route path="/input-success-example">
          <InputSuccessExample />
        </Route>

        <Route path="/input-textarea-example">
          <InputTextAreaExample />
        </Route>

        <Route path="/input-prefix-suffix-example">
          <InputPrefixSuffixExample />
        </Route>

        <Route path="/input-custom-width-example">
          <InputCustomWidthExample />
        </Route>

        <Route path="/radio-group-default-example">
          <RadioGroupDefaultExample />
        </Route>

        <Route path="/radio-group-tile-example">
          <RadioGroupTileExample />
        </Route>

        <Route path="/range-example">
          <RangeExample />
        </Route>

        <Route path="/show-password-single-example">
          <ShowPasswordSingleExample />
        </Route>

        <Route path="/show-password-multiple-example">
          <ShowPasswordMultipleExample />
        </Route>

        <Route path="/time-picker-default-example">
          <TimePickerDefaultExample />
        </Route>

        <Route path="/time-picker-min-max-example">
          <TimePickerMinMaxExample />
        </Route>

        <Route path="/time-picker-24-hr-example">
          <TimePicker24HrExample />
        </Route>

        <Route path="/validation-example">
          <ValidationExample />
        </Route>

        {/* Grid */}
        <Route path="/grid-col-example">
          <GridColExample />
        </Route>

        <Route path="/grid-row-example">
          <GridRowExample />
        </Route>

        <Route path="/grid-container-example">
          <GridContainerExample />
        </Route>

        {/* Hero */}
        <Route path="/hero-example">
          <HeroExample />
        </Route>

        <Route path="/hero-background-example">
          <HeroBackgroundExample />
        </Route>

        <Route path="/hero-no-heading-example">
          <HeroNoHeadingExample />
        </Route>

        <Route path="/hero-right-aligned-example">
          <HeroRightAlignedExample />
        </Route>

        {/* Navigation */}
        <Route path="/breadcrumb-example">
          <BreadcrumbExample />
        </Route>

        <Route path="/footer-big-example">
          <FooterBigExample />
        </Route>

        <Route path="/footer-medium-example">
          <FooterMediumExample />
        </Route>

        <Route path="/footer-slim-example">
          <FooterSlimExample />
        </Route>

        {/* Loading */}
        <Route path="/indeterminate-spinner-example">
          <IndeterminateSpinnerExample />
        </Route>

        <Route path="/progress-circle-example">
          <ProgressCircleExample />
        </Route>

        {/* Modal */}
        <Route path="/modal-example">
          <ModalExample />
        </Route>

        {/* Pagination */}
        <Route path="/pagination-fewer-than-8-pages-example">
          <PaginationFewerThan8PagesExample />
        </Route>

        <Route path="/pagination-more-than-7-pages-example">
          <PaginationMoreThan7PagesExample />
        </Route>

        <Route path="/pagination-unbounded-example">
          <PaginationUnboundedExample />
        </Route>

        {/* Process List */}
        <Route path="/process-list-example">
          <ProcessListExample />
        </Route>

        <Route path="/process-list-custom-sizing-example">
          <ProcessListCustomSizingExample />
        </Route>

        {/* Navigation */}
        <Route path="/header-example">
          <BasicHeaderExample />
        </Route>

        <Route path="/header-with-mega-menu-example">
          <BasicHeaderWithMegaMenuExample />
        </Route>

        <Route path="/header-without-search-example">
          <BasicHeaderWithoutSearchExample />
        </Route>

        <Route path="/header-extended-example">
          <ExtendedHeaderExample />
        </Route>

        <Route path="/header-extended-with-mega-menu-example">
          <ExtendedHeaderWithMegaMenuExample />
        </Route>

        <Route path="/sidenavigation-single-level-example">
          <SingleLevelSideNavigationExample />
        </Route>

        <Route path="/sidenavigation-two-level-example">
          <TwoLevelSideNavigationExample />
        </Route>

        <Route path="/sidenavigation-three-level-example">
          <ThreeLevelSideNavigationExample />
        </Route>

        <Route path="/sidenavigation-extra-props-example">
          <ExtraPropsSideNavigationExample />
        </Route>

        <Route path="/skipnav-example">
          <SkipNavExample />
        </Route>

        {/* Misc. Core Examples */}
        <Route path="/icon-list-example">
          <IconListExample />
        </Route>

        <Route path="/search-large-example">
          <SearchLargeExample />
        </Route>

        <Route path="/search-medium-example">
          <SearchMediumExample />
        </Route>

        <Route path="/search-small-example">
          <SearchSmallExample />
        </Route>

        <Route path="/section-example">
          <SectionExample />
        </Route>

        <Route path="/site-alert-closable-example">
          <SiteAlertClosableExample />
        </Route>

        <Route path="/site-alert-emergency-example">
          <SiteAlertEmergencyExample />
        </Route>

        <Route path="/site-alert-example">
          <SiteAlertExample />
        </Route>

        <Route path="/site-alert-slim-example">
          <SiteAlertSlimExample />
        </Route>

        <Route path="/site-alert-slim-without-icon-example">
          <SiteAlertSlimWithoutIconExample />
        </Route>

        <Route path="/site-alert-with-list-example">
          <SiteAlertWithListExample />
        </Route>

        <Route path="/site-alert-without-heading-example">
          <SiteAlertWithoutHeadingExample />
        </Route>

        <Route path="/step-indicator-centered-example">
          <StepIndicatorCenteredExample />
        </Route>

        <Route path="/step-indicator-counters-example">
          <StepIndicatorCountersExample />
        </Route>

        <Route path="/step-indicator-example">
          <StepIndicatorExample />
        </Route>

        <Route path="/step-indicator-no-labels-example">
          <StepIndicatorNoLabelsExample />
        </Route>

        <Route path="/step-indicator-small-counters-example">
          <StepIndicatorSmallCountersExample />
        </Route>

        <Route path="/summary-box-example">
          <SummaryBoxExample />
        </Route>

        <Route path="/table-borderless-example">
          <TableBorderlessExample />
        </Route>

        <Route path="/table-compact-example">
          <TableCompactExample />
        </Route>

        <Route path="/table-example">
          <TableExample />
        </Route>

        <Route path="/table-scrollable-example">
          <TableScrollableExample />
        </Route>

        <Route path="/table-stacked-example">
          <TableStackedExample />
        </Route>

        <Route path="/table-stacked-header-example">
          <TableStackedHeaderExample />
        </Route>

        <Route path="/table-striped-example">
          <TableStripedExample />
        </Route>

        <Route path="/tag-example">
          <TagExample />
        </Route>

        <Route path="/tag-large-example">
          <TagLargeExample />
        </Route>

        <Route path="/textlink-external-example">
          <TextLinkExternalExample />
        </Route>

        <Route path="/textlink-internal-example">
          <TextLinkInternalExample />
        </Route>

        <Route path="/textlink-open-in-a-new-tab-example">
          <TextLinkOpenInANewTabExample />
        </Route>

        <Route path="/tooltip-example">
          <TooltipExample />
        </Route>

        <Route path="/tooltip-icon-example">
          <TooltipIconExample />
        </Route>

        <Route path="/usgovernmentbanner-.gov-example">
          <USGovernmentBannerDotGovExample />
        </Route>

        <Route path="/usgovernmentbanner-.mil-example">
          <USGovernmentBannerDotMilExample />
        </Route>

        {/* Editor */}
        <Route path="/rich-text-editor-example">
          <RichTextEditorExample />
        </Route>

        {/* Templates */}
        <Route path="/homepage-template">
          <HomePageTemplate />
        </Route>
      </Switch>
    </Router>
  );
}
