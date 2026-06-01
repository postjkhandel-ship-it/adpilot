export default function sitemap() {
  return [
    {
      url: "https://adpilot.dk",
      lastModified: new Date(),
      priority: 1
    },
    {
      url: "https://adpilot.dk/dashboard",
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: "https://adpilot.dk/handelsbetingelser",
      lastModified: new Date(),
      priority: 0.5
    },
    {
      url: "https://adpilot.dk/privatlivspolitik",
      lastModified: new Date(),
      priority: 0.5
    }
  ];
}
