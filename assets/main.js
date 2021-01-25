window.onload = function() {
    var items = document.querySelectorAll('ul li')

    for (var index = 0; index < items.length; index++) {
        var item = items[index];
        
        item.addEventListener('click', function(e) {
            if (e.target === this) {
                var list = this.querySelector('.info')

                if(list) {
                    list.classList.toggle('is-visible')
                } 
            }
        })
    }

    document.addEventListener('click', function(event) {
        var target = event.path ? event.path[0] : event.target;

        if(target.origin && target.origin !== window.location.origin) {
            target.setAttribute('target', '_blank');
            return;
        }
    })
    
    // modal
    var modal = document.getElementById("myModal"),
        imgs = document.querySelectorAll('img'),
        modalImg = document.querySelector('#modalImg'),
        closeBtn = document.querySelector('.close');

    for (var index = 0; index < imgs.length; index++) {
        var img = imgs[index];

        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        })
    }  

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    })
}