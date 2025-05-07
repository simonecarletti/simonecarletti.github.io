function loadPost() {
  const hash = location.hash.substring(1); // remove the '#' symbol

  // Load a blog post
  const post = context.blogPosts[hash];

  const blogList = document.getElementById("blog-list");
  const blogArticle = document.getElementById("blog-article");
  const blogArticleContent = document.getElementById("blog-article-content");

  if (post) {
    blogList.classList.add("hidden");
    blogArticle.classList.remove("hidden");

    fetch(`posts/${hash}.md`)
      .then((res) => res.text())
      .then((md) => { 
        const html = fixCustomAttributes(marked.parse(md));
        blogArticleContent.innerHTML = html;
      });

    document.getElementById("blog-article-title").innerText = post.title;
  } 
  else {
    blogList.classList.remove("hidden");
    blogArticle.classList.add("hidden");
  }
}

/**
 * Parse custom markdown attributes
 * e.g. ![My image](img.jpg){: width="40%" }
 */
function fixCustomAttributes(html) {
  return html.replace(/<img(.*?)>\s*\{\:\s*([^}]+)\s*\}/g, (match, imgAttrs, attrString) => {
    attrString = attrString.replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    attrString = attrString.replace(/,/g, ' ');

    return `<img ${imgAttrs} ${attrString}>`;
  });
}
