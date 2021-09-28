# Tabs

Tabs group similar content on the same page.

The tabs (TabSet) pattern describes a list (TabList) of tabs (TabLabel) which can be clicked to switch a view (TabPanel) on the page.

## Best practices
### Do
-	Make sure that the information shown in a single tab can be interpreted without knowledge of details from the other tabs
-	Use clear and short labels
-	Try to balance the amount of information between the tabs
-	Try to limit the amount of tabs, especially when designing for mobile
-	Try to limit the use of the Tabs component

### Don't
-	Don’t use abbreviations as Tab labels
-	Don’t use a Tabs component when representing a list or when te order of reading plays any role
-	Don’t use a Tabs component to implement a complex input form
-	Don’t use a Tabs component when the content is in fact a list of similar items

## Alternatives and related components
TBD Pages, Accordeons and lists

## Variations
TBD Are there different versions for mobile / desktop / small containers?

Are there built-in options that control the display or interaction?

## Anatomy

The tabs anatomy is researched and described in detail on this [Open UI analysis of Tabs Parts & Concepts](https://deploy-preview-350--open-ui.netlify.app/components/tabs.research.parts).

This tabs setup follows the rough categorisation of elements:

- TabSet: The element containing the underlying TabList and TabPanels
- TabList: A list of TabLabel elements
- TabLabel: The element most recognisable as the "tab item" itself. Contains a label describing a corresponding TabPanel.
- TabPanel: Contains the content corresponding to the TabLabel.

## States
### Default

### Hover

### Active

### Focus

### Disabled

## Design properties
### Accessibility
