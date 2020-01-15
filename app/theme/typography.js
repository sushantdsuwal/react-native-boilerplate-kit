// const fontFamily = 'sans-serif';
const fontWeightRegular = 'normal';
const fontWeightSemiBold = '600';
const fontWeightBold = 'bold';

// const activeTheme = useTheme();
// const theme = activeTheme.active;

const typography = theme => ({
  /**
   * Title is reserved for the title of a screen(Toolbar) and the titles of Modal dialogs.
   */
  titleText: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  titleTextBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use the Heading style for card titles.
   */
  headingText: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  headingTextBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  subheadingTextBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn’t a title, heading, subheading, label or caption would generally use the Body style.
   */
  bodyText: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  bodyTextSemiBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightSemiBold,
  },
  bodyTextBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use labels with form field and input elements to signify the element’s function to the user.
   */
  labelText: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  labelTextBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
  /**
   * Use the Caption style for help/hint text.
   * It’s used with some form fields which require a description,
   * and can also be used stand-alone within a card when necessary.
   */
  captionText: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  },
  captionTextBold: {
    // fontFamily,
    color: theme.colors.text,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  },
});

export default typography;
