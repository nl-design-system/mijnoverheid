# Tabs

Tabs group similar content on the same page.

The tabs (TabSet) pattern describes a list (TabList) of tabs (TabLabel) which can be clicked to switch a view (TabPanel) on the page.

## Anatomy

The tabs anatomy is researched and described in detail on this [Open UI analysis of Tabs Parts & Concepts](https://deploy-preview-350--open-ui.netlify.app/components/tabs.research.parts).

This tabs setup follows the rough categorisation of elements:

- TabSet: The element containing the underlying TabList and TabPanels
- TabList: A list of TabLabel elements
- TabLabel: The element most recognisable as the "tab item" itself. Contains a label describing a corresponding TabPanel.
- TabPanel: Contains the content corresponding to the TabLabel.
