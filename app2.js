console.log('hellow world');
// https://api.artic.edu/api/v1/artworks

window.addEventListener('load', function () {
    console.log('listening');
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
        .then(response => response.json())
        .then(data => {
            let artArray = data;
            console.log(artArray);

            // Function to fetch artwork with an accessible image
            function fetchArtworkWithImage(objectIDs) {
                let randomNum1 = Math.floor(Math.random() * objectIDs.length);
                let artSelection1 = objectIDs[randomNum1];
                console.log(artSelection1);

                fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + artSelection1)
                    .then(response => response.json())
                    .then(data => {
                        let artData = data;
                        console.log(artData);

                        if (artData.primaryImage) { // Check if primaryImage is accessible
                            let artWorkName1 = document.getElementById('artwork1');
                            artWorkName1.innerHTML = artData.title;
                            let artist1 = document.getElementById('artist1');
                            artist1.innerHTML = artData.artistDisplayName;
                            let year1 = document.getElementById('year1');
                            year1.innerHTML = artData.objectDate;
                            let artImagine1 = document.getElementById('artImage1');
                            artImagine1.src = artData.primaryImage;
                            console.log(artImagine1);
                        } else {
                            // If primaryImage is not accessible, fetch again
                            fetchArtworkWithImage(objectIDs);
                        }
                    })
                    .catch(error => {
                        console.log("Error!!! :" + error);
                    });
            }

            // Call the function to fetch artwork with an accessible image
            fetchArtworkWithImage(artArray.objectIDs);


            function fetchArtworkWithImage2(objectIDs) {
                let randomNum2 = Math.floor(Math.random() * objectIDs.length);
                let artSelection2 = objectIDs[randomNum2];
                console.log(artSelection2);

                fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + artSelection2)
                    .then(response => response.json())
                    .then(data => {
                        let artData = data;
                        console.log(artData);

                        if (artData.primaryImage) { // Check if primaryImage is accessible
                            let artWorkName2 = document.getElementById('artwork2');
                            artWorkName2.innerHTML = artData.title;
                            let artist2 = document.getElementById('artist2');
                            artist2.innerHTML = artData.artistDisplayName;
                            let year2 = document.getElementById('year2');
                            year2.innerHTML = artData.objectDate;
                            let artImagine2 = document.getElementById('artImage2');
                            artImagine2.src = artData.primaryImage;
                            console.log(artImagine2);
                        } else {
                            // If primaryImage is not accessible, fetch again
                            fetchArtworkWithImage2(objectIDs);
                        }
                    })
                    .catch(error => {
                        console.log("Error!!! :" + error);
                    });
            }

            // Call the function to fetch artwork with an accessible image
            fetchArtworkWithImage(artArray.objectIDs);

            fetchArtworkWithImage2(artArray.objectIDs);
        });
});
