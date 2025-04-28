async function loadTemplate(templateName, context, targetId) {
    return fetch('./templates/' + templateName)
        .then((response) => response.text()) // Get the template text
        .then((templateSource) => {
            // Compile the template using Handlebars
            const template = Handlebars.compile(templateSource);

            // Render the HTML with the context data
            const result = template(context);

            // Insert rendered HTML into the 'app' div
            document.getElementById(targetId).innerHTML = result;
        })
        .catch((error) => console.error("Error loading the template:", error));
}
