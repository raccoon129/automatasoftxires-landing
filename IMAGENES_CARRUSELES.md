# Imágenes Requeridas para los Carruseles

Este documento lista todas las imágenes que necesitas colocar en la carpeta `public/` para que los carruseles funcionen correctamente.

## 📁 Estructura de Archivos Requerida

```
public/
├── proyecto1.jpg          # Proyecto App Móvil
├── proyecto2.jpg          # Proyecto E-commerce  
├── proyecto3.jpg          # Proyecto Sistema CRM
├── proyecto4.jpg          # Proyecto Landing Page
├── proyecto5.jpg          # Proyecto Automatización
├── proyecto-video1.jpg    # Video Corporativo
├── proyecto-video2.jpg    # Video Redes Sociales
├── proyecto-video3.jpg    # Video Tutorial Educativo
├── video1.jpg             # Thumbnail Video Corporativo
├── video2.jpg             # Thumbnail Video Marketing
├── video3.jpg             # Thumbnail Video Educativo
├── marca1.png             # Logo Marca 1
└── marca2.png             # Logo Marca 2
```

## 🎠 Carruseles y sus Imágenes

### 1. **Sección Renovación** - Carrusel de Proyectos
- `proyecto1.jpg` - App Móvil (Desarrollo)
- `proyecto2.jpg` - E-commerce (Web)
- `proyecto3.jpg` - Sistema CRM (Gestión)
- `proyecto4.jpg` - Landing Page (Marketing)
- `proyecto5.jpg` - Automatización (Procesos)

**Dimensiones recomendadas:** 400x280px (aspecto 4:3)

### 2. **Sección Proyectos** - Carrusel de Videos Editados
- `proyecto-video1.jpg` - Video Corporativo
- `proyecto-video2.jpg` - Video Redes Sociales
- `proyecto-video3.jpg` - Video Tutorial Educativo

**Dimensiones recomendadas:** 500x300px (aspecto 16:9)

### 3. **Sección Videos** - Carrusel de Videos
- `video1.jpg` - Thumbnail Video Corporativo (Empresarial)
- `video2.jpg` - Thumbnail Video Redes Sociales (Marketing)
- `video3.jpg` - Thumbnail Video Tutorial Formativo (Educativo)

**Dimensiones recomendadas:** 400x250px (aspecto 16:10)

### 4. **Sección Videos** - Carrusel de Marcas
- `marca1.png` - Logo Marca 1 (fondo transparente preferible)
- `marca2.png` - Logo Marca 2 (fondo transparente preferible)

**Dimensiones recomendadas:** 200x80px (horizontal)

## ✨ Características Implementadas

### Fallback System
- Si una imagen no existe, se muestra un fondo con gradiente y texto
- Manejo automático de errores de carga

### Efectos Visuales
- **Overlays con gradientes** para mejor legibilidad del texto
- **Filtros grayscale** en marcas que se quitan al hover
- **Sombras y bordes redondeados** para un diseño moderno
- **Transiciones suaves** en todos los elementos

### Responsive Design
- Todos los carruseles se adaptan a diferentes tamaños de pantalla
- Imágenes con `object-fit: cover` para mantener proporciones
- Texto con `text-shadow` para visibilidad en cualquier imagen

## 🎯 Recomendaciones

1. **Calidad de imagen:** Usa imágenes de alta resolución (mínimo 1200px de ancho)
2. **Formato:** JPG para fotografías, PNG para logos con transparencia
3. **Optimización:** Comprime las imágenes para web (70-80% calidad)
4. **Consistencia:** Mantén un estilo visual coherente entre todas las imágenes
5. **Nombres exactos:** Usa exactamente los nombres de archivo listados arriba

## 🔄 Carruseles Activos

- ✅ **Renovación:** 5 proyectos, 25s duración
- ✅ **Proyectos:** 3 videos editados, 20s duración  
- ✅ **Videos:** 3 thumbnails, 15s duración
- ✅ **Marcas:** 2 logos, 10s duración

Todos los carruseles tienen **movimiento continuo horizontal** y **loop infinito**.
