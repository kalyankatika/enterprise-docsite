# EDS Styling Reference

This document preserves the original styling content from the eds-lookslike.css file for reference purposes.

## Original Styling Overrides

```css
/* Styling overrides */
  #horz_content a,
  #horz_content a:link,
  #vert_content a,
  #vert_content a:link,
  .mainTextAlt1 a,
  .mainTextAlt1 a:link,
  .titleLinkSection a,
  .titleLinkSection a:link,
  table a,
  table a:link {
    color: var(--helios-link-text-color, #000) !important;
    text-decoration: underline !important;
    text-decoration-color: var(--helios-link-text-color, #000) !important
    -webkit-text-decoration-color: var(--helios-link-text-color, #000) !important;
  }
/* EDS Link overrides  */
  #horz_content a,
  #horz_content a:link,
  #vert_content a,
  #vert_content a:link,
  .mainTextAlt1 a,
  .mainTextAlt1 a:link,
  .titleLinkSection a,
  .titleLinkSection a:link,
  table a,
  table a:link {
    color: var(--eds-link-foreground) !important;
    line-height: var(--eds-link-line);
    font-weight: var(--eds-link-weight);
    font-size: var(--eds-link-size);
    text-decoration: underline !important;
  }

/* Background color  */
background-color: #F5F3F0;

/* Page width */
max-width: 1272px;



/* ABC3 primary button styling  */
.abc3-button-root {
    color: #000;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    font-size: .875rem;
    background-color: #368727;
    border: solid 1px #368727;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    justify-content: center;
    margin: 0;
    max-width: 100%;
    min-height: 2.325em;
    padding: 0.5em 1em;
    vertical-align: top;
}

/* AFTER EDS */
.abc3-button-root {
    align-items: center;
    background-color: var(--eds-submit-background);
    border-color: var(--eds-submit-fill);
    border-radius: var(--eds-input-radius--round);
    border-style: solid;
    border-width: var(--eds-input-stroke);
    color: var(--eds-navigate-foreground);
    cursor: pointer;
    display: inline-flex;
    line-height: var(--eds-input-line);
    font-size: var(--eds-input-size);
    font-weight: var(--eds-navigate-weight);
    gap: var(--eds-input-gap);
    justify-content: center;
    min-height: var(--eds-input-height);
    min-width: var(--eds-input-height);
    padding-left: var(--eds-input-padding);
    padding-right: var(--eds-input-padding);
    text-align: center;
    text-decoration: none;
}


/*Tertiary Button  */
Default

  align-items: center;
  background-color: var(--eds-navigate-background);
  border-color: var(--eds-navigate-fill);
  border-radius: var(--eds-input-radius--round);
  border-style: solid;
  border-width: var(--eds-input-stroke);
  color: var(--eds-navigate-foreground);
  cursor: pointer;
  display: inline-flex;
  line-height: var(--eds-input-line);
  font-size: var(--eds-input-size);
  font-weight: var(--eds-navigate-weight);
  gap: var(--eds-input-gap);
  justify-content: center;
  min-height: var(--eds-input-height);
  min-width: var(--eds-input-height);
  padding-left: var(--eds-input-padding);
  padding-right: var(--eds-input-padding);
  text-align: center;
  text-decoration: none;
Copy to clipboardFailed to copy to clipboardCopied
Hover

  background-color: var(--eds-navigate-background--hover);
  color: var(--eds-navigate-foreground--hover);
Copy to clipboardFailed to copy to clipboardCopied
Focus

  background-color: var(--eds-navigate-background--focus);
  border-color: var(--eds-navigate-background--focus);
  box-shadow: none;
  color: var(--eds-navigate-foreground--focus);
  outline-color: var(--eds-outline-fill);
  outline-offset: var(--eds-outline-margin);
  outline-style: solid;
  outline-width: var(--eds-outline-stroke);
  transition: outline .125s linear;
Copy to clipboardFailed to copy to clipboardCopied
Active

  background-color: var(--eds-navigate-background--active);
  box-shadow: none;
  color: var(--eds-navigate-foreground--active);
Copy to clipboardFailed to copy to clipboardCopied
Disabled

  background-color: var(--eds-navigate-background--disabled);
  color: var(--eds-navigate-foreground--disabled);

/*LINK  */
Default

  border-radius: var(--eds-radius-25);
  color: var(--eds-link-foreground);
  font-weight: var(--eds-link-weight);
  font-size: var(--eds-link-size);
  line-height: var(--eds-link-line);
  text-decoration: underline;
Copy to clipboardFailed to copy to clipboardCopied
Hover

  color: var(--eds-link-foreground--hover);
Copy to clipboardFailed to copy to clipboardCopied
Focus

  color: var(--eds-navigate-foreground--focus);
  outline-color: var(--eds-outline-fill);
  outline-offset: var(--eds-outline-margin);
  outline-style: solid;
  outline-width: var(--eds-outline-stroke);
  transition: outline .125s linear;
Copy to clipboardFailed to copy to clipboardCopied
Active

  color: var(--eds-link-foreground--active);
Copy to clipboardFailed to copy to clipboardCopied
Disabled

  color: var(--eds-link-foreground--disabled);

/*BUTTON */
Default

  align-items: center;
  background-color: var(--eds-submit-background);
  border-color: var(--eds-submit-fill);
  border-radius: var(--eds-input-radius--round);
  border-style: solid;
  border-width: var(--eds-input-stroke);
  color: var(--eds-submit-foreground);
  cursor: pointer;
  display: inline-flex;
  line-height: var(--eds-input-line);
  font-size: var(--eds-input-size);
  font-weight: var(--eds-submit-weight);
  gap: var(--eds-input-gap);
  justify-content: center;
  min-height: var(--eds-input-height);
  min-width: var(--eds-input-height);
  padding-left: var(--eds-input-padding);
  padding-right: var(--eds-input-padding);
  text-align: center;
  text-decoration: none;
Copy to clipboardFailed to copy to clipboardCopied
Hover

  background-color: var(--eds-submit-background--hover);
  color: var(--eds-submit-foreground--hover);
Copy to clipboardFailed to copy to clipboardCopied
Focus

  background-color: var(--eds-submit-background--focus);
  border-color: var(--eds-submit-background--focus);
  box-shadow: none;
  color: var(--eds-submit-foreground--focus);
  outline-color: var(--eds-outline-fill);
  outline-offset: var(--eds-outline-margin);
  outline-style: solid;
  outline-width: var(--eds-outline-stroke);
  transition: outline .125s linear;
Copy to clipboardFailed to copy to clipboardCopied
Active

  background-color: var(--eds-submit-background--active);
  box-shadow: none;
  color: var(--eds-submit-foreground--active);
Copy to clipboardFailed to copy to clipboardCopied
Disabled

  background-color: var(--eds-submit-background--disabled);
  color: var(--eds-submit-foreground--disabled);