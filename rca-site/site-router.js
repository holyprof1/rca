(function () {
  var exactMap = {
    "https://rexclarkeadventures.com/category/latest-news/": "blog.html#latest",
    "https://rexclarkeadventures.com/category/latest-news/tourism-news/": "blog.html#latest",
    "https://rexclarkeadventures.com/category/latest-news/africa-tourism-news/": "blog.html#latest",
    "https://rexclarkeadventures.com/category/latest-news/airline-news/": "blog.html#aviation",
    "https://rexclarkeadventures.com/category/latest-news/aviation/": "blog.html#aviation",
    "https://rexclarkeadventures.com/category/explore-africa/": "blog.html#explore-africa",
    "https://rexclarkeadventures.com/category/adventures/": "blog.html#adventures",
    "https://rexclarkeadventures.com/category/adventures/hospitality-in-nigeria/": "blog.html#hospitality",
    "https://rexclarkeadventures.com/category/adventures/travel-tips-for-nigeria/": "blog.html#travel-tips",
    "https://rexclarkeadventures.com/category/culture/": "blog.html#culture",
    "https://rexclarkeadventures.com/category/african-culture-traditions/": "blog.html#culture",
    "https://rexclarkeadventures.com/category/festivals-in-africa/": "blog.html#festivals",
    "https://rexclarkeadventures.com/category/living-in-africa/food-in-nigeria/": "blog.html#food",
    "https://rexclarkeadventures.com/category/living-in-africa/": "blog.html#lifestyle",
    "https://rexclarkeadventures.com/category/tourism-in-nigeria/ecotourism-in-nigeria/": "blog.html#eco-tourism",
    "https://rexclarkeadventures.com/destinations/": "destinations.html",
    "https://rexclarkeadventures.com/west-africa/": "regions.html",
    "https://rexclarkeadventures.com/east-africa/": "regions.html",
    "https://rexclarkeadventures.com/north-africa/": "regions.html",
    "https://rexclarkeadventures.com/central-africa/": "regions.html",
    "https://rexclarkeadventures.com/southern-africa/": "regions.html",
    "https://rexclarkeadventures.com/african-islands/": "regions.html",
    "https://rexclarkeadventures.com/privacy-policy/": "privacy-policy.html",
    "https://rexclarkeadventures.com/eswatini-tourism-boom/": "article-eswatini.html",
    "https://rexclarkeadventures.com/cape-town-airport-skytrax-award/": "story.html?post=cape-town-airport",
    "https://rexclarkeadventures.com/park-hyatt-johannesburg-time/": "story.html?post=park-hyatt-johannesburg",
    "https://rexclarkeadventures.com/bbc-kingdom-zambia-south-luangwa/": "story.html?post=bbc-kingdom-zambia",
    "https://rexclarkeadventures.com/ghana-e-visa-tourism/": "story.html?post=ghana-e-visa",
    "https://rexclarkeadventures.com/ethiopia-hospitality-hackathon/": "story.html?post=ethiopia-hackathon",
    "https://rexclarkeadventures.com/un-tourism-commission-africa-seychelles/": "story.html?post=un-tourism-seychelles",
    "https://rexclarkeadventures.com/best-adventures-in-africa/": "story.html?post=best-adventures-africa",
    "https://rexclarkeadventures.com/african-fabrics-identity-adire-kente-kitenge/": "story.html?post=african-fabrics-identity",
    "https://rexclarkeadventures.com/rabat-mice-tourism/": "story.html?post=rabat-mice-tourism",
    "https://rexclarkeadventures.com/congo-basin-deforestation-eco-tourism/": "story.html?post=congo-basin-report",
    "https://rexclarkeadventures.com/accra-city-guide-ghana/": "story.html?post=accra-city-guide",
    "https://rexclarkeadventures.com/mali-empire-west-africa/": "story.html?post=mali-empire-legacy",
    "https://rexclarkeadventures.com/ifa-divination-african-diaspora/": "story.html?post=ifa-diaspora",
    "https://rexclarkeadventures.com/eco-tourism-in-africa/": "story.html?post=eco-tourism-africa",
    "https://rexclarkeadventures.com/kuriftu-resorts-ride-ethiopia-tourism/": "story.html?post=kuriftu-resorts",
    "https://rexclarkeadventures.com/rabat-mice-tourism-morocco/": "story.html?post=rabat-mice-tourism",
    "https://rexclarkeadventures.com/author/victor/": "team.html",
    "/category/latest-news/": "blog.html#latest",
    "/category/culture/": "blog.html#culture",
    "/category/adventures/": "blog.html#adventures",
    "/category/explore-africa/": "blog.html#explore-africa",
    "/category/african-culture-traditions/": "blog.html#culture",
    "/category/festivals-in-africa/": "blog.html#festivals",
    "/category/latest-news/tourism-news/": "blog.html#latest",
    "/category/living-in-africa/": "blog.html#lifestyle",
    "/category/living-in-africa/food-in-nigeria/": "blog.html#food",
    "/category/tourism-in-nigeria/ecotourism-in-nigeria/": "blog.html#eco-tourism",
    "/category/adventures/travel-tips-for-nigeria/": "blog.html#travel-tips",
    "/destinations/": "destinations.html",
    "/privacy-policy/": "privacy-policy.html"
  };

  var destinationSlugs = [
    "south-africa", "kenya", "nigeria", "morocco", "ethiopia", "ghana", "tanzania",
    "uganda", "rwanda", "zambia", "zimbabwe", "botswana", "namibia", "mozambique",
    "egypt", "tunisia", "algeria", "libya", "gabon", "congo", "cameroon", "drc",
    "equatorial-guinea", "senegal", "ivory-coast", "madagascar", "seychelles",
    "mauritius", "zanzibar", "comoros"
  ];

  var titleMap = [
    ["Aquamania Jungle Park", "story.html?post=aquamania-jungle-park"],
    ["BBC 'Kingdom' Documentary", "story.html?post=bbc-kingdom-zambia"],
    ["Cape Town Airport Wins", "story.html?post=cape-town-airport"],
    ["Mali Empire", "story.html?post=mali-empire-legacy"],
    ["African Fabrics as Identity", "story.html?post=african-fabrics-identity"],
    ["Divination", "story.html?post=ifa-diaspora"],
    ["Spice Trail", "story.html?post=trans-saharan-spice-trail"],
    ["Best Adventures in Africa", "story.html?post=best-adventures-africa"],
    ["Eco-Tourism in Africa", "story.html?post=eco-tourism-africa"],
    ["Planted Forests", "story.html?post=south-africa-forests"]
  ];

  function normalize(url) {
    if (!url) return url;
    return url.replace(/\/+$/, "/");
  }

  function mapDestination(url) {
    for (var i = 0; i < destinationSlugs.length; i += 1) {
      var slug = destinationSlugs[i];
      var suffix = "/destinations/" + slug + "/";
      if (url.indexOf(suffix) !== -1) {
        return "destinations.html#" + slug;
      }
    }
    return null;
  }

  function localHrefFor(rawHref) {
    if (!rawHref || rawHref.indexOf("mailto:") === 0 || rawHref.indexOf("tel:") === 0 || rawHref.indexOf("javascript:") === 0) {
      return null;
    }

    var href = normalize(rawHref);
    if (exactMap[href]) {
      return exactMap[href];
    }

    var destinationHref = mapDestination(href);
    if (destinationHref) {
      return destinationHref;
    }

    return null;
  }

  function rewriteAnchor(anchor) {
    var href = anchor.getAttribute("href");
    var mapped = localHrefFor(href);
    if (!mapped && href === "article-eswatini.html") {
      var text = anchor.textContent || "";
      for (var i = 0; i < titleMap.length; i += 1) {
        if (text.indexOf(titleMap[i][0]) !== -1) {
          mapped = titleMap[i][1];
          break;
        }
      }
    }

    if (mapped) {
      anchor.setAttribute("href", mapped);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var anchors = document.querySelectorAll("a[href]");
    anchors.forEach(rewriteAnchor);
  });
})();
