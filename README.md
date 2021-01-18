# The Shoppies

[Try it!](https://dvdli.dev/The-Shoppies)

This project was created for the Shopify Web Developer Intern Challenge (Summer 2021)

[Challenge Specification](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit?usp=sharing)

## Tech stack
- React (via Create-React-App)
- TailwindCSS
- Redux
- React Testing Library & Jest

## Considerations

### Live search
I chose to add live search as it has become quite the norm for most people. To mitigate the downsides of repeated calls, the search is debounced and all get requests are cached.

### Utility-First CSS
I chose not to use a UI framework for this project and to try to see what kind of results I could get with *mostly* my own components. Instead, I used Tailwind and its utility classes to style all the components. I find that it helps me write components faster and with less code.

### Maintainablity
I tried to keep the application easily maintainable and scalable. This included using Redux as a state manager and writing integration tests to cover the user interactions and app functionality.
