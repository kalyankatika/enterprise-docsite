module.exports = {
  top: [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "Design System",
      url: "/design-system/",
      children: [
        {
          label: "Foundations",
          url: "/design-system/foundations/",
          children: [
            { label: "Colors", url: "/design-system/foundations/colors/" },
            { label: "Typography", url: "/design-system/foundations/typography/" },
            { label: "Spacing", url: "/design-system/foundations/spacing/" },
            { label: "Grid", url: "/design-system/foundations/grid/" },
            { label: "Elevation", url: "/design-system/foundations/elevation/" }
          ]
        },
        {
          label: "Brand",
          url: "/design-system/brand/",
          children: [
            { label: "Values", url: "/design-system/brand/values/" },
            { label: "Principles", url: "/design-system/brand/principles/" },
            { label: "Logo", url: "/design-system/brand/logo/" }
          ]
        }
      ]
    },
    {
      label: "Components",
      url: "/components/",
      children: [
        {
          label: "Android Components",
          url: "/components/android/",
          children: []
        },
        {
          label: "iOS Components",
          url: "/components/ios/",
          children: []
        },
        {
          label: "Web Components",
          url: "/components/web/",
          children: [
            { label: "Accordion", url: "/components/accordion/" },
            { label: "Alert", url: "/components/alert/" },
            { label: "Button", url: "/components/button/" }
          ]
        }
      ]
    },
    {
      label: "Resources",
      url: "/resources/",
      children: [
        { label: "Templates", url: "/resources/templates/" },
        { label: "Design Tokens", url: "/resources/design-tokens/" },
        { label: "Downloads", url: "/resources/downloads/" }
      ]
    },
    {
      label: "Support",
      url: "/support/",
      children: [
        { label: "FAQ", url: "/support/faq/" },
        { label: "Contact", url: "/support/contact/" },
        { label: "Report Bug", url: "/support/report-bug/" }
      ]
    }
  ]
};
