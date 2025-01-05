
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
}

// Listener: Checks when a new tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete" || !tab.url) return;
  retitleIfNeeded(tab);
});
