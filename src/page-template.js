// Create the employee cards based on user's inputs
const generateCards = employeeArray => {
    console.log("Generate cards function", employeeArray);
    console.log("Generate cards function element 0", employeeArray[0]);
    return `
        <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
        <div class="flex-row justify-space-between">
        ${employeeArray[0].getName()}
        ${employeeArray[0].id}
        ${employeeArray[0].email}
        ${employeeArray[0].role}
        ${employeeArray[0].officeNum}

        ${employeeArray
            .filter(elements => elements.github !== undefined )
            .map(elements => {
                return `${elements.getGithub()}` 
            }).join("")
        }

        ${employeeArray
            .filter(elements => elements.school !== undefined)
            .map(elements => {
                return `${elements.getSchool()}`
                
            }).join("")
        }

        </div>
        </section>
    `;
};

// export function to generate entire page
module.exports = employeeArray => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary">Project Manager</h1>
        </div>
        </header>
        <main class="container my-5">
            ${generateCards(employeeArray)}
        </main>

    </body>
    </html>
    `;
};