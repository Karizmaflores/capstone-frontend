    // const $galleryContainer = document.querySelector('.couch-container');
    
    // function showCouches(randomNumber){
    //   fetch(`https://source.unsplash.com/collection/8700800`) 
    //     .then((response)=> {    
    //       let couch = document.createElement('div');
    //       couch.classList.add('gallery-item');
    //       couch.innerHTML = `
    //         <img class="gallery-image" src="${response.url}" alt="gallery image"/>
    //       `
    //       $galleryContainer.appendChild(couch);
    //     })
    // }

    
   function showCouchPics(){
    fetch("https://unsplash.com/collections/8700800/photos")
    .then((response) => {
        response.json();
    }).then((data) => {
        console.log(data)
 })
}