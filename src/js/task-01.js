// 1.
const quantityLiItem = document.querySelectorAll('.item')
// console.dir(quantityLiItem)
console.dir(`Number of categories: ${quantityLiItem.length}`)


// 2.
quantityLiItem.forEach((element => {
    const titleTextElement = element.firstElementChild;
    console.log('Category:', titleTextElement.textContent);

    const ulByCategory = titleTextElement.nextElementSibling;
// console.log(ulByCategory)

    
    const quantityLiItemByCategory = ulByCategory.children;
    console.log( `Elements: ${quantityLiItemByCategory.length}`)

}))