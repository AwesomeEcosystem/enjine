---
title: Components
description: ''
position: 13
category: 'client'
---

> Requires `enjine` or `VueJS` or `NuxtJS`

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

### Base

The **Base** always maintains a Layer.

#### App

#### Container

### Layer

The **Layer** is the place there the magic happens.

#### Layout

#### Card
