fetch('./data/blog-data.json')
.then(response => response.json())
.then(blogs => {

    blogs.sort((a,b)=>new Date(b.date)-new Date(a.date));

    const featured = blogs[0];

    document.getElementById('featuredBlog').innerHTML = `
        <div class="featured-card">
            <div class="row g-0 align-items-center">

                <div class="col-lg-6">
                    <img src="${featured.image}"
                         class="img-fluid featured-img">
                </div>

                <div class="col-lg-6">
                    <div class="featured-content">

                        <span class="blog-date">
                            ${featured.date}
                        </span>

                        <h3>
                            ${featured.title}
                        </h3>

                        <p>
                            ${featured.excerpt}
                        </p>

                        <a href="${featured.url}" class="read-btn">
                            Read Article →
                        </a>

                    </div>
                </div>

            </div>
        </div>
    `;

    const blogGrid = document.getElementById('blogGrid');

    blogs.slice(1).forEach(blog => {

        blogGrid.innerHTML += `
            <div class="col-lg-6">

                <div class="blog-card">

                    <img src="${blog.image}">

                    <div class="blog-content">

                        <span class="blog-date">
                            ${blog.date}
                        </span>

                        <h4>
                            ${blog.title}
                        </h4>

                        <a href="${blog.url}">
                            Read More →
                        </a>

                    </div>

                </div>

            </div>
        `;

    });

});