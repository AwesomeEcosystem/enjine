---
title: Components
description: ''
position: 13
category: 'guide'
---

> Requires `VueJS` or `NuxtJS`

## Layer Design Principles

If you use these principles, your GUI will automatically be designed the right way.

```html
<App> <!-- Base -->
  <Layout> <!-- Layer -->
    <Container> <!-- Base -->
      <Card></Card> <!-- Layer -->
    </Container>
  </Layout>
</App>
```

> *under the Hood:* ***Vuejs Components*** styled with ***Tailwindcss***
