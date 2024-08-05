document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del filtro y clasificación de autos (si tienes otros códigos aquí)
    
    const searchForm = document.getElementById('searchForm');
    const searchName = document.getElementById('searchName');
    const searchYear = document.getElementById('searchYear');
    const searchModel = document.getElementById('searchModel');
    const carContainer = document.getElementById('carContainer');
    const carItems = Array.from(carContainer.getElementsByClassName('car-item'));
    const sortSelect = document.getElementById('sortSelect');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameValue = searchName.value.toLowerCase();
        const yearValue = searchYear.value;
        const modelValue = searchModel.value.toLowerCase();

        carItems.forEach(car => {
            const carName = car.getAttribute('data-name').toLowerCase();
            const carYear = car.getAttribute('data-year');
            const carModel = car.getAttribute('data-model').toLowerCase();

            const isNameMatch = nameValue === '' || carName.includes(nameValue);
            const isYearMatch = yearValue === '' || carYear === yearValue;
            const isModelMatch = modelValue === '' || carModel.includes(modelValue);

            if (isNameMatch && isYearMatch && isModelMatch) {
                car.style.display = '';
            } else {
                car.style.display = 'none';
            }
        });
    });

    sortSelect.addEventListener('change', function () {
        const selectedValue = sortSelect.value;
        let sortedCars;

        switch (selectedValue) {
            case 'price-asc':
                sortedCars = carItems.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
                break;
            case 'price-desc':
                sortedCars = carItems.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
                break;
            case 'km-asc':
                sortedCars = carItems.sort((a, b) => parseFloat(a.getAttribute('data-km')) - parseFloat(b.getAttribute('data-km')));
                break;
            case 'km-desc':
                sortedCars = carItems.sort((a, b) => parseFloat(b.getAttribute('data-km')) - parseFloat(a.getAttribute('data-km')));
                break;
            case 'year-asc':
                sortedCars = carItems.sort((a, b) => parseInt(a.getAttribute('data-year')) - parseInt(b.getAttribute('data-year')));
                break;
            case 'year-desc':
                sortedCars = carItems.sort((a, b) => parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year')));
                break;
            default:
                sortedCars = carItems;
        }

        // Elimina todos los elementos actuales del contenedor y añade los ordenados
        carContainer.innerHTML = '';
        sortedCars.forEach(car => carContainer.appendChild(car));
    });

    // Funcionalidad del carrusel
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function() {
        index = (index + 1) % carouselItems.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        index = (index - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    updateCarousel();  // Initialize the carousel position
});
