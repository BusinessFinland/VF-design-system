# Share buttons


```html

<div class="vf-example-block" style="height: 200px; width: 200px;">
                <span class="icon-twitter"></span>


    <ul class="vf-share-buttons">
        <li>
            <a href="javascript:fbShare(null, 'VisitFinland.com', 520, 350)">
                <span class="icon-facebook"></span>
            </a>
        </li>
        <li>
            <a href="javascript:twitterShare(null, 'VisitFinland.com', 520, 350, 'The Official Travel Guide of Finland')">
                <span class="icon-twitter"></span>
            </a>
        </li>
        <li>
            <a href="javascript:weiboShare(null, 'VisitFinland.com', 520, 350, 'The Official Travel Guide of Finland')">
                <span class="icon-weibo"></span>
            </a>
        </li>
        <li>
            <a href="javascript:vkShare(null, 'VisitFinland.com', 520, 350, 'The Official Travel Guide of Finland')">
                <span class="icon-vk"></span>
            </a>
        </li>
        <li>
            <a href="javascript:pinShare()">
                <span class="icon-pinterest-round"></span>
            </a>
        </li>
    </ul>
</div>
```

```html
<script>
  fbShare = function(url, title, winWidth, winHeight) {
    url = url || document.location.href;
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&p[title]=' + encodeURIComponent(title), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
  };
  
  twitterShare = function(url, title, winWidth, winHeight, sharetext) {
    url = url || document.location.href;
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(sharetext), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
  };
  
  weiboShare = function(url, title, winWidth, winHeight, imageUrl) {
    url = url || document.location.href;
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent(url) + '&appkey=&title=' + encodeURIComponent(title) + '&pic=' + encodeURIComponent(imageUrl) + '&ralateUid=&language=zh_cn', 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
  };
  
  vkShare = function(url, title, winWidth, winHeight) {
    url = url || document.location.href;
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://vkontakte.ru/share.php?url=' + encodeURIComponent(url), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
  };
  
  pinShare = function() {
    var e = document.createElement('script');
    e.setAttribute('type','text/javascript');
    e.setAttribute('charset','UTF-8');
    e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
    document.body.appendChild(e);
  };
</script>
```