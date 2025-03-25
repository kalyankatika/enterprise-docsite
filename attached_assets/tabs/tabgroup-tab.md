---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Tab Group
  key: web-tab-group
  parent: web-components
  order: 1
  channel: web
description: A Tab Group provides view-switching between blocks of related content in a shared section of a page or inside a smaller container.
aliases: Tabs, Tab panels, Content switcher
tags: web
name: FDSTabGroup
status: Production
tokens: tab-group
useTabs: true
---

<!-- SECTION: examples -->
## Default

A Tab Group is a collective term referring to the parent component, `<eds-tab-group>`, and its children, `<eds-tab>` and `<eds-tab-panel>`.

<div class="example">
  <eds-tab-group eds-aria-label="Default example">
    <eds-tab slot="tab" eds-id="tab-a1">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b1">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c1">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a1">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b1">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c1">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

```html
<eds-tab-group eds-aria-label="Default example">
  <eds-tab slot="tab" eds-id="tab-a1">Alfa</eds-tab>
  <eds-tab slot="tab" eds-id="tab-b1">Bravo</eds-tab>
  <eds-tab slot="tab" eds-id="tab-c1">Charlie</eds-tab>
  <eds-tab-panel eds-aria-labelledby="tab-a1">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
  <eds-tab-panel eds-aria-labelledby="tab-b1">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
  <eds-tab-panel eds-aria-labelledby="tab-c1">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
</eds-tab-group>
```

## Border

Add to create greater delineation between the Tabs and the content within the Tab Panel.

<div class="example">
  <eds-tab-group eds-border eds-aria-label="Border example">
    <eds-tab slot="tab" eds-id="tab-a2">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b2">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c2">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a2">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b2">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c2">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

```html
<eds-tab-group eds-border> ... </eds-tab-group>
```

## Alignment

### Left (Default)

<div class="example">
  <eds-tab-group eds-border eds-aria-label="Left alignment example">
    <eds-tab slot="tab" eds-id="tab-a3">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b3">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c3">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a3">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b3">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c3">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

```html
<eds-tab-group eds-border eds-aria-label="Left alignment example"> ... </eds-tab-group>
```

### Center

<div class="example">
  <eds-tab-group eds-border eds-tabs-align="center" eds-aria-label="Center alignment example">
    <eds-tab slot="tab" eds-id="tab-a4">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b4">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c4">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a4">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b4">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c4">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

```html
<eds-tab-group eds-border eds-tabs-align="center" eds-aria-label="Center alignment example"> ... </eds-tab-group>
```

## Overflow

The overflow indicator will appear automatically as the last Tab in the group when the number of Tabs exceeds the horizontal space available.

<div class="example">
  <eds-tab-group eds-border eds-aria-label="Overflow example" id="overflow-tab-group">
    <eds-tab slot="tab" eds-id="tab-a5">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b5">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c5">Charlie</eds-tab>
    <eds-tab slot="tab" eds-id="tab-d5">Delta</eds-tab>
    <eds-tab slot="tab" eds-id="tab-e5">Echo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-f5">Foxtrot</eds-tab>
    <eds-tab slot="tab" eds-id="tab-g5">Golf</eds-tab>
    <eds-tab slot="tab" eds-id="tab-h5">Hotel</eds-tab>
    <eds-tab slot="tab" eds-id="tab-i5">India</eds-tab>
    <eds-tab slot="tab" eds-id="tab-j5">Juliett</eds-tab>
    <eds-tab slot="tab" eds-id="tab-k5">Kilo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-l5">Lima</eds-tab>
    <eds-tab slot="tab" eds-id="tab-m5">Mike</eds-tab>
    <eds-tab eds-selected slot="tab" eds-id="tab-n5">November</eds-tab>
    <eds-tab slot="tab" eds-id="tab-o5">Oscar</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Alfa
        </h3>

        The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-b5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Bravo
        </h3>

        To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-c5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Charlie
        </h3>

        The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-d5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Delta
        </h3>

        Strict adherence to the prescribed spelling words—including the apparently misspelled "Alfa" and "Juliett"—is required in order to avoid the problems of confusion that the spelling alphabet is designed to overcome.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-e5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Echo
        </h3>

        After the phonetic alphabet was developed by the International Civil Aviation Organization it was adopted by many other international and national organizations, including the International Telecommunication Union, the International Maritime Organization, the United States Federal Government, and the Federal Aviation Administration (FAA).
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-f5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Foxtrot
        </h3>

        The same alphabetic code words are used by all agencies, but each agency chooses one of two different sets of numeric code words. NATO uses the regular English numeric words (Zero, One, with some alternative pronunciations), whereas the ITU (beginning on 1 April 1969) and the IMO define compound numeric words (Nadazero, Unaone, Bissotwo…). 
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-g5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Golf
        </h3>

        A spelling alphabet is used to spell parts of a message containing letters and numbers to avoid confusion, because many letters sound similar, for instance "n" and "m" or "f" and "s"; the potential for confusion increases if static or other interference is present.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-h5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Hotel
        </h3>

        For instance the message "proceed to map grid DH98" could be transmitted as "proceed to map grid Delta-Hotel-Niner-Ait". Using "Delta" instead of "D" avoids confusion between "DH98" and "BH98" or "TH98". The unusual pronunciation of certain numbers was designed to reduce confusion as well.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-i5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          India
        </h3>

        In addition to the traditional military usage, civilian industry uses the alphabet to avoid similar problems in the transmission of messages by telephone systems. For example, it is often used in the retail industry where customer or site details are spoken by telephone (to authorize a credit agreement or confirm stock codes), although ad-hoc coding is often used in that instance.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-j5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Juliett
        </h3>

        It has been used often by information technology workers to communicate serial or reference codes (which are often very long) or other specialised information by voice.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-k5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Kilo
        </h3>

        Most major airlines use the alphabet to communicate passenger name records (PNRs) internally, and in some cases, with customers. It is often used in a medical context as well, to avoid confusion when transmitting information.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-l5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Lima
        </h3>

        Several letter codes and abbreviations using the spelling alphabet have become well-known, such as Bravo Zulu (letter code BZ) for "well done", Checkpoint Charlie (Checkpoint C) in Berlin, and Zulu Time for Greenwich Mean Time or Coordinated Universal Time.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-m5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Mike
        </h3>

        The final choice of code words for the letters of the alphabet and for the digits was made after hundreds of thousands of comprehension tests involving 31 nationalities. The qualifying feature was the likelihood of a code word being understood in the context of others. For example, <em>football</em> has a higher chance of being understood than <em>foxtrot</em> in isolation, but <em>foxtrot</em> is superior in extended communication.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-n5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          November
        </h3>

        The pronunciation of the code words varies according to the language habits of the speaker. To eliminate wide variations in pronunciation, recordings and posters illustrating the pronunciation desired by the ICAO are available. However, there are still differences in pronunciation between the ICAO and other agencies, and the ICAO has conflicting Latin-alphabet and International Phonetic Alphabet (IPA) transcriptions. Also, although all codes for the letters of the alphabet are English words, they are not in general given English pronunciations.
      </eds-content-block>
    </eds-tab-panel>
    
    <eds-tab-panel eds-aria-labelledby="tab-o5">
      <eds-content-block eds-body-full-width eds-align="left">
        <h3
          slot="heading"
          class="eds-content-block__heading eds-content-block__heading--level-5"
        >
          Oscar
        </h3>

        Pronunciations are somewhat uncertain because the agencies, while ostensibly using the same pronunciations, give different transcriptions, which are often inconsistent from letter to letter. The ICAO gives a different pronunciation for IPA transcription and for respelling, and the FAA also gives different pronunciations depending on the publication consulted, the FAA Aeronautical Information Manual (§ 4-2-7), the FAA Flight Services manual (§ 14.1.5), or the ATC manual (§ 2-4-16). The Alliance for Telecommunications Industry Solutions (ATIS) gives English spellings, but does not give pronunciations or numbers.
      </eds-content-block>
    </eds-tab-panel>
  </eds-tab-group>
</div>

<script>
;(function(){
    /**
     *  Work around for overflowing tabs
     */
    var tabGroup = document.getElementById('overflow-tab-group');
    tabGroup.addEventListener("eds-tab-selected", function(){
        tabGroup.recalculateTabs();
    })
})();
</script>

## Sizes

<div class="example">
  <eds-tab-group eds-size="small" eds-aria-label="Small example">
    <eds-tab slot="tab" eds-id="tab-a6">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b6">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c6">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a6">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b6">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c6">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

<div class="example">
  <eds-tab-group eds-aria-label="Medium example">
    <eds-tab slot="tab" eds-id="tab-a7">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b7">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c7">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a7">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b7">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c7">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

<div class="example">
  <eds-tab-group eds-size="large" eds-aria-label="Large example">
    <eds-tab slot="tab" eds-id="tab-a8">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="tab-b8">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="tab-c8">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="tab-a8">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-b8">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="tab-c8">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

```html
<!-- SMALL -->
<eds-tab-group eds-size="small" eds-aria-label="Small example"> ... </eds-tab-group>

<!-- MEDIUM -->
<eds-tab-group eds-aria-label="Medium example"> ... </eds-tab-group>

<!-- LARGE -->
<eds-tab-group eds-size="large" eds-aria-label="Large example"> ... </eds-tab-group>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/content/tabs/#visual-design-specifications) for this component.

## Use when
Presenting controls that change the display 2 or more blocks of related content within a given space. 

## Don't use when
Presenting controls that navigate to other pages. Instead, use [Links](/components/link/link.html).

## Anatomy

1. Tab – selected (required)
2. Tab – unselected (required)
3. Tab Panel (required)
4. Overflow
5. Border

## Visual style

### Selected state
- Always show one Tab in a selected state along with its associated Tab Panel.
- The first Tab is selected by default unless otherwise designated.

### Background
- The Tab component background is transparent by default.
- The Tab component background may be set to white.

## Behavior

### Switching between content views
- A Tab's associated Tab Panel will show immediately upon selection with no animation.
- The width of the Tab Panel is 100% of its parent container and is not affected by the content it contains.
- The height of the Tab Panel will adjust according to the amount of content it contains.

### Overflow
While the overflow control resembles a Tab component, it behaves as a conventional `<select>` and provides a menu of additional items.

### Keyboard interaction
- DOWN ARROW or LEFT ARROW selects the previous Tab. 
- UP ARROW or RIGHT ARROW selects the next Tab.
- HOME selects the first Tab.
- END selects the last Tab.
- SPACEBAR selects the focused Tab.
- ENTER selects the focused Tab.

## Content

### Tab text
- Keep the Tab text as short and clear as possible while giving users enough information to self-select.
- Limit the Tab text to 30–40 characters.
- Balance the text between Tabs by using a similar grammatical structure.
- Always use categorical terms for Tab text that implies a relationship within the Tab Group (e.g., "In-network, Out-of-network" or "YTD, 1-year, 3-year, 5-year.") 
- Set text in sentence case.

### Tab component order
Always place Tab components of greater importance before those of lesser importance to ensure their visibility in all viewports.

### Tab Panel content
- The content of all the associated Tab Panels must have an implied relationship.
- Avoid methods that would introduce scrolling within the Tab Panel. The panel's height should adapt to its content.
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes

The attributes detailed below are categorized by the 3 components that make up a complete Tab Group, `<eds-tab-group>`, `<eds-tab>`, and `<eds-tab-panel>`.

### Tab Group

| Attribute                      | Type    | Validation                                                                                           | Default        | Description                                                                                                                                                                                                                                       |
| ------------------------------ | ------- | ---------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eds-aria-label`               | string  | --                                                                                                   | --             | A string that will be set as the `aria-label` attribute on the element with role `tablist`. <br><br> Used as an alternative to `eds-aria-labelledby` to provide a non-visual label for the Tab Group.                                             |
| `eds-aria-labelledby`          | string  | --                                                                                                   | --             | A string of `id`s separated by spaces that will be set as the `aria-labelledby` attribute on the element with role `tablist`. <br><br> Used as an alternative to `eds-aria-label` to associate the Tab Group with an element acting as its label. |
| `eds-border`                   | boolean | Anything other than empty string, `true`, or `eds-border` will be treated as `false`.                | `false`        | Renders a border below the Tab components and above the Tab Panel components.                                                                                                                                                                     |
| `eds-selected-tab-id`          | string  | --                                                                                                   | --             | Selects a Tab component by its `eds-id` value.                                                                                                                                                                                                    |
| `eds-size`                     | string  | One of: `small`, `medium`, or `large`                                                                | `medium`       | Determines the overall size of the Tab text.                                                                                                                                                                                                      |
| `eds-tabs-align`               | string  | One of: `left` or `center`                                                                           | `left`         | Determines the alignment of Tab components within the Tab Group.                                                                                                                                                                                  |
| `eds-tabs-white-background`    | boolean | Anything other than empty string, `true`, or `eds-tabs-white-background` will be treated as `false`. | `false`        | Applies a white background to all Tab components. By default, Tab components have a transparent background.                                                                                                                                       |
| `eds-truncate-menu-aria-label` | string  | --                                                                                                   | `More options` | A string that will be set as the `aria-label` attribute on the truncate menu's select element                                                                                                                                                     |

### Tab

| Attribute           | Type    | Validation                                                                                | Default                                                                                                                   | Description                                                                                                                                                                                 |
| ------------------- | ------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eds-aria-controls` | string  | --                                                                                        | Set automatically to the `eds-id` attribute of the associated Tab Panel.                                                  | A string that will be set as the `aria-controls` attribute.                                                                                                                                 |
| `eds-id` (required) | string  | --                                                                                        | --                                                                                                                        | A string that will be set as the `id` attribute.<br><br> This attribute is required to associate a Tab with its Tab Panel component using the Tab Panel's `eds-aria-labelledby` attribute.  |
| `eds-selected`      | boolean | Anything other than empty string, `true`, or `eds-selected` will be treated as `false`.   | `false` <br><br> The Tab Group component will automatically select the first Tab component on load if no Tab is selected. | Selects the Tab and displays its associated Tab Panel.<br><br>Controls the value of the `aria-selected` attribute.                                                                          |
| `eds-wrap-label`    | boolean | Anything other than empty string, `true`, or `eds-wrap-label` will be treated as `false`. | `false`                                                                                                                   | Applies a maximum width of `18.5rem` to the Tab, allowing the Tab's text to wrap to multiple lines.                                                                                         |

### Tab Panel

| Attribute                        | Type    | Validation | Default                     | Description                                                                                                                                                                                                                                      |
| ------------------------------   | ------- | ---------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `eds-aria-labelledby` (required) | string  | --         | --                          | A string that will be used as the value for the `aria-labelledby` attribute and is used to associate the Tab Panel with its Tab.<br><br>This attribute's value should be equivalent to the value of the `eds-id` attribute of the Tab component. |
| `eds-id`                         | string  | --         | A randomly generated value. | A string that will be set as the `id` attribute.<br><br>This attribute is referenced by the Tab component to improve accessibility.                                                                                                              |
| `eds-visible`                    | boolean | --         | `false`                     | Displays the panel and its contents.<br><br>Controls the value of the `aria-hidden` attribute.<br><br>The value of `eds-visible` is controlled automatically when the corresponding Tab component is selected or deselected.                     |    

### Slots

The slots detailed below are categorized by the 3 components that make up a complete Tabs Group, `<eds-tab-group>`, `<eds-tab>`, and `<eds-tab-panel>`.

### Tab Group

| Name      | Default content | Description                                                                                                               |
| --------- | --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `default` | --              | Use this slot to position Tab Panel components and have them automatically linked with their corresponding Tab component. |
| `tab`     | --              | Use this slot to position Tab components and have them automatically linked with their corresponding Tab Panel component. |

### Tab
| Name      | Default content | Description                                                                                        |
| --------- | --------------- | -------------------------------------------------------------------------------------------------- |
| `default` | --              | The plain text for the Tab component. Do not use HTML content or other media (images, icons, etc.).|

### Tab Panel
| Name      | Default content | Description                                                                                                       |
| --------- | --------------- | ----------------------------------------------------------------------------------------------------------------- |
| `default` | --              | The content to be displayed when the corresponding Tab component is selected. Any valid HTML content can be used. |

### Events

The events detailed below are categorized by the 3 components that make up a complete Tab Group, `<eds-tab-group>`, `<eds-tab>`, and `<eds-tab-panel>`.

### Tab Group

<strong>eds-tab-selected</strong>
- Triggered when the selected Tab within `<eds-tab-group>` changes. Includes the following data along with the event:

```javascript
{
  detail: {
    selectedTab,
    selectedTabPanel
  }
}
```

- `selectedTab` is the DOM node of the selected Tab component.
- `selectedTabPanel` is the DOM node of the selected Tab Panel component.
- This event is fired on the `<eds-tab-group>` element. 
- Event listener example:

```html
<eds-tab-group id="tab-selected-example">
  <eds-tab slot="tab" eds-id="tab-a1">Alfa</eds-tab>
  <eds-tab slot="tab" eds-id="tab-b1">Bravo</eds-tab>
  <eds-tab slot="tab" eds-id="tab-c1">Charlie</eds-tab>
  <eds-tab-panel eds-aria-labelledby="tab-a1">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
  <eds-tab-panel eds-aria-labelledby="tab-b1">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
  <eds-tab-panel eds-aria-labelledby="tab-c1">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
</eds-tab-group>
<script>
  const tabGroup = document.querySelector('#tab-selected-example');
  tabGroup.addEventListener('eds-tab-selected', (e) => {
    const selectedTab = e.detail.selectedTab;
    console.log(`Selected tab with id ${selectedTab.edsId}`);

    const selectedTabPanel = e.detail.selectedTabPanel;
    console.log(`Selected tab panel ${selectedTabPanel}`);
  });
</script>
```

### Tab
The Tab component does not emit any public, custom events. 

### Tab Panel
The Tab Panel component does not emit any public, custom events. 

### Methods

The methods detailed below are categorized by the 3 components that make up a complete Tabs set, `<eds-tab-group>`, `<eds-tab>`, and `<eds-tab-panel>`.

### Tab Group

<strong>selectTab(tab: edsTab): void</strong>
- Use `selectTab(tab: edsTab): void` to programmatically change the selected tab.
- The argument must be a Tab component.

```javascript
// Select a Tab Group component with an id of "my-tab-group"
const tabGroup = document.getElementById("my-tab-group");

// Select the Tab component by its eds-id
const tabFour = document.querySelector("[eds-id=tab-four]");

// Change the selected tab to tab four
tabGroup.selectTab(tabFour);
```

<strong>getSelectedTab(): edsTab</strong>
Use `getSelectedTab()` to retrieve the DOM node of the currently selected tab.

```javascript
const tabGroup = document.getElementById("my-tab-group");
const selectedTab = tabGroup.getSelectedTab(); // <eds-tab eds-selected></eds-tab>
```

<strong>getSelectedTabPanel(): edsTabPanel</strong>
Use `getSelectedTabPanel()` to retrieve the DOM node of the currently selected tab panel.

```javascript
const tabGroup = document.getElementById("my-tab-group");
const selectedTabPanel = tabGroup.getSelectedTabPanel(); // <eds-tab-panel></eds-tab-panel>
```

<strong>recalculateTabs(): void</strong>
Use `recalculateTabs()` to force a recalculation of the tab counts and truncation.  This is useful when the component lifecycle fails to calculate the width of the tabs and does not truncate the overflowing tabs correctly. See [Known issues](#known-issues)

```javascript
const tabGroup = document.getElementById("my-tab-group");
// force a re-calc of the tab truncation
tabGroup.recalculateTabs();
```

### Tab
The Tab component does not implement any public methods.

### Tab Panel
The Tab Panel component does not implement any public methods.

### Namespacing

#### Web Component
```html
<eds3-tab-group eds-border>
    <eds3-tab slot="tab" eds-id="tab-a5">...</eds3-tab>
    <eds3-tab-panel eds-aria-labelledby="tab-a5">...</eds3-tab-panel>
</eds3-tab-group>
```

#### HTML/CSS
```html
<div class="eds3-tab-group-root eds-tab-group--border">
    <div class="eds-tab-group__tabs">
        <div class="eds3-tab-root eds-tab--selected">...</div>
    </div>
    <div class="eds-tab-group__tab-panels">
        <div class="eds3-tab-panel-root eds-tab-panel--visible">...</div>
    </div>
</div>
```

### Import Reference

| Import                                                                                        | Required                                    |
| --------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `import { edsTab } from '@xyz-ap153177/apex-kit';`                                          | Yes                                         |
| `import { edsTabGroup } from '@xyz-ap153177/apex-kit';`                                     | Yes                                         |
| `import { edsTabPanel } from '@xyz-ap153177/apex-kit';`                                     | Yes                                         |
| `import { injectSpriteSheet } from '@xyz-ap153177/apex-kit';`                               | Yes, unless using `injectCustomSpriteSheet` |
| `import { injectCustomSpriteSheet, ICON_NAV_OVERFLOW_HORIZONTAL } from '@xyz-ap153177/apex-kit';` | Yes, unless using `injectSpriteSheet`       |

## Known issues

### Automatic truncation of overflowing tabs
In some cases, including `eds-tab-group` nested inside of a `eds-tab-panel`, eds-tab-group will not automatically truncate the overflowing tabs.  
This can happen when the component mis-calculates it's own width during the component lifecycle.  
This can typically be remedied by triggering a recalculation of the tab widths when a tab is selected.

```javascript
/**
 *  Work around for overflowing tabs
 */
var tabGroup = document.getElementById('parent-tab-group');
tabGroup.addEventListener("eds-tab-selected", function(e){
    // get the selected tab panel reference
    const selectedTabPanel = e.detail.selectedTabPanel;
    // get a reference to the child tab group
    const childTabGroup = selectedTabPanel.querySelector('#child-tab-group');
    // force a recalc if the child tab group exists
    if(childTabGroup){
      childTabGroup.recalculateTabs(); // force a recalc
    }
})
```
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

### Headings
Always associate the Tab Group with a heading. The heading can be visible or hidden.

### Associating the Tab Group with a visible heading
Use the `eds-aria-labelledby` attribute to associate a Tab Group with a visible heading.

<div class="example">
  <eds-content-block eds-align="left" eds-body-full-width>
    <h3 slot="heading"
        id="my-visible-heading"
        class="eds-content-block__heading eds-content-block__heading--level-2"
    >My visible heading</h3>

    <eds-tab-group eds-aria-labelledby="my-visible-heading" eds-border>
        <eds-tab slot="tab" eds-id="a11y-tab-a1">Alfa</eds-tab>
        <eds-tab slot="tab" eds-id="a11y-tab-b1">Bravo</eds-tab>
        <eds-tab slot="tab" eds-id="a11y-tab-c1">Charlie</eds-tab>
        <eds-tab-panel eds-aria-labelledby="a11y-tab-a1">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
        <eds-tab-panel eds-aria-labelledby="a11y-tab-b1">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
        <eds-tab-panel eds-aria-labelledby="a11y-tab-c1">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
    </eds-tab-group>
  </eds-content-block>
</div>

### Associating the Tab Group with a hidden heading
Use the `eds-aria-label` attribute to associate a Tab Group with a heading when none is visible.

<div class="example">
  <eds-tab-group eds-aria-label="My hidden heading">
    <eds-tab slot="tab" eds-id="a11y-tab-a1">Alfa</eds-tab>
    <eds-tab slot="tab" eds-id="a11y-tab-b1">Bravo</eds-tab>
    <eds-tab slot="tab" eds-id="a11y-tab-c1">Charlie</eds-tab>
    <eds-tab-panel eds-aria-labelledby="a11y-tab-a1">The International Radiotelephony Spelling Alphabet, commonly known as the NATO phonetic alphabet or the ICAO phonetic alphabet, is the most widely used radiotelephone spelling alphabet.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="a11y-tab-b1">To create the alphabet, the International Civil Aviation Organization (ICAO) assigned codewords acrophonically to the letters of the English alphabet, so that letters and numbers would have distinct names that would be most easily understood by those who exchange voice messages by radio or telephone, regardless of language differences or the quality of the communication channel.</eds-tab-panel>
    <eds-tab-panel eds-aria-labelledby="a11y-tab-c1">The 26 code words in the spelling alphabet are assigned to the 26 letters of the English alphabet in alphabetical order as follows: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</eds-tab-panel>
  </eds-tab-group>
</div>

### ARIA Roles and Attributes

The Tab Group component uses the following ARIA roles and attributes:

- `role="tablist"`: Applied to the container of tabs
- `role="tab"`: Applied to each tab element
- `role="tabpanel"`: Applied to each panel element
- `aria-selected="true"`: Applied to the currently selected tab
- `aria-controls`: Associates a tab with its panel
- `aria-labelledby`: Associates a panel with its tab

### Keyboard Navigation

| Key | Function |
| --- | -------- |
| `Tab` | Moves focus to the active tab |
| `Left/Right Arrow` | Moves between tabs |
| `Space/Enter` | Activates the focused tab |
| `Home` | Moves focus to the first tab |
| `End` | Moves focus to the last tab |

### Resources
For more information, see [accessibility guidance](http://accessibility.xyz.com/guide/example/tabs/).
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Tab Group

A Tab Group provides view-switching between blocks of related content in a shared section of a page or inside a smaller container.
