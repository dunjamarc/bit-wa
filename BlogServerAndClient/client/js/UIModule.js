const createBlog = (obj) => {
    let div = $(`<div>`);
    div.append(`<h1>${obj.title}</h1>`);
    div.append(`<p>${obj.intro}</p>`);
    $('main').append(div);
}

export default createBlog;