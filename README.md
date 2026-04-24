# 🏔️ Altos de Veracruz — v2.0 Multi-Página

Sitio web premium multi-página para la posada boutique **Altos de Veracruz**, Sanare, Venezuela.

---

## 🚀 Instalación rápida

```bash
npm install
npm run dev
# Abre http://localhost:5173
```

Para producción:
```bash
npm run build
npm run preview
```

---

## 📁 Páginas del sitio

| Ruta | Página |
|------|--------|
| `/` | Inicio — teaser con hero, preview de habitaciones, experiencias y promociones |
| `/habitaciones` | Todas las habitaciones con álbum de fotos |
| `/habitaciones/:id` | Detalle individual con lightbox completo |
| `/experiencias` | Todas las experiencias |
| `/experiencias/:id` | Detalle de cada experiencia |
| `/restaurante` | Restaurante Yagrumo con menú y galería |
| `/ruta-cafe` | Ruta del Café completa con itinerario |
| `/eventos` | Eventos y celebraciones |
| `/galeria` | Galería masonry filtrable con lightbox |
| `/promociones` | Todos los paquetes y promociones |
| `/nosotros` | Historia, misión, visión y valores |
| `/reservar` | Formulario de reserva → WhatsApp |

---

## ✏️ Editar contenido

Todo en **`src/data/content.ts`**:

- `CONTACT` → teléfonos, WhatsApp, email, redes
- `ROOMS` → habitaciones con arrays de fotos
- `EXPERIENCES` → experiencias
- `PROMOTIONS` → paquetes
- `GALLERY_IMAGES` → galería
- `CAFE_ROUTE` → ruta del café
- `EVENTS` → tipos de eventos
- `RESTAURANT_DISHES` → menú

### Cambiar WhatsApp:
```ts
whatsapp: '584125118090',  // sin + ni espacios
```

### Reemplazar fotos (poner URLs de Instagram u otras):
```ts
images: [
  'https://tu-cdn.com/foto1.jpg',
  'https://tu-cdn.com/foto2.jpg',
]
```

---

## 🎨 Colores en `tailwind.config.js`

- `forest` — verde principal
- `sand` — beige / arena  
- `cream` — fondo cálido `#faf6ef`
- `espresso` — marrón oscuro `#2c1810`
- `gold` — dorado `#c9a84c`

---

## ✅ Características

- ✅ Multi-página con React Router
- ✅ Mobile-first, 100% responsive
- ✅ Lightbox de fotos en habitaciones, restaurante, café y galería
- ✅ Álbum de fotos con thumbnails por habitación
- ✅ Galería masonry filtrable por categoría
- ✅ Botón WhatsApp flotante en todas las páginas
- ✅ Formulario de reserva → mensaje a WhatsApp
- ✅ Animaciones scroll-reveal
- ✅ Hero con carrusel automático Ken Burns
- ✅ Página de Ruta del Café con itinerario
- ✅ Página de Eventos con 6 tipos de celebración

---

**Altos de Veracruz · Sanare, Estado Lara · Venezuela 🇻🇪**
