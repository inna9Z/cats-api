<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Cat</title>
    </head>
    <body>
        <h1 class="title">Cat</h1>
        <div class="book-container">
            <img src="<%= book.src %>" alt="<%= book.name %>" />
            <h1 class="title"><%= cat.name %></h1>
            <p><%= cat.author%></p>
            
        </div>
    </body>
</html>