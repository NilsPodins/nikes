fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        // Access the data and do something with it
        console.log(data);
        // Display the data on the screen
        displayData(data);
    })
    .catch(error => {
        console.log('Error:', error);
    });


function displayData(data) {
    // Assuming you have an element with the id "output" to display the data
    const outputElement = document.getElementById('output');

    // Clear the output element
    outputElement.innerHTML = '';

    // Iterate through the data and create HTML elements to display the information
    data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('items');
        productElement.innerHTML = `
    <img class="img" src="${product.image}">
<div class='img-box'>
<p class="title">${product.title}</p>
<p class="price">$${product.price}</p>
</div>
`;
        outputElement.appendChild(productElement);
    });
}

function featured() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {

            // Access the data and do something with it
            console.log(data);
            // Display the data on the screen
            displayData(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });


    function displayData(data) {
        // Assuming you have an element with the id "output" to display the data
        const outputElement = document.getElementById('output');

        // Clear the output element
        outputElement.innerHTML = '';

        // Iterate through the data and create HTML elements to display the information
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('items');
            productElement.innerHTML = `
    <img class="img" src="${product.image}">
<div class='img-box'>
<p class="title">${product.title}</p>
<p class="price">$${product.price}</p>
</div>
`;
            outputElement.appendChild(productElement);
        });
    }
}

function newest() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {

            // Access the data and do something with it
            console.log(data);
            // Display the data on the screen
            displayData(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });


    function displayData(data) {
        // Assuming you have an element with the id "output" to display the data
        const outputElement = document.getElementById('output');

        // Clear the output element
        outputElement.innerHTML = '';
        const sortedData = data.sort((a, b) => b.id - a.id);

        // Iterate through the data and create HTML elements to display the information
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('items');
            productElement.innerHTML = `
            <img class="img" src="${product.image}">
        <div class='img-box'>
        <p class="title">${product.title}</p>
        <p class="price">$${product.price}</p>
        </div>
    `;
            outputElement.appendChild(productElement);
        });
    }
}

function lowHigh() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {

            // Access the data and do something with it
            console.log(data);
            // Display the data on the screen
            displayData(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });


    function displayData(data) {
        // Assuming you have an element with the id "output" to display the data
        const outputElement = document.getElementById('output');

        // Clear the output element
        outputElement.innerHTML = '';

        const sortedData = data.sort((a, b) => a.price - b.price);
        // Iterate through the data and create HTML elements to display the information
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('items');
            productElement.innerHTML = `
            <img class="img" src="${product.image}">
        <div class='img-box'>
        <p class="title">${product.title}</p>
        <p class="price">$${product.price}</p>
        </div>
    `;
            outputElement.appendChild(productElement);
        });
    }
}

function highLow() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {

            // Access the data and do something with it
            console.log(data);
            // Display the data on the screen
            displayData(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });


    function displayData(data) {
        // Assuming you have an element with the id "output" to display the data
        const outputElement = document.getElementById('output');

        // Clear the output element
        outputElement.innerHTML = '';
        const sortedData = data.sort((a, b) => b.price - a.price);
        // Iterate through the data and create HTML elements to display the information
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('items');
            productElement.innerHTML = `
            <img class="img" src="${product.image}">
        <div class='img-box'>
        <p class="title">${product.title}</p>
        <p class="price">$${product.price}</p>
        </div>
    `;
            outputElement.appendChild(productElement);
        });
    }
}



// fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => {
//         // Add the new product to the data
//         const newProduct = {
//             title: 'New Product',
//             price: 19.99,
//             description: 'This is a new product.',
//             category: 'electronics',
//             image: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/46c88fa2-8d40-46ad-8c0c-c40e05776738/court-legacy-next-nature-womens-shoes-8r07x0.png'
//         };
//         const dataWithNewProduct = [...data, newProduct];

//         // Display the updated data on the screen
//         displayData(dataWithNewProduct);
//     })
//     .catch(error => {
//         console.log('Error:', error);
//     });

// function displayData(data) {
//     // Assuming you have an element with the id "output" to display the data
//     const outputElement = document.getElementById('output');

//     // Clear the output element
//     outputElement.innerHTML = '';

//     // Iterate through the data and create HTML elements to display the information
//     data.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.innerHTML = `
//         <h2>${product.title}</h2>
//         <p>Price: $${product.price}</p>
//         <p>Description: ${product.description}</p>
//         <img src="${product.image}" alt="${product.title}">
//     `;
//         outputElement.appendChild(productElement);
//     });
// }

