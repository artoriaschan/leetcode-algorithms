/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
 * 思路:
 *  BFS
 */
// eslint-disable-next-line no-unused-vars
function crawl(startUrl, htmlParser) {
  let queue = [];
  const urlVisited = new Set();
  urlVisited.add(startUrl);
  queue.push(startUrl);
  while (queue.length) {
    let currentUrl = queue.shift();
    let nextUrls = htmlParser.getUrls(currentUrl);
    for (let nextUrl of nextUrls) {
      if (!urlVisited.has(nextUrl) && getHostName(nextUrl) === getHostName(currentUrl)) {
        urlVisited.add(nextUrl);
        queue.push(nextUrl);
      }
    }
  }
  let ans = [];
  let startHostName = getHostName(startUrl);
  for (let url of urlVisited) {
    if (startHostName === getHostName(url)) {
      ans.push(url);
    }
  }

  return ans;
}
function getHostName(url) {
  url = url.substring(7);
  if (url.indexOf("/") > -1) {
    let end = url.indexOf("/");
    return url.substring(0, end);
  }
  return url;
}
