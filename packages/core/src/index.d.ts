import React from 'react';
import { Observable, Subject } from 'rxjs';

declare module '@boozallen-uip/uswds-react-core' {
  export import Accordion = __Core.Accordion;
  export import AccordionProps = __Core.AccordionProps;
  export import AccordionGroup = __Core.AccordionGroup;
  export import AccordionGroupProps = __Core.AccordionGroupProps;
  export import AccordionItem = __Core.AccordionItem;
  export import AccordionItemProps = __Core.AccordionItemProps;
  export import Alert = __Core.Alert;
  export import AlertProps = __Core.AlertProps;
  export import AlertInstance = __Core.AlertInstance;
  export import AlertOutlet = __Core.AlertOutlet;
  export import AlertOutletProps = __Core.AlertOutletProps;
  export import AlertOutletInstance = __Core.AlertOutletInstance;
  export import AlertRole = __Core.AlertRole;
  export import AlertService = __Core.AlertService;
  export import AlertType = __Core.AlertType;
  export import Breadcrumb = __Core.Breadcrumb;
  export import BreadcrumbProps = __Core.BreadcrumbProps;
  export import Button = __Core.Button;
  export import ButtonProps = __Core.ButtonProps;
  export import ButtonGroup = __Core.ButtonGroup;
  export import ButtonGroupProps = __Core.ButtonGroupProps;
  export import ButtonGroupItem = __Core.ButtonGroupItem;
  export import ButtonGroupItemProps = __Core.ButtonGroupItemProps;
  export import Card = __Core.Card;
  export import CardProps = __Core.CardProps;
  export import CardBody = __Core.CardBody;
  export import CardBodyProps = __Core.CardBodyProps;
  export import CardFooter = __Core.CardFooter;
  export import CardFooterProps = __Core.CardFooterProps;
  export import CardGroup = __Core.CardGroup;
  export import CardGroupProps = __Core.CardGroupProps;
  export import CardHeader = __Core.CardHeader;
  export import CardHeaderProps = __Core.CardHeaderProps;
  export import CardMedia = __Core.CardMedia;
  export import CardMediaProps = __Core.CardMediaProps;
  export import CharacterCount = __Core.CharacterCount;
  export import CharacterCountProps = __Core.CharacterCountProps;
  export import Checkbox = __Core.Checkbox;
  export import CheckboxProps = __Core.CheckboxProps;
  export import CheckboxGroup = __Core.CheckboxGroup;
  export import CheckboxGroupProps = __Core.CheckboxGroupProps;
  export import CheckboxLabelDescription = __Core.CheckboxLabelDescription;
  export import CheckboxLabelDescriptionProps = __Core.CheckboxLabelDescriptionProps;
  export import Collection = __Core.Collection;
  export import CollectionProps = __Core.CollectionProps;
  export import CollectionCalenar = __Core.CollectionCalendar;
  export import CollectionCalendarProps = __Core.CollectionCalendarProps;
  export import CollectionDescription = __Core.CollectionDescription;
  export import CollectionDescriptionProps = __Core.CollectionDescriptionProps;
  export import CollectionHeading = __Core.CollectionHeading;
  export import CollectionHeadingProps = __Core.CollectionHeadingProps;
  export import CollectionImage = __Core.CollectionImage;
  export import CollectionImageProps = __Core.CollectionImageProps;
  export import CollectionItem = __Core.CollectionItem;
  export import CollectionItemProps = __Core.CollectionItemProps;
  export import CollectionMetaItem = __Core.CollectionMetaItem;
  export import CollectionMetaItemProps = __Core.CollectionMetaItemProps;
  export import ComboBox = __Core.ComboBox;
  export import ComboBoxProps = __Core.ComboBoxProps;
  export import DateInput = __Core.DateInput;
  export import DateInputProps = __Core.DateInputProps;
  export import DatePicker = __Core.DatePicker;
  export import DatePickerProps = __Core.DatePickerProps;
  export import DateRangePicker = __Core.DateRangePicker;
  export import DateRangePickerProps = __Core.DateRangePickerProps;
  export import Dropdown = __Core.Dropdown;
  export import DropdownProps = __Core.DropdownProps;
  export import Fieldset = __Core.Fieldset;
  export import FieldsetProps = __Core.FieldsetProps;
  export import FileInput = __Core.FileInput;
  export import FileInputProps = __Core.FileInputProps;
  export import Footer = __Core.Footer;
  export import FooterProps = __Core.FooterProps;
  export import FooterContactInfo = __Core.FooterContactInfo;
  export import FooterContactInfoProps = __Core.FooterContactInfoProps;
  export import FooterContactItem = __Core.FooterContactItem;
  export import FooterContactItemProps = __Core.FooterContactItemProps;
  export import FooterLinks = __Core.FooterLinks;
  export import FooterLinksProps = __Core.FooterLinksProps;
  export import FooterLogo = __Core.FooterLogo;
  export import FooterLogoProps = __Core.FooterLogoProps;
  export import FooterPrimaryContent = __Core.FooterPrimaryContent;
  export import FooterPrimaryContentProps = __Core.FooterPrimaryContentProps;
  export import FooterSocialLink = __Core.FooterSocialLink;
  export import FooterSocialLinkProps = __Core.FooterSocialLinkProps;
  export import FooterSocialLinks = __Core.FooterSocialLinks;
  export import FooterSocialLinksProps = __Core.FooterSocialLinksProps;
  export import Form = __Core.Form;
  export import FormProps = __Core.FormProps;
  export import FormError = __Core.FormError;
  export import FormErrorProps = __Core.FormErrorProps;
  export import FormGroup = __Core.FormGroup;
  export import FormGroupProps = __Core.FormGroupProps;
  export import FormNote = __Core.FormNote;
  export import FormNoteProps = __Core.FormNoteProps;
  export import GridCol = __Core.GridCol;
  export import GridColProps = __Core.GridColProps;
  export import GridContainer = __Core.GridContainer;
  export import GridContainerProps = __Core.GridContainerProps;
  export import GridRow = __Core.GridRow;
  export import GridRowProps = __Core.GridRowProps;
  export import Header = __Core.Header;
  export import HeaderProps = __Core.HeaderProps;
  export import HeaderNavigation = __Core.HeaderNavigation;
  export import HeaderNavigationProps = __Core.HeaderNavigationProps;
  export import HeaderSecondaryNavigation = __Core.HeaderSecondaryNavigation;
  export import HeaderSecondaryNavigationProps = __Core.HeaderSecondaryNavigationProps;
  export import HeaderTitle = __Core.HeaderTitle;
  export import HeaderTitleProps = __Core.HeaderTitleProps;
  export import Hero = __Core.Hero;
  export import HeroProps = __Core.HeroProps;
  export import Hint = __Core.Hint;
  export import HintProps = __Core.HintProps;
  export import IconList = __Core.IconList;
  export import IconListProps = __Core.IconListProps;
  export import IconListContent = __Core.IconListContent;
  export import IconListContentProps = __Core.IconListContentProps;
  export import IconListIcon = __Core.IconListIcon;
  export import IconListIconProps = __Core.IconListIconProps;
  export import IconListItem = __Core.IconListItem;
  export import IconListItemProps = __Core.IconListItemProps;
  export import Input = __Core.Input;
  export import InputProps = __Core.InputProps;
  export import Label = __Core.Label;
  export import LabelProps = __Core.LabelProps;
  export import Legend = __Core.Legend;
  export import LegendProps = __Core.LegendProps;
  export import Link = __Core.Link;
  export import LinkProps = __Core.LinkProps;
  export import Modal = __Core.Modal;
  export import ModalProps = __Core.ModalProps;
  export import ModalBody = __Core.ModalBody;
  export import ModalBodyProps = __Core.ModalBodyProps;
  export import ModalFooter = __Core.ModalFooter;
  export import ModalFooterProps = __Core.ModalFooterProps;
  export import ModalHeading = __Core.ModalHeading;
  export import ModalHeadingProps = __Core.ModalHeadingProps;
  export import NavigationDropdown = __Core.NavigationDropdown;
  export import NavigationDropdownProps = __Core.NavigationDropdownProps;
  export import NavigationLink = __Core.NavigationLink;
  export import NavigationLinkProps = __Core.NavigationLinkProps;
  export import Pagination = __Core.Pagination;
  export import PaginationProps = __Core.PaginationProps;
  export import ProcessList = __Core.ProcessList;
  export import ProcessListProps = __Core.ProcessListProps;
  export import ProcessListItem = __Core.ProcessListItem;
  export import ProcessListItemProps = __Core.ProcessListItemProps;
  export import ProcessListItemHeader = __Core.ProcessListItemHeader;
  export import ProcessListItemHeaderProps = __Core.ProcessListItemHeaderProps;
  export import Radio = __Core.Radio;
  export import RadioProps = __Core.RadioProps;
  export import RadioGroup = __Core.RadioGroup;
  export import RadioGroupProps = __Core.RadioGroupProps;
  export import RadioLabelDescription = __Core.RadioLabelDescription;
  export import RadioLabelDescriptionProps = __Core.RadioLabelDescriptionProps;
  export import Range = __Core.Range;
  export import RangeProps = __Core.RangeProps;
  export import Search = __Core.Search;
  export import SearchProps = __Core.SearchProps;
  export import Section = __Core.Section;
  export import SectionProps = __Core.SectionProps;
  export import ServiceProvider = __Core.ServiceProvider;
  export import ServiceProviderProps = __Core.ServiceProviderProps;
  export import ShowPassword = __Core.ShowPassword;
  export import ShowPasswordProps = __Core.ShowPasswordProps;
  export import SideNavigation = __Core.SideNavigation;
  export import SideNavigationProps = __Core.SideNavigationProps;
  export import SiteAlert = __Core.SiteAlertProps;
  export import SiteAlertProps = __Core.SiteAlertProps;
  export import SkipNav = __Core.SkipNav;
  export import SkipNavProps = __Core.SkipNavProps;
  export import StepIndicator = __Core.StepIndicator;
  export import StepIndicatorProps = __Core.StepIndicatorProps;
  export import StepIndicatorSegment = __Core.StepIndicatorSegment;
  export import StepIndicatorSegmentProps = __Core.StepIndicatorSegmentProps;
  export import SummaryBox = __Core.SummaryBox;
  export import SummaryBoxProps = __Core.SummaryBoxProps;
  export import Table = __Core.Table;
  export import TableProps = __Core.TableProps;
  export import Tag = __Core.Tag;
  export import TagProps = __Core.TagProps;
  export import TextLink = __Core.TextLink;
  export import TextLinkProps = __Core.TextLinkProps;
  export import TimePicker = __Core.TimePicker;
  export import TimePickerProps = __Core.TimePickerProps;
  export import ToastOutlet = __Core.ToastOutlet;
  export import Tooltip = __Core.Tooltip;
  export import TooltipProps = __Core.TooltipProps;
  export import useService = __Core.useService;
  export import useAlertService = __Core.useAlertService;
  export import USGovernmentBanner = __Core.USGovernmentBanner;
  export import USGovernmentBannerProps = __Core.USGovernmentBannerProps;
  export import Validation = __Core.Validation;
  export import ValidationProps = __Core.ValidationProps;
}

declare namespace __Core {
  export interface AccordionProps {
    /** Should the accordion have a border? */
    border?: boolean;
    /** Body content of the accordion */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Should the accordion start expanded? */
    expanded?: boolean;
    /** Heading content of the accordion */
    heading: string | JSX.Element;
    /** ID used for controlling the expansion and collapse of the accordion */
    id: string;
  }
  export const Accordion: React.FC<AccordionProps>;

  export interface AccordionGroupProps {
    /** Should the accordions have a border? */
    border?: boolean;
    /** `<AccordionItem />` node(s) */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Should the accordion allow multiple expanded accordion items simultaneously? */
    multiselect?: boolean;
  }
  export const AccordionGroup: React.FC<AccordionGroupProps>;

  export interface AccordionItemProps {
    /** Body content of the accordion item */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Should the accordion item start expanded? */
    expanded?: boolean;
    /** Heading content of the accordion item */
    heading: string | JSX.Element;
    /** ID used for controlling the expansion and collapse of the accordion item */
    id: string;
  }
  export const AccordionItem: React.FC<AccordionItemProps>;

  export interface AlertProps {
    /** Body content of the alert */
    children: JSX.Element;
    /** Heading content of the alert */
    heading?: string | JSX.Element;
    /** Automatically set by the AlertService to make toast alerts fade out */
    fadeOut?: boolean;
    /** Should the icon be shown or not? */
    icon?: boolean;
    /**
     * Function called when the alert's close button is clicked.
     * The close button is hidden if this is not provided.
     */
    onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * ARIA role to apply to the alert. Use this for `error` or `warning` type alerts.
     * See also:
     * [alert](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role) and
     * [alertdialog](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role).
     */
    role?: AlertRole;
    /** If `true`, the slim alert variant is used */
    slim?: boolean;
    /** Determines the icon and colors of the alert */
    type: AlertType;
  }
  export const Alert: React.FC<AlertProps>;

  export class AlertInstance {
    public closable: boolean;
    public content: string;
    public fadeOut: boolean;
    public heading?: string | JSX.Element;
    public icon: boolean;
    public role?: AlertRole;
    public slim: boolean;
    public timeout?: number;
    public type: AlertType;
    public uuid: string;

    constructor(alertOptions: {
      closable?: boolean;
      content: string;
      heading?: string | JSX.Element;
      icon?: boolean;
      role?: AlertRole;
      slim?: boolean;
      timeout?: number;
      type: AlertType;
    });
  }

  export interface AlertOutletProps {
    /**
     * If `true`, the outlet will support showing multiple alerts simultaneously.
     * If `false`, only the last alert sent to this outlet will be shown.
     */
    multiple?: boolean;
    /** Name for the outlet */
    name: string;
    /** If `true`, the outlet will display newer alerts at the top and older alerts at the bottom */
    reverseOrder?: boolean;
    /** If `true`, then any alerts sent to this outlet will automatically be closable and have their role set to `alertdialog` */
    toastOutlet?: boolean;
  }
  export const AlertOutlet: React.FC<AlertOutletProps>;

  export interface AlertOutletInstance {
    alerts: AlertInstance[];
    multiple: boolean;
    subject: Subject<AlertInstance[]>;
    toastOutlet: boolean;
  }

  export type AlertRole = 'alert' | 'alertdialog';

  export class AlertService {
    private outlets: Map<string, AlertOutletInstance>;

    registerOutlet(
      name: string,
      multiple?: boolean,
      toastOutlet?: boolean
    ): Observable<AlertInstance[]>;

    unregisterOutlet(name: string): void;

    showAlert(outletName: string, alert: AlertInstance): Promise<void>;

    closeAlert(outletName: string, alertIndex: number): void;

    private getOutlet(name: string): AlertOutletInstance;
  }

  export type AlertType = 'error' | 'info' | 'success' | 'warning';

  export interface BreadcrumbProps {
    /** Array of breadcrumb titles and links that are displayed */
    links: { href: string; text: string }[];
    /** If `true`, RDFa metadata will be added */
    meta?: boolean;
    /** Determines whether or not the breadcrumb titles should wrap */
    wrap?: boolean;
  }
  export const Breadcrumb: React.FC<BreadcrumbProps>;

  export interface ButtonProps {
    /** If `true`, use the "accent cool" color scheme */
    accentCool?: boolean;
    /** If `true`, use the "base" color scheme */
    base?: boolean;
    /** If `true`, the size of the button is almost doubled */
    big?: boolean;
    /** Body content of the button */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Should the button be disabled? */
    disabled?: boolean;
    /** If a value for this prop is provided, the button will use an anchor tag instead of a button tag */
    href?: string;
    /**
     * If `true`, use the "inverse" color scheme.
     * The `outline` prop must be `true` for this to have an effect.
     * This is best used with dark backgrounds.
     */
    inverse?: boolean;
    /** Function called when the button is clicked */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** If `true`, the outline variant of the button is used */
    outline?: boolean;
    /** If `true`, use the "secondary" color scheme */
    secondary?: boolean;
    /** If `true`, the button is styled to look like a link */
    unstyled?: boolean;
  }
  export const Button: React.FC<ButtonProps>;

  export interface ButtonGroupProps {
    children: JSX.Element;
    /** If `true`, then the buttons in the group are connected into one segmented item */
    segment?: boolean;
  }
  export const ButtonGroup: React.FC<ButtonGroupProps>;

  export interface ButtonGroupItemProps {
    children: JSX.Element;
  }
  export const ButtonGroupItem: React.FC<ButtonGroupItemProps>;

  export interface CardProps {
    children: JSX.Element;
    /** Any additonal classes to apply */
    className?: string;
    /** Should the card body, footer, header, media be exdent? */
    exdent?: boolean;
    /** If `true` or `'right'` is passed in, a flag variant will be used */
    flag?: boolean | 'right';
    /** If `true`, the header will show before the media */
    headerFirst?: boolean;
  }
  export const Card: React.FC<CardProps>;

  export interface CardBodyProps {
    children: JSX.Element;
    /** Should the body be exdent? */
    exdent?: boolean;
  }
  export const CardBody: React.FC<CardBodyProps>;

  export interface CardFooterProps {
    children: JSX.Element;
    /** Should the footer be exdent? */
    exdent?: boolean;
  }
  export const CardFooter: React.FC<CardFooterProps>;

  export interface CardGroupProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const CardGroup: React.FC<CardGroupProps>;

  export interface CardHeaderProps {
    children: JSX.Element;
    /** Should the header be exdent? */
    exdent?: boolean;
    /** Heading level to use */
    level?: 2 | 3 | 4;
  }
  export const CardHeader: React.FC<CardHeaderProps>;

  export interface CardMediaProps {
    /** Sets a fixed aspect ratio for the media */
    aspectRatio?: '1x1' | '2x1' | '4x3' | '9x16' | '16x9';
    /** Media alternate text/description */
    children: string;
    /** Should the media be exdent? */
    exdent?: boolean;
    /** Should the media be inset? */
    inset?: boolean;
    /** URL or path for the image */
    src: string;
  }
  export const CardMedia: React.FC<CardMediaProps>;

  export interface CharacterCountProps {
    children: JSX.Element;
    /** ID of the input to show the character count for */
    target: string;
  }
  export const CharacterCount: React.FC<CharacterCountProps>;

  export interface CheckboxProps {
    /** State of the checkbox */
    checked?: boolean;
    /** Label for the checkbox */
    children: JSX.Element;
    /** Should the checkbox be disabled? */
    disabled?: boolean;
    /** Index of the checkbox in the `<CheckboxGroup>` (auto-populated) */
    groupIndex?: number;
    /** ID for the checkbox (auto-populated if used inside a `<CheckboxGroup>`) */
    id?: string;
    /** Function called when the checkbox is checked or unchecked */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Should the checkbox be marked as read-only? */
    readOnly?: boolean;
    /**
     * If `true`, the tile checkbox variant is used.
     * This is automatically set when used inside a `<CheckboxGroup>`.
     */
    tile?: boolean;
  }
  export const Checkbox: React.FC<CheckboxProps>;

  export interface CheckboxGroupProps {
    /** `<Checkbox>` nodes */
    children: JSX.Element;
    /** Error message to display */
    error?: string;
    /** ID for the group of checkboxes */
    id: string;
    /** If `true`, the tile checkbox variant is used for the entire group */
    tile?: boolean;
  }
  export const CheckboxGroup: React.FC<CheckboxGroupProps>;

  export interface CheckboxLabelDescriptionProps {
    children: JSX.Element;
  }
  export const CheckboxLabelDescription: React.FC<CheckboxLabelDescriptionProps>;

  export interface CollectionProps {
    /** Contents of the Collection */
    children: JSX.Element;
    /** If `true`, the Collection is presented with less space between items */
    condensed?: boolean;
  }
  export const Collection: React.FC<CollectionProps>;

  export interface CollectionCalendarProps {
    /** DateTime Formatted string for the calendar i.e. 2020-09-30T12:00:00+01:00 */
    dateTime: string;
    /** Day of the calendar */
    day: number;
    /** Represents the month of the calendar */
    month: string;
  }
  export const CollectionCalendar: React.FC<CollectionCalendarProps>;

  export interface CollectionDescriptionProps {
    /** Contents of the Collection's description */
    children: JSX.Element;
  }
  export const CollectionDescription: React.FC<CollectionDescriptionProps>;

  export interface CollectionHeadingProps {
    /** Contents of the Collection's heading */
    children: JSX.Element;
  }
  export const CollectionHeading: React.FC<CollectionHeadingProps>;

  export interface CollectionImageProps {
    /** Screen reader text (or alt text) for the media thumbnail */
    alt: string;
    /** URL or path of the media thumbnail */
    src: string;
  }
  export const CollectionImage: React.FC<CollectionImageProps>;

  export interface CollectionItemProps {
    /** Contents of the Collection */
    children: JSX.Element;
  }
  export const CollectionItem: React.FC<CollectionItemProps>;

  export interface CollectionMetaProps {
    /** Contents of the Collection's unordered list */
    children: JSX.Element;
    /** Allows you to override the default 'aria-label' of "More information" */
    label?: string;
  }
  export const CollectionMeta: React.FC<CollectionMetaProps>;

  export interface CollectionMetaItemProps {
    /** Contents of the collection list item */
    children: string;
  }
  export const CollectionMetaItem: React.FC<CollectionMetaItemProps>;

  export interface ComboBoxProps {
    /** Label for input */
    children: JSX.Element;
    /** Error message to display */
    error?: string;
    /**
     * The combo box will use this regular expression to filter the combo box options.
     * You are declaring a case insensitive match over the entire option text, which
     * means ^ and $ are added automatically. You can specify the inputted query with {{query}}.
     */
    filter?: string;
    /** ID of the input */
    id: string;
    /** Function called whenever the combo box selection is changed */
    onChange?: (e: Event) => void;
    /** Array of combo box options */
    options: {
      /** Identifier for the option */
      key: string;
      /** The shown name for the option */
      value: string;
    }[];
    /** Text to show when a value has not been selected */
    placeholder: string;
    /** Used to set the combo box selection */
    value?: string;
  }
  export const ComboBox: React.FC<ComboBoxProps>;

  export interface DateInputProps {
    /** Label for input */
    children: JSX.Element;
    /** Should the inputs be marked as disabled? */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** Hint to be shown for the date input */
    hint?: string | JSX.Element;
    /** ID of the input */
    id: string;
    /**
     * Function called when one of the inputs
     * is modified
     */
    onChange?: (newValue: {
      day?: number;
      month?: number;
      year?: number;
    }) => void;
    /** Should the inputs be marked as read-only? */
    readOnly?: boolean;
    /** Used to set the values of the inputs */
    value?: {
      day?: number;
      month?: number;
      year?: number;
    };
  }
  export const DateInput: React.FC<DateInputProps>;

  export interface DatePickerProps {
    /** Label for input */
    children: JSX.Element;
    /** Should the date picker be disabled? */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** Hint to be shown for the date picker */
    hint?: JSX.Element;
    /** ID of the input */
    id: string;
    /** The date picker will not allow a date selection after this date. Must be in the format: `YYYY-MM-DD` */
    maxDate?: string;
    /** The date picker will not allow a date selection before this date. Must be in the format: `YYYY-MM-DD` */
    minDate?: string;
    /** Function called when the date is changed */
    onChange?: (newValue: string) => void;
    /** When set, the date picker will show a range selection from the range date. Must be in the format: `YYYY-MM-DD` */
    rangeDate?: string;
    /** Used to set the value of the input. Must be in the format: `YYYY-MM-DD` */
    value?: string;
  }
  export const DatePicker: React.FC<DatePickerProps>;

  export interface DateRangePickerProps {
    /** Should contain two `<DatePicker />` node(s) */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const DateRangePicker: React.FC<DateRangePickerProps>;

  export interface DropdownProps {
    /** Label for input */
    children: JSX.Element;
    /**
     * Let's you specify a custom function for comparing the selected value with the list of options.
     * If this is not provided, lodash's isEqual function is used: https://lodash.com/docs/#isEqual.
     */
    comparator?: (value: any, option: any) => boolean;
    /** Error message to display */
    error?: string;
    /** ID of the input */
    id: string;
    /** Function called whenever the dropdown selection is changed */
    onChange?: (event: CustomEvent) => void;
    /** Function that when given an option should return how the option should be displayed in the dropdown menu */
    optionRenderer?: (option: any) => string | JSX.Element;
    /** Array of dropdown options */
    options: any[];
    /** Should the "- Select -" option be shown? */
    showSelectOption?: boolean;
    /** Used to set the dropdown selection */
    value?: any;
  }
  export const Dropdown: React.FC<DropdownProps>;

  export interface FieldsetProps {
    children: JSX.Element;
  }
  export const Fieldset: React.FC<FieldsetProps>;

  export interface FileInputProps {
    /**
     * String defining the file types the input should accept.
     * See here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-accept
     */
    accept?: string;
    /** Label for input */
    children: JSX.Element;
    /** Should the file input be disabled? */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** Hint to be shown for the file input */
    hint?: string;
    /** ID of the input */
    id: string;
    /** Should the file input accept multiple files? */
    multiple?: boolean;
    /** Function called when the file selection changes */
    onChange?: (e: Event) => void;
    /** Used to set the value for the file input */
    value?: Object;
    /** Used to override the error message shown when an invalid file type is selected */
    wrongFileTypeErrorMessage?: string;
  }
  export const FileInput: React.FC<FileInputProps>;

  export interface FooterProps {
    /** Any additional classes to apply */
    className?: string;
    /** Should the "Return to Top" link be shown above the footer? */
    showReturnToTop?: boolean;
    /** If `true`, use the slim footer variant */
    slim?: boolean;
  }
  export const Footer: React.FC<FooterProps>;

  export interface FooterContactInfoProps {
    children: JSX.Element;
    /** If not using a slim Footer, allows you to override the "Contact Center" text */
    heading?: JSX.Element;
    /** Set automatically by the Footer component it is used in */
    slimFooter?: boolean;
  }
  export const FooterContactInfo: React.FC<FooterContactInfoProps>;

  export interface FooterContactItemProps {
    children: JSX.Element;
    /** Set automatically by the Footer component it is used in */
    slimFooter?: boolean;
  }
  export const FooterContactItem: React.FC<FooterContactItemProps>;

  interface FooterLink {
    href: string;
    text: string;
  }

  interface FooterLinksGroup {
    header: string;
    links: FooterLink[];
  }

  export interface FooterLinksProps {
    /** Set automatically by the Footer component it is used in */
    bigFooter?: boolean;
    /** Array of links or grouped links */
    links: FooterLink[] | FooterLinksGroup[];
  }
  export const FooterLinks: React.FC<FooterLinksProps>;

  export interface FooterLogoProps {
    /** Agency name or text to accompany the logo */
    children: JSX.Element;
    /** Logo image description for screen readers */
    logoDesc?: string;
    /** URL or path for the logo image */
    logoSrc?: string;
  }
  export const FooterLogo: React.FC<FooterLogoProps>;

  export interface FooterPrimaryContentProps {
    children: JSX.Element;
  }
  export const FooterPrimaryContent: React.FC<FooterPrimaryContentProps>;

  export interface FooterSocialLinkProps {
    /** Type of social media page being linked to */
    type: 'facebook' | 'instagram' | 'linkedin' | 'rss' | 'twitter' | 'youtube';
    /** URL of the social media page */
    url: string;
  }
  export const FooterSocialLink: React.FC<FooterSocialLinkProps>;

  export interface FooterSocialLinksProps {
    children: JSX.Element;
  }
  export const FooterSocialLinks: React.FC<FooterSocialLinkProps>;

  export interface FormProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** If `true`, the width of the form is almost doubled */
    large?: boolean;
    /** Function called when the form is submitted */
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  }
  export const Form: React.FC<FormProps>;

  export interface FormErrorProps {
    /** Error message to display */
    error?: string;
  }
  export const FormError: React.FC<FormErrorProps>;

  export interface FormGroupProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** If true, a vertical, red bar is shown to the left of the form group */
    error?: boolean;
  }
  export const FormGroup: React.FC<FormGroupProps>;

  export interface FormNoteProps {
    children: JSX.Element;
  }
  export const FormNote: React.FC<FormNoteProps>;

  type GridColWidth = number | 'auto' | 'fill';

  export interface GridColProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Width to use at the desktop breakpoint */
    desktop?: GridColWidth;
    /** Width to use at the mobile breakpoint */
    mobile?: GridColWidth;
    /** Width to use at the tablet breakpoint */
    tablet?: GridColWidth;
    /** Default width to use */
    width?: GridColWidth;
  }
  export const GridCol: React.FC<GridColProps>;

  export interface GridContainerProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const GridContainer: React.FC<GridContainerProps>;

  export interface GridRowProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Should the row have gaps between its columns? */
    gaps?: boolean;
    /**
     * Size of the gaps.
     * The `gaps` prop must be `true` for this to have an effect.
     */
    gapSize?: number;
  }
  export const GridRow: React.FC<GridRowProps>;

  export interface HeaderProps {
    /**
     * `<HeaderTitle />`, `<HeaderNavigation />`, `<HeaderSecondaryNavigation />`,
     * and `<Search />` node(s)
     */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** If `true`, use the extended header variant */
    extended?: boolean;
  }
  export const Header: React.FC<HeaderProps>;

  export interface HeaderNavigationProps {
    /** `<NavigationDropdown />` and/or `<NavigationLink />` node(s) */
    children: JSX.Element;
  }
  export const HeaderNavigation: React.FC<HeaderNavigationProps>;

  export interface HeaderSecondaryNavigationProps {
    /** `<NavigationLink />` node(s) */
    children: JSX.Element;
  }
  export const HeaderSecondaryNavigation: React.FC<HeaderSecondaryNavigationProps>;

  export interface HeaderTitleProps {
    /** Optional aria-label for link */
    ariaLabel?: string;
    /** Header logo and/or title content to display */
    children: JSX.Element;
  }
  export const HeaderTitle: React.FC<HeaderTitleProps>;

  export interface HeroProps {
    /** Should the hero content be left or right aligned? */
    align?: 'left' | 'right';
    /** URL or path to an image used to override the default background */
    background?: string;
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Heading content of the hero banner */
    heading?: string | JSX.Element;
  }
  export const Hero: React.FC<HeroProps>;

  export interface HintProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const Hint: React.FC<HintProps>;

  export interface IconListProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Color for the icons. For options, see here: https://designsystem.digital.gov/utilities/color/ */
    color?: string;
    /** The size of the list */
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  }
  export const IconList: React.FC<IconListProps>;

  export interface IconListContentProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const IconListContent: React.FC<IconListContentProps>;

  export interface IconListIconProps {
    children?: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** Color for the icon. For options, see here: https://designsystem.digital.gov/utilities/color/ */
    color?: string;
    /** The icon to use. For options, see here: https://designsystem.digital.gov/components/icon/ */
    identifier?: string;
    /** The path to USWDS's `sprite.svg` or another SVG sprite */
    sprite?: string;
  }
  export const IconListIcon: React.FC<IconListIconProps>;

  export interface IconListItemProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const IconListItem: React.FC<IconListItemProps>;

  export interface InputProps {
    /** Label for input */
    children: JSX.Element;
    /**
     * See [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
     */
    describedBy?: string;
    /** Error message to display */
    error?: string;
    /** ID of the input */
    id: string;
    /**
     * Displays an input or input group at a specific width
     * See [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
     */
    inputWidth:
      | '2xs'
      | 'xs'
      | 'sm'
      | 'small'
      | 'md'
      | 'medium'
      | 'lg'
      | 'xl'
      | '2xl';
    /** Function called when the input is modified */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** Used to set the value of the input */
    value: string | number;
    /** If `true`, the input is outlined in green */
    success?: boolean;
    /** Type of the input */
    type: 'number' | 'password' | 'text' | 'textarea';
    /** ID of the `<Validation />` associated with this input */
    validationId?: string;
    /** Array of validators to be run on this input */
    validators?: {
      name: string;
      regex: string;
    }[];
  }
  export const Input: React.FC<InputProps>;

  export interface LabelProps {
    children: JSX.Element;
    /** Error message to display */
    error?: string;
    /** ID of the label */
    id?: string;
    /** ID of the input this label is associated with */
    target: string;
  }
  export const Label: React.FC<LabelProps>;

  export interface LegendProps {
    children: JSX.Element;
    /**
     * If a truthy value is passed in, the label will be
     * highlighted indicating there is an error.
     */
    error?: boolean | string;
    /** If `true`, the label will only be visible to screen readers */
    screenReaderOnly?: boolean;
  }
  export const Legend: React.FC<LegendProps>;

  export interface LinkProps {
    children: JSX.Element;
    external?: boolean;
    href: string;
    target?: string;
  }
  export const Link: React.FC<LinkProps>;

  export interface HeaderLink {
    current: boolean;
    href: string;
    text: string;
    target?: string;
  }
  export interface ModalProps {
    /** Makes up the content the Modal component */
    children: JSX.Element;
    /** ID of the ModalBody */
    describedBy?: string;
    /** If `true`, the user will be forced to take an action to close the modal */
    forceAction?: boolean;
    /** ID of the modal */
    id: string;
    /** Toggles modal state programmatically */
    isOpen?: boolean;
    /** ID of the ModalHeading */
    labelledBy?: string;
    /** If `true`, the large variant is used */
    large?: boolean;
    /** Function called whenever the modal open state is changed. */
    onStateChanged?: (newState: boolean) => void;
  }
  export const Modal: React.FC<ModalProps>;

  export interface ModalBodyProps {
    /** Modal body content */
    children: JSX.Element;
    /** ID of the modal body */
    id?: string;
  }

  export const ModalBody: React.FC<ModalBodyProps>;

  export interface ModalFooterProps {
    /** Modal footer content */
    children: JSX.Element;
  }

  export const ModalFooter: React.FC<ModalFooterProps>;

  export interface ModalHeadingProps {
    /** Modal heading content */
    children: JSX.Element;
    /** ID of the modal heading */
    id?: string;
  }
  export const ModalHeading: React.FC<ModalHeadingProps>;

  export interface NavigationDropdownProps {
    /**
     * If `true`, apply special styling denoting
     * this as the active or current page.
     */
    active?: boolean;
    /** Heading content for the dropdown */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** ID used for controlling the expansion and collapse of the dropdown */
    id: string;
    /** Array of links or groups of links */
    links: HeaderLink[] | HeaderLink[][];
  }
  export const NavigationDropdown: React.FC<NavigationDropdownProps>;

  export interface NavigationLinkProps {
    /**
     * If `true`, apply special styling denoting
     * this as the active or current page
     */
    active?: boolean;
    /** Link content */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** URL to go to when the link is clicked */
    href: string;
    /**
     * If `true`, style the link in a way to be shown above the header's search bar.
     * This prop is automatically set to `true` when using this component inside a
     * `<HeaderSecondaryNavigation />` component.
     */
    secondary?: boolean;
  }
  export const NavigationLink: React.FC<NavigationLinkProps>;

  export interface PaginationProps {
    /** Function called when the page is changed */
    onChangePage?: (newPage: number) => void;
    /** The current, 1-indexed page number */
    page: number;
    /** The total number of pages */
    totalPages?: number;
  }
  export const Pagination: React.FC<PaginationProps>;

  export interface ProcessListProps {
    /** Process List content */
    children: JSX.Element;
  }
  export const ProcessList: React.FC<ProcessListProps>;

  export interface ProcessListItemProps {
    children: JSX.Element;
    /** Any additional classes to apply to the list item (<li></li>) */
    className?: string;
  }
  export const ProcessListItem: React.FC<ProcessListItemProps>;

  export interface ProcessListItemHeaderProps {
    children: JSX.Element;
    /** Any additional classes to apply to the header (<h4></h4>) */
    className?: string;
  }
  export const ProcessListItemHeader: React.FC<ProcessListItemHeaderProps>;

  export interface RadioProps {
    /** State of the radio option (auto-populated) */
    checked?: boolean;
    /** Label for the radio option */
    children: JSX.Element;
    /** Should the radio option be disabled? */
    disabled?: boolean;
    /** ID of the `<RadioGroup>` (auto-populated) */
    groupId?: string;
    /** Index of the radio in the `<RadioGroup>` (auto-populated) */
    groupIndex?: number;
    /** Function called when the radio option is selected */
    onChange?: (newValue: any) => void;
    /** Should the radio option be marked as read-only? */
    readOnly?: boolean;
    /**
     * If `true`, the tile radio variant is used.
     * This is automatically set when used inside a `<RadioGroup>`.
     */
    tile?: boolean;
    /** Value for the radio option */
    value?: any;
  }
  export const Radio: React.FC<RadioProps>;

  export interface RadioGroupProps {
    /** `<Radio>` nodes */
    children: JSX.Element;
    /**
     * Let's you specify a custom function for comparing the selected value with the list of options.
     * If this is not provided, lodash's isEqual function is used: https://lodash.com/docs/#isEqual.
     */
    comparator?: (value: any, option: any) => boolean;
    /** Should all the radio options be disabled? */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** ID for the group of radio options */
    id: string;
    /** Function called whenever the radio selection is changed */
    onChange?: (e: CustomEvent) => void;
    /** Should the radio options be marked as read-only? */
    readOnly?: boolean;
    /** If `true`, the tile radio variant is used for the entire group */
    tile?: boolean;
    /** Used to set the radio selection */
    value?: any;
  }
  export const RadioGroup: React.FC<RadioGroupProps>;

  export interface RadioLabelDescriptionProps {
    children: JSX.Element;
  }
  export const RadioLabelDescription: React.FC<RadioLabelDescriptionProps>;

  export interface RangeProps {
    /** Label for input */
    children: JSX.Element;
    /** Should the input be disabled? */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** ID of the input */
    id: string;
    /** Maximum value allowed */
    max: number;
    /** Minimum value allowed */
    min: number;
    /** Function called when the input is modified */
    onChange?: () => void;
    /** Specifies the legal number intervals */
    step?: number;
    /** Used to set the range value */
    value?: number;
  }
  export const Range: React.FC<RangeProps>;

  export interface SearchProps {
    /** Any additional classes to apply */
    className?: string;
    /**
     * Function called when the Search button is pressed
     * (or when the user presses the Enter key in the text field).
     * The function is called with the search query.
     */
    onSearch?: (searchQuery: string) => void;
    /** Text to show when the search field is empty */
    placeholder?: string;
    /** Size of the search bar */
    size?: 'small' | 'medium' | 'large';
  }
  export const Search: React.FC<SearchProps>;

  export interface SectionProps {
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
  }
  export const Section: React.FC<SectionProps>;

  export interface ServiceProviderProps {
    children: JSX.Element;
    value?: {
      AlertService: AlertService;
    };
  }
  export const ServiceProvider: React.FC<ServiceProviderProps>;

  export interface ShowPasswordProps {
    /** The ID or ID(s) of the input(s) to target */
    target: string | string[];
  }
  export const ShowPassword: React.FC<ShowPasswordProps>;

  export interface SideNavigationLink {
    current?: boolean;
    href: string;
    sublist?: this[];
    text: string;
    [x: string]: any;
  }

  export interface SideNavigationProps {
    /** Array of links to show */
    items: SideNavigationLink[];
  }
  export const SideNavigation: React.FC<SideNavigationProps>;

  export interface SiteAlertProps {
    /** Body content of the alert */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** If `true`, the emergency alert variant is used */
    emergency?: boolean;
    /** Heading content of the alert */
    heading?: JSX.Element;
    /** Should the icon be shown or not? */
    icon?: boolean;
    /**
     * Function called when the alert's close button is clicked.
     * The close button is hidden if this is not provided.
     */
    onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** If `true`, the slim alert variant is used */
    slim?: boolean;
  }
  export const SiteAlert: React.FC<SiteAlertProps>;

  export interface SkipNavProps {
    /** Anchor link to go to when the Skip Nav link is triggered */
    href: string;
  }
  export const SkipNav: React.FC<SkipNavProps>;

  export interface StepIndicatorProps {
    /** If `true`, the step labels are centered */
    centered?: boolean;
    /** `<StepIndicatorSegment />` nodes */
    children: JSX.Element;
    /** If `true` or `'small'` is passed in, a counters variant will be used */
    counters?: boolean | 'small';
    /** The 1-based index of the current step */
    current: number;
    /** If `false`, no labels will be visible under the steps */
    labels?: boolean;
  }
  export const StepIndicator: React.FC<StepIndicatorProps>;

  export interface StepIndicatorSegmentProps {
    /** Label for the step */
    children: JSX.Element;
    /** Is the step completed? */
    complete: boolean;
    /** Is this the current step? */
    current: boolean;
  }
  export const StepIndicatorSegment: React.FC<StepIndicatorSegmentProps>;

  export interface SummaryBoxProps {
    /** `<li>` node(s) */
    children: JSX.Element;
    /** Heading content for the SummaryBox */
    heading: JSX.Element;
  }
  export const SummaryBox: React.FC<SummaryBoxProps>;

  export interface TableProps {
    /** Should the table have a border? */
    border?: boolean;
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /**
     * If `true`,  row height and vertical spacing will be reduced to
     * display more table rows within a limited space.
     */
    compact?: boolean;
    /** Should the table have a horizontal scrollbar? */
    scrollable?: boolean;
    /** Should the table cells stack on narrow screens? */
    stacked?: boolean;
    /**
     * Should the table cells stack on narrow screens and visually
     * promote the first cell of every row into a "header" for that group?
     */
    stackedHeader?: boolean;
    /** Should the table apply alternating horizontal striping? */
    striped?: boolean;
  }
  export const Table: React.FC<TableProps>;

  export interface TagProps {
    /** Body content of the tag */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** If `true`, the size is increased slightly */
    large?: boolean;
  }
  export const Tag: React.FC<TagProps>;

  export interface TextLinkProps {
    /** Link content */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /**
     * If `true`, display an icon next to the link
     * denoting it as external.
     */
    external?: boolean;
    /** URL to go to when the link is clicked */
    href: string;
  }
  export const TextLink: React.FC<TextLinkProps>;

  export interface TimePickerProps {
    /** Label for input */
    children: JSX.Element;
    /** Should the time picker be disabled? */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** ID of the input */
    id: string;
    /** The end time used in the time picker in `hh:mm` 24-hour format. The default is `23:59` */
    maxTime?: string;
    /** The start time used in the time picker in `hh:mm` 24-hour format. The default is `00:00` */
    minTime?: string;
    /** Function called whenever the time picker value is changed */
    onChange?: (e: Event) => void;
    /** Text to show when a value has not been selected */
    placeholder?: string;
    /** The number of minutes between options. The minimum is 1 minute and the default is 30 minutes */
    step?: number;
    /** If `true`, the 24-hour time format is used */
    use24Hour?: boolean;
    /** Used to set the value of the input. Must be in `hh:mm` 24-hour format */
    value?: string;
  }
  export const TimePicker: React.FC<TimePickerProps>;

  export const ToastOutlet: React.FC<{}>;

  export interface TooltipProps {
    /** The content that when moused over or when focused should display the tooltip */
    children: JSX.Element;
    /** Any additional classes to apply */
    className?: string;
    /** The content of the tooltip */
    content: string;
    /** The position of the tooltip */
    position: 'top' | 'left' | 'bottom' | 'right';
  }
  export const Tooltip: React.FC<TooltipProps>;

  export function useService<T>(identifier: 'AlertService'): T;

  export function useAlertService(): AlertService;

  export interface USGovernmentBannerProps {
    /** Any additional classes to apply */
    className?: string;
    /** Top-level domain (TLD) */
    domain?: 'gov' | 'mil';
  }
  export const USGovernmentBanner: React.FC<USGovernmentBannerProps>;

  export interface ValidationProps {
    /** Heading content */
    heading: string | JSX.Element;
    /** ID of the validation */
    id: string;
    /** Array of requirements */
    requirements: {
      text: string;
      validator: string;
    }[];
  }
  export const Validation: React.FC<ValidationProps>;
}
