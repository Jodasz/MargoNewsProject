function showArticle(id){
  let articles = document.querySelectorAll("article[id^='elem']");

  console.log(id);

  for(let i=0;     i<articles.length; i++)
      articles[i].className="hidden"
    articles[id-1].className="show"

}