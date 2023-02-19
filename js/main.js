const showMenu = document.getElementById('show-menu');
const hideMenu = document.getElementById('hide-menu');
const resMenu = document.querySelector('.responsive-menu-wrap');
const resMenuOptions = document.querySelectorAll('.responsive-menu-option');
const resMenuTitle = document.querySelector('.responsive-menu-title');
const resMenuBack = document.querySelectorAll('.responsive-menu-back');
const resMenuSections = document.querySelectorAll('.responsive-menu-section');

if( showMenu ){

    showMenu.addEventListener('click', function(e){
        e.preventDefault();
        resMenu.style.display = 'block';
    });
    
    hideMenu.addEventListener('click', function(e){
        resMenu.style.display = 'none';
        resMenuOptions.forEach(function(item){
            item.style.display = 'grid';
        });
        resMenuSections.forEach(function(item){
            item.style.display = 'none';
        });
    });

    resMenuOptions.forEach(function(item){

        item.addEventListener('click', function(e){
            var id = this.dataset.section;
            if( id != undefined ){
                resMenuOptions.forEach(function(item){
                    item.style.display = 'none';
                });
                document.getElementById(''+id+'').style.display = 'block';
                resMenuTitle.style.display = 'none';
            }
        });

    });

    resMenuBack.forEach(function(item){
        item.addEventListener('click', function(e){
            this.parentNode.parentNode.style.display = 'none';
            resMenuOptions.forEach(function(item){
                item.style.display = 'grid';
            });
            resMenuTitle.style.display = 'grid';
        });
    });

}
