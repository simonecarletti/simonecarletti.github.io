async function loadTemplate(templateName, context, targetId) {
    const target = document.getElementById(targetId);
    if (!target) {
        console.error(`Element with ID ${targetId} not found.`);
        return;
    }
    
    // return new Promise((resolve, reject) => {
    //     fetch('./templates/' + templateName)
    //         .then((response) => response.text()) // Get the template text
    //         .then((templateSource) => {
    //             // Compile the template using Handlebars
    //             const template = Handlebars.compile(templateSource);

    //             // Render the HTML with the context data
    //             const result = template(context);

    //             // Insert rendered HTML into the 'app' div
    //             target.innerHTML = result;

    //             requestAnimationFrame(() => resolve());
    //         })
    //         .catch((error) => (console.error("Error loading the template:", error), reject(error)));
    // });

    return fetch('./templates/' + templateName)
        .then((response) => response.text()) // Get the template text
        .then((templateSource) => {
            // Compile the template using Handlebars
            const template = Handlebars.compile(templateSource);

            // Render the HTML with the context data
            const result = template(context);

            // Insert rendered HTML into the 'app' div
            target.innerHTML = result;
        })
        .catch((error) => console.error("Error loading the template:", error));
}
