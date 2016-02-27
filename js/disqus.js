    var disqus_config = function () {
        this.page.url = "http://blog.sampeters.net{{ page.url }}";;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = "{{ post.title }}-{{post.date}}";; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        
        s.src = '//blog-sampeters-net.disqus.com/embed.js';
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);

    })();

    var disqus_developer = 1; // Comment out when the site is live