addEventListener(
  "fetch", event => {
      let url = new URL(event.request.url);
      url.hostname = "66.811243165.xyz";                        
      url.protocol = "https";
      let request = new Request(url, event.request);
      event.respondWith(
          fetch(request)
      )
  }
)
