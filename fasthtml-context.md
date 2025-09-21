# FastHTML Documentation Summary

## Key Concepts

### FastTags (FTs)
- FT components are m-expressions plus simple sugar
- Positional params map to children
- Named parameters map to attributes
- Aliases must be used for Python reserved words

### Basic Usage
```python
from fasthtml.common import *
tags = Title("FastHTML"), H1("My web app"), P(f"Let's do this!", cls="myclass")
```

### Component Creation
```python
def Hero(title, statement): 
    return Div(H1(title), P(statement), cls="hero")
```

### App Structure
```python
app, rt = fast_app()

@rt("/")
def get():
    return Title("Page Title"), H1("Hello World")

serve()
```

### Key Features
- All standard HTML tags included in wildcard import
- HEAD tags automatically placed in HEAD; other tags in BODY
- Classes with `__ft__` are rendered using that method
- Support for CSS frameworks (Pico, MonsterUI)
- JavaScript inclusion via `Script()` function
- Form handling with `fill_form`
- WebSockets, SSE, cookies support

### Best Practices
- Define components as functions
- Use `Titled` for pages with title and header
- Leverage `to_xml` for rendering
- Combine components for complex UIs
- Use `cls` for CSS classes
- Handle attributes via keyword args
