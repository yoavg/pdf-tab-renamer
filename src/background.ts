
async function retitleIfNeeded(tab: chrome.tabs.Tab): Promise<void> {
  const tabDomain = new URL(tab.url).hostname;
  let newTitle: string | null = null;
  if (tabDomain === "scholar.google.com" && tab.title.includes("View article")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.title = `[Scholar] ${document.querySelector('meta[property="og:title"]').getAttribute("content")}`;
      },
    })
  }
  if (tabDomain === "arxiv.org" && tab.url.includes("/pdf/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        if (document.title !== "") return;
        fetch(tab.url.replace("/pdf/","/abs/"))
          .then((response) => response.text()
            .then((text) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}` }, 1000);
            }))
        },
      args: [tab]
    })
  }
  if (tabDomain === "aclanthology.org" && tab.url.endsWith(".pdf")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        if (document.title !== "") return;
        fetch(tab.url.replace(".pdf","/"))
          .then((response) => response.text()
            .then((text) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}` }, 1000);
            }))
        },
      args: [tab]
    })
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const link = (document.querySelector("link[rel*='icon']") as HTMLLinkElement) || document.createElement('link');
        (link as HTMLLinkElement).type = 'image/x-icon';
        (link as HTMLLinkElement).rel = 'shortcut icon';
        (link as HTMLLinkElement).href = 'https://aclanthology.org/aclicon.ico';
        document.head.appendChild(link);
      }
    });
  }
  if (tabDomain === "proceedings.mlr.press" && tab.url.endsWith(".pdf")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        if (document.title !== "") return;
        const htmlUrl = tab.url.split("/").slice(0,-1).join("/") + ".html";
        fetch(htmlUrl)
          .then((response) => response.text()
            .then((text) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}` }, 1000);
            }))
        },
      args: [tab]
    })
  }
  if (tabDomain === "www.jmlr.org" && tab.url.endsWith(".pdf")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        if (document.title !== "") return;
        const htmlUrl = tab.url.split("/").slice(0,-1).join("/").replace("/volume", "/v") + ".html";
        fetch(htmlUrl)
          .then((response) => response.text()
            .then((text) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}` }, 1000);
            }))
        },
      args: [tab]
    })
  }
  if ((tabDomain === "proceedings.neurips.cc" || tabDomain === "proceedings.nips.cc") && tab.url.endsWith(".pdf")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        if (document.title !== "") return;
        const htmlUrl = tab.url.replace("/file/", "/hash/").replace("-Paper", "-Abstract").replace(".pdf", ".html");
        fetch(htmlUrl)
          .then((response) => response.text()
            .then((text) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}` }, 1000);
            }))
        },
      args: [tab]
    })
  }
  if (tabDomain === "openreview.net" && tab.url.includes("/pdf?")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        if (document.title !== "") return;
        const htmlUrl = tab.url.replace("/pdf?", "/forum?");
        fetch(htmlUrl)
          .then((response) => response.text()
            .then((text) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}` }, 1000);
            }))
        },
      args: [tab]
    })
  }
  if (tabDomain === "openaccess.thecvf.com" && tab.url.endsWith(".pdf")) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (tab) => {
              if (document.title !== "") return;
              const htmlUrl = tab.url.replace("/papers/", "/html/").replace(".pdf", ".html");
              fetch(htmlUrl)
              .then((response) => response.text()
                    .then((text) => {
                        // wait a second to make the change stick.
                        setTimeout(() => { document.title = `[PDF] ${text.match(/<meta name="citation_title" content="(.*)">/)[1]}`; }, 1000);
                    }))
          },
          args: [tab]
      })
  }
  if (tabDomain === "ieeexplore.ieee.org" && tab.url.includes("/stamp/stamp.jsp")) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (tab) => {
              if (document.title !== "IEEE Xplore Full-Text PDF:") return;
              const docid = tab.url.match(/arnumber=([^&]+)/)[1];
              const htmlUrl = `https://ieeexplore.ieee.org/document/${docid}`;
              fetch(htmlUrl)
              .then((response) => response.text()
                    .then((text) => {
                        // wait a second to make the change stick.
                        setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}`; }, 1000);
                    }))
          },
          args: [tab]
      })
  }
  //https://www.biorxiv.org/content/10.1101/2025.01.05.631349v1
  //https://www.biorxiv.org/content/10.1101/2025.01.05.631349v1.full.pdf
  if (tabDomain === "www.biorxiv.org" && tab.url.endsWith(".pdf")) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (tab) => {
              console.log(document.title);
              if (document.title !== "") return;
              const htmlUrl = tab.url.replace(".full.pdf", "").replace(".pdf", "")
              fetch(htmlUrl)
              .then((response) => response.text()
                    .then((text) => {
                        // wait a second to make the change stick.
                        setTimeout(() => { document.title = `[PDF] ${text.match(/<title>(.*)<\/title>/)[1]}`; }, 1000);
                    }))
          },
          args: [tab]
      })
  }
  // This approach should work for pretty much any other site where the DOI is included in the URL (see #2)
  if (tabDomain === "dl.acm.org" && tab.url.includes("/doi/pdf/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tab) => {
        const doiUrl = tab.url.replace(RegExp("(?:.+)/doi/pdf/([^/]+/[^/]+)"), "https://dx.doi.org/$1");
        fetch(doiUrl, {headers: {"accept": "application/json"}})
          .then((response) => response.json()
            .then((json) => {
              // wait a second to make the change stick.
              setTimeout(() => { document.title = `[PDF] ${json.title}` }, 1000);
            }))
        },
      args: [tab]
    })
  }

}

// Listener: Checks when a new tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete" || !tab.url) return;
  retitleIfNeeded(tab);
});
