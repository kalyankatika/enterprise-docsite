// Add section extraction filter to your existing .eleventy.js file
eleventyConfig.addFilter('extractSections', function(content, sectionNames) {
  if (!content) return {};
  
  const sections = {};
  
  // Initialize all requested sections with null
  sectionNames.forEach(name => {
    sections[name] = null;
  });
  
  // Regular expression to find sections
  // Using non-greedy matching to prevent overlapping sections
  const sectionRegex = /<!-- SECTION: (\w+) -->([\s\S]*?)<!-- ENDSECTION -->/g;
  
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    const sectionName = match[1].toLowerCase();
    const sectionContent = match[2].trim();
    
    // Only store sections that were requested
    if (sectionNames.includes(sectionName)) {
      sections[sectionName] = sectionContent;
    }
  }
  
  return sections;
});
