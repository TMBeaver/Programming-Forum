function toggleCategory(category) {
    const categories = ['discussions', 'questions', 'guides'];

    categories.forEach(cat => {
        const categoryElement = document.querySelector(`.${cat}`);
        categoryElement.style.color = '#f8f4f4';
        categoryElement.style.borderRadius = '0';
    });

    const clickedCategory = document.querySelector(`.${category}`);
    clickedCategory.style.color = '#000';
    clickedCategory.style.borderRadius = '50%';
}

